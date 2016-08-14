import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('age-condition-builder', 'Integration | Component | age condition builder', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{age-condition-builder}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#age-condition-builder}}
      template block text
    {{/age-condition-builder}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
