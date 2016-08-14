import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('status-condition-builder', 'Integration | Component | status condition builder', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{status-condition-builder}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#status-condition-builder}}
      template block text
    {{/status-condition-builder}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
