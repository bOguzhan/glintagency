import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  // 1. We enable the experimental flag to stop the terminal error
  experimental: {
    session: true,
  },
	vite: {
		server: {
			watch: {
				usePolling: true,
			},
		},
	},

	markdown: {
		drafts: true,
		shikiConfig: {
			theme: "css-variables",
		},
	},
	shikiConfig: {
		wrap: true,
		skipInline: false,
		drafts: true,
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		mdx(),
		icon(),
	],
image: {
  domains: ['89.168.120.151'],
  service: { entrypoint: 'astro/assets/services/noop' }
},
site: 'http://89.168.120.151',
});
