import { SwaggerUiOptions } from 'swagger-ui-express';
import docStyles from 'docs/assets/styles/docStyles';

const defaultConfigs = {
  customSiteTitle: 'WaClone - Docs',
  customCss: docStyles,
  customfavIcon: '/assets/waclone.ico',
} as SwaggerUiOptions;

const swaggerConfig = () => {
  if (process.env.AMBIENT === 'PROD') {
    return {
      ...defaultConfigs,
      swaggerOptions: {
        plugins: [
          {
            statePlugins: {
              spec: {
                wrapSelectors: {
                  allowTryItOutFor: () => () => false,
                },
              },
            },
          },
        ],
      },
    } as SwaggerUiOptions;
  }
  return defaultConfigs;
};

export default swaggerConfig();
