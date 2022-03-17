import Route from '@ember/routing/route';
import Abstractroute from './Abstractroute';
import { action } from '@ember/object';
import { service } from '@ember/service';

import RSVP from 'rsvp';

export default class BoardRoute extends Abstractroute {
  @service userAuth;

  model() {
    let user = this.userAuth.user;
    if (user) {
      return RSVP.hash({
        orders: this.store.query('order', {
          filter: { idEmployee: user.id },
          include: 'orderdetails',
        }),
        employee: user,
      });
    }
  }


  @action
  logout() {
    this.userAuth.logout();
    this.refresh();
  }
}
