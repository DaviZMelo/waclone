export default {
  get: {
    description: 'Get the master user.',
    operationId: 'getMasterUser',
    tags: ['Users'],
    responses: {
      '200': {
        description: 'Returns the master user.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/AllowedUser',
            },
            example: 5511964945942,
          },
        },
      },
    },
  },
};
