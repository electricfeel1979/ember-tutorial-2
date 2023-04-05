import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-tutorial-2/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | example-one', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ExampleOne />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ExampleOne>
        template block text
      </ExampleOne>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
