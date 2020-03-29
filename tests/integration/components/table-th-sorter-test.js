import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | table-th-sorter', function(hooks) {
  setupRenderingTest(hooks);

  test('component classes', async function(assert) {
    this.set('sortBy', function() {});
    await render(hbs`{{table-th-sorter sortBy=sortBy}}`);
    assert.dom("th.noselect").exists();
    assert.dom("div.sorting-arrows").exists();
    assert.dom("i.material-icons.android").exists({count: 2});
  });
});
