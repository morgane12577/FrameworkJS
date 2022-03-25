import Route from '@ember/routing/route';
import Abstractroute from './Abstractroute';
import RSVP from 'rsvp';

export default class OrderRoute extends Abstractroute {
@service store;

model(params){
   console.log("test");
  console.log(params.order_id);
  let idO = params.order_id;

  let user = this.userAuth.user;

  

  return {idO, user};
}

}
