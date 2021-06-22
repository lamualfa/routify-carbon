import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { minify } from "html-minifier";
import { optimizeImports, optimizeCss } from "carbon-preprocess-svelte";

const minifyHtml = () => {
  return {
    name: "html-transform",
    transformIndexHtml(html) {
      return minify(html, {
        collapseWhitespace: true,
      });
    },
  };
};

module.exports = defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    optimizeDeps: {
      exclude: ["@roxi/routify"],
      include: ["clipboard-copy"],
    },
    plugins: [
      svelte({
        preprocess: [optimizeImports()],
      }),
      isProduction && optimizeCss(),
      isProduction && minifyHtml(),
    ],
    build: {
      minify: isProduction,
    },
  };
});
