import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { run } from '@ember/runloop';

module('Integration | Component | check-view', function(hooks) {
  setupRenderingTest(hooks);

  test("component classes & elements according to check record", async function(assert) {
    this.check = run(() =>
      this.owner.lookup('service:store').createRecord('check', {
        id: "hs1x",
        token: "hs1x",
        url: "tcp://52.58.226.151:5672",
        alias: "Rabbit-lb",
        uptime: 99.998,
        down: false,
        down_since: "2018-05-08T13:35:15Z",
        favicon_url: "https://keen.suitepad.systems/favicon.ico",
      })
    );
    await render(hbs`{{check-view check=check}}`);
    assert.dom(".uptime-box").exists({ count: 2 });
    assert.dom("button.close").exists();
    assert.dom("div.icon-check").exists();
    assert.dom("img.favicon-url").exists();
    assert.dom("img.favicon-url").hasAttribute("src", this.check.favicon_url);

    //display play icon case down = false
    const iconElement = assert.dom("i.material-icons.large.text-green")
    iconElement.exists();
    iconElement.hasClass('material-icons')
    iconElement.containsText("play_circle_outline");

    //check uptime percentage
    const spanPercentageElement = assert.dom("span.percentage")
    spanPercentageElement.exists();
    spanPercentageElement.containsText(this.check.get('uptime_formatted.value'))
  });

  test("is invoked on close", async function(assert) {
      this.onClose = function(config) {
        assert.step("action invoked");
      };

      await render(
        hbs`{{check-view close=(action onClose)}}`
      );

      await click(".close");

      assert.verifySteps(["action invoked"]);
    });
});
