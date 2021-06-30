import components from './components';
import DeleteCloning from './paths/cloning/DeleteCloning';
import PostCloning from './paths/cloning/PostCloning';
import GetConfigs from './paths/configs/GetConfigs';
import PostConfigs from './paths/configs/PostConfigs';
import GetContacts from './paths/contacts/GetContacts';
import GetGroups from './paths/groups/GetGroups';
import GetSelectedGroups from './paths/groups/GetSelectedGroups';
import PostSelectedGroups from './paths/groups/PostSelectedGroups';
import GetLinkMessage from './paths/links/GetLinkMessage';
import GetLinkMode from './paths/links/GetLinkMode';
import PostLinkMessage from './paths/links/PostLinkMessage';
import PostLinkMode from './paths/links/PostLinkMode';
import GetLogs from './paths/logs/GetLogs';
import GetMasterUser from './paths/users/GetMasterUser';
import GetUsers from './paths/users/GetUsers';
import PostMasterUser from './paths/users/PostMasterUser';
import PostUsers from './paths/users/PostUsers';

export default {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'WaClone',
    description:
      '📱 | Documentation of an API/bot made to clone Whatsapp groups.',
  },
  servers: [
    {
      url: 'http://localhost:4000/',
      description: 'Local server',
    },
  ],
  paths: {
    '/admin/groups': GetGroups,
    '/admin/groups/selected': GetSelectedGroups,
    '/admin/groups/selected/': PostSelectedGroups,
    '/admin/users': PostUsers,
    '/admin/users/': GetUsers,
    '/admin/users/master': PostMasterUser,
    '/admin/users/master/': GetMasterUser,
    '/admin/logs': GetLogs,
    '/admin/links/mode': GetLinkMode,
    '/admin/links/mode/': PostLinkMode,
    '/admin/links/message': GetLinkMessage,
    '/admin/links/message/': PostLinkMessage,
    '/admin/cloning': PostCloning,
    '/admin/cloning/': DeleteCloning,
    '/admin/contacts': GetContacts,
    '/admin/configs': GetConfigs,
    '/admin/configs/': PostConfigs,
  },
  components,
};
