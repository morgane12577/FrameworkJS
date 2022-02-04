import { helper } from '@ember/component/helper';

export default helper(function formatPercent(param /*, named*/) {
  return param[0] * 100 + ' %';
});
