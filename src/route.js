/* eslint-disable no-console */
import UserController from './controllers/UserController.js';
import HtmlContentController from './controllers/HtmlContentController.js';

const route = [
  {
    method: 'POST',
    path: '/user',
    handler: UserController.createUser,
  },
  {
    method: 'GET',
    path: '/activateAccount/{activationKey}',
    handler: HtmlContentController.getAccountActivationContent,
  },
];

export default route;
