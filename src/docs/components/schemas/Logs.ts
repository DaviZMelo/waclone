export default {
  type: 'array',
  example: [
    {
      logDate: '25/06/21 22:14',
      logMessage: 'Error on add 11964945942',
    },
  ],
  items: {
    type: 'object',
    properties: {
      logDate: {
        type: 'string',
      },
      logMessage: {
        type: 'string',
      },
    },
  },
};
