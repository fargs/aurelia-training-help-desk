import {inject} from 'aurelia-dependency-injection';
import {Aurelia} from 'aurelia-framework';
import {Server, User} from 'backend/server'; // type is defined by the backend

@inject(Aurelia, Server)
export class Login {
  constructor(aurelia, server) {
    this.aurelia = aurelia;
    this.server = server;
    this.username = '';
    this.password = '';
    this.message = '';
  }
  
  login() {
    this.server.login(this.username, this.password).then(result => {
      if (result) {
        this.message = '';
        //TODO: Track the logged in user and render the main app.
        this.aurelia.use.instance(User, result); // pushes the user into dependency injection. Any other component can get access to the logged in user.
        // should be saved to a cookie.
        // In a larger app, this would be a Session object which would contain the User among other info.
        // Also see main.js where the session object is saved and reloaded from a cookie.
        this.aurelia.setRoot('shell/shell');
      } else {
        this.message = 'Incorrect Username or Password!';
      }
    });
  }
}
