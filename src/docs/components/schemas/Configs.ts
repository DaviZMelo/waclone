export default {
  type: 'object',
  properties: {
    users: {
      type: 'object',
      example: {
        masterUser: '5511964945942',
        allowedUsers: [5511964945942, 5511964945943],
      },
      properties: {
        masterUser: {
          type: 'integer',
          example: 10,
        },
        allowedUsers: {
          type: 'array',
          items: {
            type: 'integer',
          },
        },
      },
    },
    groups: {
      type: 'object',
      properties: {
        targetGroupId: {
          $ref: '#/components/schemas/Group',
        },
        hostGroupId: {
          $ref: '#/components/schemas/Group',
        },
        targetGroupLink: {
          type: 'string',
          example: 'https://chat.whatsapp.com/abcdef',
        },
      },
    },
    links: {
      type: 'object',
      properties: {
        linkMode: {
          $ref: '#/components/schemas/LinkMode',
        },
        linkMessage: {
          $ref: '#/components/schemas/LinkMessage',
        },
      },
    },
    cloning: {
      properties: {
        cloningDelay: {
          type: 'number',
          example: 10,
        },
        cloningContactsToAddPerDelay: {
          type: 'number',
          example: 10,
        },
        cloningContacts: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
    },
    logsConfigs: {
      type: 'object',
      properties: {
        logGroupId: {
          $ref: '#/components/schemas/LinkMessage',
        },
        logMode: {
          type: 'boolean',
          example: true,
        },
      },
    },
    logs: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/Logs',
      },
    },
  },
};
