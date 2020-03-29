import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | loading', function(hooks) {
  setupRenderingTest(hooks);

  module("basic rendering", function() {
    test("component specific CSS classes", async function(assert) {
      await render(hbs`{{loading}}`);

      assert.dom(".loading").exists();

      const spinnerDiv = assert.dom("div.spinner")
      spinnerDiv.exists();
      spinnerDiv.hasClass('animated');
      spinnerDiv.hasClass('bounce');

      const iconElement = assert.dom("i")
      iconElement.exists();
      iconElement.hasClass('material-icons')
      iconElement.hasClass('android')
      iconElement.containsText("tablet_android");
    });
  });
});
