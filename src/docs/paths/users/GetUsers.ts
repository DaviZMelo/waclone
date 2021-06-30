export default {
  get: {
    description: 'Get the list of users allowed to use the bot.',
    operationId: 'getAllowedUsers',
    tags: ['Users'],
    responses: {
      '200': {
        description: 'Returns the list of allowed users.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/AllowedUsers',
            },
            example: [5511964945942],
          },
        },
      },
    },
  },
};
