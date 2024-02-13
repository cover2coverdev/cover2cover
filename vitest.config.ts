import { fileURLToPath } from "node:url";
import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  // any custom Vitest config you require
  optimizeDeps: {
    noDiscovery: true,
    include: undefined
  },
  test: {
    globals: true,
  },
});
