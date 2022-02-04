import { helper } from '@ember/component/helper';

//Parametres sous forme de tableau
export default helper(function plural(params /*, named*/) {
  let [count, zero, one, other] = params;
  switch (count) {
    case 0:
      return zero + 'service sélectionné';
    case 1:
      return one + 'service sélectionné';
    default:
      return count + ' ' + other + ' sélectionnés';
  }
});
