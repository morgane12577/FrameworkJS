import { service } from '@ember/service';
import Abstractroute from './Abstractroute';

export default class EmployeeRoute extends Abstractroute {
  @service store;

  model() {
    return this.store.findAll('employee');
  }
}
