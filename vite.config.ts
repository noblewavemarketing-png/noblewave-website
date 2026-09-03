import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          services: path.resolve(__dirname, 'services.html'),
          aiConsultancy: path.resolve(__dirname, 'ai-consultancy.html'),
          aiAutomation: path.resolve(__dirname, 'ai-automation.html'),
          aiVoice: path.resolve(__dirname, 'ai-voice.html'),
          contentAutomation: path.resolve(__dirname, 'content-automation.html'),
          aiSeo: path.resolve(__dirname, 'ai-seo.html'),
          websites: path.resolve(__dirname, 'websites.html'),
          leadGeneration: path.resolve(__dirname, 'lead-generation.html'),
          aiStrategySession: path.resolve(__dirname, 'ai-strategy-session.html'),
          about: path.resolve(__dirname, 'about.html'),
          pricing: path.resolve(__dirname, 'pricing.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          privacy: path.resolve(__dirname, 'privacy.html'),
          mississauga: path.resolve(__dirname, 'mississauga.html'),
          freeAudit: path.resolve(__dirname, 'free-audit.html'),
        },
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'motion'],
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
