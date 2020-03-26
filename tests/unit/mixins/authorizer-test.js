import EmberObject from '@ember/object';
import AuthorizerMixin from 'suitepad-status-page/mixins/authorizer';
import { module, test } from 'qunit';

module('Unit | Mixin | authorizer', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let AuthorizerObject = EmberObject.extend(AuthorizerMixin);
    let subject = AuthorizerObject.create();
    assert.ok(subject);
  });
});
