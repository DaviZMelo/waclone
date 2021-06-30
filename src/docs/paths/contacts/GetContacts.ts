export default {
  get: {
    description: 'Get the list of contacts.',
    operationId: 'getContacts',
    tags: ['Contacts'],
    parameters: [
      {
        in: 'query',
        name: 'type',
        schema: {
          type: 'string',
          enum: ['download', 'sendByMessage'],
        },
        example: 'download',
        description:
          'Define if the bot should send the contacts via message or if it should return a string from the VCard',
      },
    ],
    responses: {
      '200': {
        description:
          'Return contact list or just status code 200 if type is sendByMessage',
        content: {
          'application/json': {
            schema: {
              oneOf: [
                {
                  $ref: '#/components/schemas/VCard',
                },
                {
                  type: 'boolean',
                  example: true,
                },
              ],
            },
          },
        },
      },
      '404': {
        description: 'Settings have not yet been set.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
            example: {
              status: 'error',
              message: 'Settings have not yet been set.',
            },
          },
        },
      },
      '422': {
        description: 'The type entered is invalid.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
            example: {
              status: 'error',
              message: 'The type entered is invalid.',
            },
          },
        },
      },
    },
  },
};
