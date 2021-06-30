export default {
  post: {
    description: 'Set api configs.',
    operationId: 'postConfigs',
    tags: ['Configs'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            required: [],
            $ref: '#/components/schemas/Configs',
          },
        },
      },
    },
    responses: {
      '200': {
        description: 'Settings have been successfully configured.',
        content: {
          'application/json': {
            schema: {
              required: [],
              $ref: '#/components/schemas/Configs',
            },
          },
        },
      },
      '406': {
        description: 'Invalid values entered',
        content: {
          'application/json': {
            schema: {
              oneOf: [
                {
                  $ref: '#/components/schemas/Error',
                  example: {
                    status: 'error',
                    message: 'Invalid delay',
                  },
                },
                {
                  $ref: '#/components/schemas/Error',
                  example: {
                    status: 'error',
                    message: 'Invalid number of contacts to add per second',
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
};
