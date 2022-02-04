import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params /*, named*/) {
  let [val, symbole] = params;
  if (symbole != null) {
    return Math.round(val * 100) / 100 + symbole;
  } else {
    return Math.round(val * 100) / 100 + ' €';
  }
});
