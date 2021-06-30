export default {
  get: {
    description: 'Get all settings from bot.',
    operationId: 'getConfigs',
    tags: ['Configs'],
    responses: {
      '200': {
        description: 'Return a list of settings',
        content: {
          'application/json': {
            schema: {
              required: [],
              $ref: '#/components/schemas/Configs',
            },
          },
        },
      },
    },
  },
};
