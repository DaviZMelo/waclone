export default {
  post: {
    description: 'Defines whether the bot will send links or add contacts.',
    operationId: 'setLinkMode',
    tags: ['Links'],
    parameters: [
      {
        in: 'query',
        name: 'linkMode',
        schema: {
          type: 'boolean',
        },
        example: true,
        description: 'The link mode.',
      },
    ],
    responses: {
      '200': {
        description: 'The link mode has been setted.',
      },
    },
  },
};
