import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    let condition = this.get('condition');
    if (!this.get('condition').get('operator')) {
      condition.setProperties({ operator: '=', value: '' });
    }
  },
  operator: '=',

  value: Ember.computed('condition.value', {
    get() {
      return this.get('condition').get('value') || '';
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
