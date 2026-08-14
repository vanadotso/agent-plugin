# VANA agent plugin

This repository contains the VANA agent plugin for Codex and Claude Code. The plugin connects each harness to the hosted VANA MCP server and adds skills that help people create, run, and review personal protocols.

## Install

### Codex

```sh
codex plugin marketplace add vanadotso/agent-plugin
codex plugin add vana@vana
```

### Claude Code

```sh
claude plugin marketplace add vanadotso/agent-plugin
claude plugin install vana@vana
```

## Contents

- `plugin.json` defines the portable plugin metadata.
- `mcp.json` connects the plugin to the hosted VANA MCP server.
- `skills/protocol-author` creates and revises protocols.
- `skills/protocol-runner` runs protocols and records progress.
- `.codex-plugin/plugin.json` defines the Codex plugin.
- `.agents/plugins/marketplace.json` defines the Codex marketplace.
- `.claude-plugin/plugin.json` defines the Claude Code plugin.
- `.claude-plugin/marketplace.json` defines the Claude Code marketplace.

The host manifests and marketplaces are generated files. To regenerate them, install [Bun](https://bun.sh/) and run:

```sh
bun install
bun run package
```

For a release, change the version in `plugin.json`, regenerate the host files, commit all changes, and create a Git tag with the same version, such as `v1.1.0`.

The hosted MCP server implementation is not part of this repository.

## License

The source in this repository uses the Apache License 2.0. The license does not grant rights to the VANA name or trademarks.
