import { coralFmt } from "@get-coral/oxfmt-config";
import { coralReactLint } from "@get-coral/oxlint-config";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

export default defineConfig({
	plugins: [react()],
	pack: {
		entry: ["src/index.ts"],
		format: ["esm", "cjs"],
		// Keep tsup's file names (index.js + index.cjs) so the published exports do not move.
		fixedExtension: false,
		dts: true,
		publint: true,
		deps: {
			neverBundle: ["react", "react-dom", /^react\//],
		},
	},
	test: {
		// jsdom + the React plugin let you render exported components with @testing-library/react.
		environment: "jsdom",
		globals: true,
		include: ["src/**/*.test.{ts,tsx}"],
	},
	lint: {
		extends: [coralReactLint],
		jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
		rules: { "vite-plus/prefer-vite-plus-imports": "error" },
		options: { typeAware: true, typeCheck: true },
	},
	fmt: {
		...coralFmt,
		ignorePatterns: ["CHANGELOG.md", ".release-please-manifest.json", "release-please-config.json"],
	},
});
