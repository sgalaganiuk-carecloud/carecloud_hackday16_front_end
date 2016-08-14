import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('appointment-condition-builder', 'Integration | Component | appointment condition builder', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{appointment-condition-builder}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#appointment-condition-builder}}
      template block text
    {{/appointment-condition-builder}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
