# @get-coral/ui

[![GitHub Sponsors](https://img.shields.io/badge/Sponsor-ElianCodes-ea4aaa?logo=githubsponsors&logoColor=white)](https://github.com/sponsors/ElianCodes)
[![Discord](https://img.shields.io/discord/1495441903297237043?label=Discord&logo=discord&logoColor=white&color=5865F2)](https://discord.gg/M3wzFpGbzp)

Shared Coral design-system package for reusable React components and design tokens.

## Install

```bash
pnpm add @get-coral/ui
```

## Usage

```tsx
import { CoralButton, CoralCard } from "@get-coral/ui";
import "@get-coral/ui/styles.css";

export function Example() {
  return (
    <CoralCard title="Shared UI">
      <CoralButton variant="primary">Launch</CoralButton>
    </CoralCard>
  );
}
```

## Development

```bash
pnpm --dir coral-ui install
pnpm --dir coral-ui build
pnpm --dir coral-ui check
```

## Publish

```bash
pnpm --dir coral-ui build
pnpm --dir coral-ui publish --access public
```
