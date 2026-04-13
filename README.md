# @get-coral/ui

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
