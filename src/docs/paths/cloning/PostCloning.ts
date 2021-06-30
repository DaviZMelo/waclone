export default {
  post: {
    description: 'Start the group cloning',
    operationId: 'startCloning',
    tags: ['Cloning'],
    responses: {
      '200': {
        description: 'The group cloning has been started',
      },
      '404': {
        description: 'The settings have not yet been set.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
            example: {
              status: 'error',
              message: 'The settings have not yet been set.',
            },
          },
        },
      },
    },
  },
};
