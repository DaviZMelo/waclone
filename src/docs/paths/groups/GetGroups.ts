export default {
  get: {
    description: 'Get the list of groups.',
    operationId: 'getGroups',
    tags: ['Groups'],
    parameters: [
      {
        in: 'query',
        name: 'admin_groups',
        schema: {
          type: 'boolean',
        },
        description:
          'Defines whether to return all groups or just the group in which the bot is an admin.',
        example: true,
      },
    ],
    responses: {
      '200': {
        description: 'Return the groups.',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Group',
              },
            },
          },
        },
      },
      '404': {
        description: 'Not possible to get admin groups, try again.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
            example: {
              status: 'error',
              message: 'Not possible to get admin groups, try again.',
            },
          },
        },
      },
    },
  },
};
