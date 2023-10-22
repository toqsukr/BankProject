import * as cardActions from './cards/cards.actions';
import * as contactActions from './contacts/contacts.actions';
import * as userActions from './user/user.actions';

export const rootActions = {
  ...userActions,
  ...contactActions,
  ...cardActions
};
