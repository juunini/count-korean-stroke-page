import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			strict: true,
		}),
		paths: {
			assets: 'https://ko-stroke.netlify.app',
		}, 
	}
};

export default config;
