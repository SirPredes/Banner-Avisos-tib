import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/o/banner-avisos-tib',
  build: {
    
    commonjsOptions: {
      include: [], // evita transformar node_modules, sino da error por contener require(), que esta deprecado
    },

    target: 'esnext',
    outDir: './vite-build',
    modulePreload: true,
    rollupOptions: {
      output: {
        format: 'es',
        entryFileNames: 'assets/[name]-[hash].js', //Estos tres no se realmente si son necesarios
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    }
    
  },
  
  optimizeDeps: { //Sino no funciona en liferay, aunque en local no hace falta (sin liferay)
    exclude: ['react'],//, 'react-dom'], --> Si pones react-dom com exclude no funciona en liferay por lo de require mencionado arriba
  },

  plugins: [
    react(),
  ]
})
