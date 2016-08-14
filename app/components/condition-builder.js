import Ember from 'ember';

export default Ember.Component.extend({
  conditions: {
    appointment: ['startDate', 'endDate'],
    balance: ['operator', 'value'],
    status: ['pending', 'checked_in']
  },
  conditionBuilderMap: {
    appointment: "appointment-condition-builder",
    balance: "balance-condition-builder",
    status: "status-condition-builder"
  },
  activeConditionType: Ember.computed('condition.type', function() {
    let condition = this.get('condition');
    return condition.type;
  }),

  selectCondition: Ember.computed('condition.type', function() {
    let condition = this.get('condition');
    return condition.type === 'select condition';
  }),
  conditionTypes: Ember.computed('conditions', function() {
    return Object.keys(this.get('conditionBuilderMap'));
  }),
  conditionBuilderComponent: Ember.computed('condition.type', function() {
    let condition = this.get('condition');
    return this.get('conditionBuilderMap')[condition.get('type')];
  }),
  actions: {
    selectConditionType(conditionType) {
      let condition = this.get('condition');
      condition.set('type', conditionType);
      this.set('condition', condition);
    }
  }
});
