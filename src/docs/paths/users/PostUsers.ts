export default {
  post: {
    description: 'Defines the list of users allowed to use the bot.',
    operationId: 'setAllowedUsers',
    tags: ['Users'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/AllowedUsers',
          },
        },
      },
      required: true,
    },
    responses: {
      '200': {
        description: 'The allowed users list has been setted',
      },
      '400': {
        description: 'Invalid phone number',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
            example: {
              status: 'error',
              message: 'Invalid phone number',
            },
          },
        },
      },
      '406': {
        description: 'Maximum users limit reached',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
            example: {
              status: 'error',
              message: 'Maximum users limit reached',
            },
          },
        },
      },
      '422': {
        description: 'Duplicate numbers is not allowed',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
            example: {
              status: 'error',
              message: 'Duplicate numbers is not allowed',
            },
          },
        },
      },
    },
  },
};
