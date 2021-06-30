export default {
  get: {
    description:
      'Gets the message that accompanies the sending of the link, if link mode is enabled.',
    operationId: 'getLinkMessage',
    tags: ['Links'],
    responses: {
      '200': {
        description: 'Returns the link message',
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemas/LinkMessage',
            },
            example: 'Hi, join in my group!',
          },
        },
      },
    },
  },
};
