import Ember from 'ember';

export default Ember.Component.extend({
  activeConditions: [],
  conditions: {
    appoinment: ['startDate', 'endDate'],
    balance: ['operator', 'value']
  },
  activeConditionType: Ember.computed('condition.type', function() {
    let condition = this.get('condition');
    return condition.type;
  }),

  unset: Ember.computed('condition.type', function() {
    let condition = this.get('condition');
    return condition.type === 'unset';
  }),
  conditionTypes: Ember.computed('conditions', function() {
    console.log(Object.keys(this.get('conditions')));
    return Object.keys(this.get('conditions'));
  }),
  actions: {
    selectConditionType(conditionType) {
      this.sendAction('setConditionType', conditionType);
    }
  }
});
