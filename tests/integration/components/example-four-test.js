import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-tutorial-2/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | example-four', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ExampleFour />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ExampleFour>
        template block text
      </ExampleFour>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
