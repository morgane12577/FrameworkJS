import Route from '@ember/routing/route';
import Abstractroute from './Abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class OrderRoute extends Abstractroute {

model(params){
  return this.store.findRecord('order',params.order_id,{
    include: 'orderdetails.product,user'
  });






}

}
