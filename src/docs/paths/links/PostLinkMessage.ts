export default {
  post: {
    description:
      'Defines the message that accompanies the sending of the link to contacts, if link mode is enabled..',
    operationId: 'setLinkMessage',
    tags: ['Links'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              linkMessage: {
                $ref: '#/components/schemas/LinkMessage',
              },
            },
          },
        },
      },
      required: true,
    },
    responses: {
      '200': {
        description: 'The link message has been setted',
      },
    },
  },
};
