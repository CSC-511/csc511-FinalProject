import EmberRouter from '@ember/routing/router';
import config from 'client/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('login');
<<<<<<< HEAD
  this.route('home');
=======
>>>>>>> acfc5f7144d0ed0ed42cdaa26d1fdb01d6e7a4eb
  this.route('signup');
});
