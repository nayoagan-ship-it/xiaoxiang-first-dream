import {defineConfig} from 'vite';
export default defineConfig({base:'./',server:{forwardConsole:false,watch:{ignored:['**/.cache/**','**/outputs/**','**/tools/**','**/assets/*.blend','**/assets/*.glb']}},build:{chunkSizeWarningLimit:800}});
