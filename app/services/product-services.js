import Service from '@ember/service';
import { dProducts, dPromos } from 'tds-ember/data/datas';

export default class ProductServicesService extends Service {
  products = dProducts;
  promos = dPromos;

  //@filterBy('products', 'active', true) active;

  get activeServices() {
    return dProducts.filterBy('active', true);
  }

  get countActive() {
    return this.activeServices.length;
  }

  get sumActive() {
    return this.activeServices.reduce(function (somme, current) {
      return somme + current.price;
    }, 0);
  }
}
