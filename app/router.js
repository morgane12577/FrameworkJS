import EmberRouter from '@ember/routing/router';
import config from 'tds-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('employee');
  this.route('Abstractroute');
  this.route('board');
  this.route('logout');
  this.route('sections');

  this.route('order', function () {
    this.route('order_id');
  });
  this.route('orderdetail');
});
