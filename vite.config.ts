import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import inject from '@rollup/plugin-inject';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import injectProcessEnv from 'rollup-plugin-inject-process-env';

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
  define:{
    'process.env': process.env,
      global: "window",
      
      
  },
  server: {
    host: true
  },


  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    sourcemap: true,
    rollupOptions: {
			plugins: [inject({ Buffer: ['buffer', 'Buffer'],process: [ 'process', '*' ],
    
    }), 
      injectProcessEnv({ 
        NODE_ENV: 'production',
        nextTick: process.nextTick})
    ],
		},
  },
  optimizeDeps: {
    esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
            global: 'globalThis'
        },
        // Enable esbuild polyfill plugins
        plugins: [
            NodeGlobalsPolyfillPlugin({
                buffer: true
            })
        ]
    }
}
})