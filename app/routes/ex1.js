import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class Ex1Route extends Route {
  model() {
    return this;
  }

  @action
  save() {
    this.transitionTo('ex1b');
  }
}
