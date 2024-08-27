import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run cypressExample:serve',
        production: 'nx run cypressExample:preview',
      },
      ciWebServerCommand: 'nx run cypressExample:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
