export default {
  delete: {
    description: 'Stop the group cloning',
    operationId: 'stopCloning',
    tags: ['Cloning'],
    responses: {
      '200': {
        description: 'The group cloning has been stopped',
      },
      '409': {
        description: 'There is no group cloning running',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
            example: {
              status: 'error',
              message: 'There is no group cloning running',
            },
          },
        },
      },
    },
  },
};
