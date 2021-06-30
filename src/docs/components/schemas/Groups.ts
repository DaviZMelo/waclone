export default {
  type: 'object',
  properties: {
    targetGroupId: {
      $ref: '#/components/schemas/Group',
    },
    hostGroupId: {
      $ref: '#/components/schemas/Group',
    },
  },
};
