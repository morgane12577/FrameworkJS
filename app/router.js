import EmberRouter from '@ember/routing/router';
import config from 'tds-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('ex1', function () {
    this.route('ex1b');
  });
  this.route('ex1b');
});
