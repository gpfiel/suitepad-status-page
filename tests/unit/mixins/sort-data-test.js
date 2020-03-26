import EmberObject from '@ember/object';
import SortDataMixin from 'suitepad-status-page/mixins/sort-data';
import { module, test } from 'qunit';

module('Unit | Mixin | sort-data', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let SortDataObject = EmberObject.extend(SortDataMixin);
    let subject = SortDataObject.create();
    assert.ok(subject);
  });
});
