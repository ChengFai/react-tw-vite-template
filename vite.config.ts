import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { defineConfig, loadEnv, UserConfigExport } from 'vite'
// import { chunkSplitPlugin } from 'vite-plugin-chunk-split';


const isProduction = process.env.type === 'prod'

process.env.VITE_MODE = isProduction ? 'production' : 'development'

export default defineConfig(({ mode }) => {
	return {
		plugins: [
			react(), 
			svgr({}),
			// chunkSplitPlugin(),
		],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
				'~': path.resolve(__dirname, './src'),
			}
		},
		server: {
			port: 3000,
			open: true,
			proxy: {
				'/api': {
					target: loadEnv(mode, process.cwd()).VITE_BACKEND_URL,
					changeOrigin: true,
					secure: false,
				}
			},
		},
		build: {
			rollupOptions: {
				external: [/^node:\w+/],
			},
		},
	}
}) as UserConfigExport

