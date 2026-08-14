import portableMcp from "../mcp.json" with { type: "json" };
import portablePlugin from "../plugin.json" with { type: "json" };

const pluginRoot = `${import.meta.dirname}/..`;
const pluginNamePattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u;
const semverPattern =
  /^(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/u;
const repository = "https://github.com/vanadotso/agent-plugin";

const { author, description, extensions, homepage, name, version } =
  portablePlugin;
const openAi = extensions["so.vana.openai"];
if (!pluginNamePattern.test(name)) {
  throw new TypeError("plugin.json.name must use lower-case kebab-case");
}
if (!semverPattern.test(version)) {
  throw new TypeError(
    "plugin.json.version must use strict semantic versioning"
  );
}
if (Object.keys(portableMcp.mcpServers).length === 0) {
  throw new TypeError("mcp.json.mcpServers must define at least one server");
}

const codexServers = Object.fromEntries(
  Object.entries(portableMcp.mcpServers).map(([serverName, server]) => {
    if (server.type !== "streamable-http") {
      throw new TypeError(
        `${serverName} must use the streamable-http transport`
      );
    }
    return [
      serverName,
      {
        oauth_resource: server.url,
        type: "http",
        url: server.url,
      },
    ];
  })
);
const claudeServers = Object.fromEntries(
  Object.entries(portableMcp.mcpServers).map(([serverName, server]) => [
    serverName,
    {
      type: "http",
      url: server.url,
    },
  ])
);

const sharedManifest = {
  author,
  description,
  homepage,
  license: "Apache-2.0",
  name,
  repository,
  skills: "./skills/",
  version,
};

const codexManifest = {
  ...sharedManifest,
  interface: {
    capabilities: openAi.capabilities,
    category: openAi.category,
    defaultPrompt: openAi.defaultPrompt,
    developerName: openAi.pluginAuthor,
    displayName: openAi.displayName,
    longDescription: description,
    privacyPolicyURL: openAi.privacyPolicyUrl,
    shortDescription: openAi.subtitle,
    termsOfServiceURL: openAi.termsOfServiceUrl,
    websiteURL: openAi.websiteUrl,
  },
  mcpServers: codexServers,
};

const claudeManifest = {
  ...sharedManifest,
  displayName: openAi.displayName,
  mcpServers: "./.mcp.json",
};

const codexMarketplace = {
  interface: { displayName: openAi.displayName },
  name,
  plugins: [
    {
      category: openAi.category,
      name,
      policy: {
        authentication: "ON_INSTALL",
        installation: "AVAILABLE",
      },
      source: {
        path: "./",
        source: "local",
      },
    },
  ],
};

const claudeMarketplace = {
  description: "VANA plugins for personal protocol creation and execution.",
  name,
  owner: author,
  plugins: [
    {
      category: openAi.category,
      description: "Create, run, and review personal protocols with VANA.",
      displayName: openAi.displayName,
      license: "Apache-2.0",
      name,
      repository,
      source: "./",
    },
  ],
};

const outputs = [
  [".agents/plugins/marketplace.json", codexMarketplace],
  [".claude-plugin/marketplace.json", claudeMarketplace],
  [".claude-plugin/plugin.json", claudeManifest],
  [".codex-plugin/plugin.json", codexManifest],
  [".mcp.json", claudeServers],
] as const;

const writes: Promise<number>[] = [];
for (const [relativePath, value] of outputs) {
  writes.push(
    Bun.write(
      `${pluginRoot}/${relativePath}`,
      `${JSON.stringify(value, null, 2)}\n`
    )
  );
}
await Promise.all(writes);

process.stdout.write(
  `Packaged ${name}@${version} for Codex and Claude Code.\n`
);
