import Ember from 'ember';

export default Ember.Component.extend({
  balanceOperators: ['<', '>', '=', '>=', '<='],

  value: Ember.computed('condition.value', {
    get() {
      return this.get('condition').get('value') || 0;
    },

    set(key, value) {
      this.get('condition').set('value', value);
    }
  }),

  actions: {
    setOperator(operator) {
      let condition = this.get('condition');
      condition.set('operator', operator);
      this.set('condition', condition);
    }
  }
});
