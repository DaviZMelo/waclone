export default {
  post: {
    description: 'Defines the groups that will be used in the bot.',
    operationId: 'setSelectedGroups',
    tags: ['Groups'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            required: ['targetGroupId', 'hostGroupId'],
            allOf: [
              {
                $ref: '#/components/schemas/Groups',
              },
              {
                type: 'object',
                properties: {
                  targetGroupLink: {
                    type: 'string',
                    example: 'https://chat.whatsapp.com/abcde',
                  },
                },
              },
            ],
          },
        },
      },
    },
    responses: {
      '200': {
        description: 'Groups have been successfully defined.',
      },
      '401': {
        description: 'You have been removed from this group previously.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
            example: {
              status: 'error',
              message: 'You have been removed from this group previously.',
            },
          },
        },
      },
      '406': {
        description: 'Invalid group link.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
            example: {
              status: 'error',
              message: 'Invalid group link.',
            },
          },
        },
      },
    },
  },
};
