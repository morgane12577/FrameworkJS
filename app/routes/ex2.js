import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action, set } from '@ember/object';

export default class Ex2Route extends Route {
  @service productServices; //même nom que le service déclaré pour sur emberJS sache lequel utiliser

  model() {
    return this.productServices;
  }

  @action
  toggleActive(service) {
    set(service, 'active', !service.active);
  }

  @action
  valider(){
      this.transitionTo('ex2.promo');
  }
}
