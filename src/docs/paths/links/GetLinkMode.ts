export default {
  get: {
    description:
      'Gets whether the bot sends links or will add contacts to groups.',
    operationId: 'getLinkMode',
    tags: ['Links'],
    responses: {
      '200': {
        description: 'Returns the link mode.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/LinkMode',
            },
            example: true,
          },
        },
      },
    },
  },
};
