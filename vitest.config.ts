import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// A dedicated vitest config for the component library. jsdom + the React plugin
// let you render exported components with @testing-library/react.
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
