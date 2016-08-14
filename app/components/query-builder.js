import Ember from 'ember';

const Condition = Ember.Object.extend({
  type: 'unset'
});

export default Ember.Component.extend({
  queryObject: Ember.computed("activeScope", "activeConditions.@each", function() {
    let result =  {
      primaryScope: this.get('activeScope'),
      conditions: []
    };

    for(let condition of this.get('activeConditions')) {
      let conditionObject = {};
      for (let property of Object.keys(condition)) {
        conditionObject[property] = condition.get(property);
      }
      result.conditions.push(conditionObject);
    }

    Ember.Logger.debug(result);
    return result;
  }),

  activeScope: "Appointments",
  activeConditions: [],

  scopes: ['appointments', 'patients', 'providers', 'balances'],

  actions: {
    submit() {
      this.sendAction("action", this.get("queryObject"));
    },
    selectScope(scope) {
      Ember.set(this, "activeScope", scope);
    },
    appendCondition() {
      let activeConditions = this.get("activeConditions");
      activeConditions.push(Condition.create());
      this.propertyWillChange('activeConditions');
      this.set('activeConditions', activeConditions);
      this.propertyDidChange('activeConditions');
    }
  }
});
