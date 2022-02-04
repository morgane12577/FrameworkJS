import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ex1/next', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:ex1/next');
    assert.ok(route);
  });
});
