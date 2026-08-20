import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  ssr: {
    // redux-persist's `integration/react` entry is a legacy directory import
    // that Node's ESM resolver can't handle, so bundle it instead of externalizing.
    noExternal: ["redux-persist"],
  },
});
