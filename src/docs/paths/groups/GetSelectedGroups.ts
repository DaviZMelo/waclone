export default {
  get: {
    description: 'Get the id list of selected groups.',
    operationId: 'getSelectedGroups',
    tags: ['Groups'],
    responses: {
      '200': {
        description: 'Returns the id of selected groups.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Groups',
            },
          },
        },
      },
    },
  },
};
