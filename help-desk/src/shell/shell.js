import {inject} from 'aurelia-framework';
import {User} from 'backend/server';
import routes from './routes';

@inject(User) // in a larger app this would be a session instance with some more info
export class Shell {
  constructor(user) {
    this.user = user;
  }

  configureRouter(config, router) {
    this.router = router;
    config.map(routes);
  }
}