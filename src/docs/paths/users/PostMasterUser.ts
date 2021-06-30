export default {
  post: {
    description: 'Defines the master user who can manage users.',
    operationId: 'setMasterUser',
    tags: ['Users'],
    parameters: [
      {
        in: 'query',
        name: 'phone',
        schema: {
          type: 'integer',
        },
        example: 5511964945942,
        description: "The master user's phones number",
      },
    ],
    responses: {
      '200': {
        description: 'The master user has been defined',
      },
      '406': {
        description: 'Informed master user is not an existing allowed user',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
            example: {
              status: 'error',
              message: 'Informed master user is not an existing allowed user',
            },
          },
        },
      },
    },
  },
};
