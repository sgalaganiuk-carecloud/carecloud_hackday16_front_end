import Ember from 'ember';

const Condition = Ember.Object.extend({
  type: 'unset'
});

export default Ember.Component.extend({
  queryObject: {
  "primaryScope": "patients",
  "conditions": [
    {
      "type": "appointments",
      "startDate": "2016-08-13",
      "endDate": "2016-08-13"
    },
    {
      "type": "balance",
      "operator": ">",
      "value": 0
    }
  ]
},
  scopes: ['appointments', 'patients', 'providers', 'balances'],
  activeConditions: [],
  activeConditionsComputed: Ember.computed('activeConditions.@each', function() {
    return this.get('activeConditions');
  }),
  activeScope: "Appointments",

  actions: {
    submit() {
      this.sendAction("action", this.get("queryObject"));
    },
    selectScope(scope) {
      Ember.set(this, "activeScope", scope)
    },
    addCondition(type, ...conditions) {

      Ember.set(this, "activeConditions", this.get)
    },
    appendCondition() {
      let activeConditions = this.get("activeConditions")
      activeConditions.push(Condition.create());
      this.propertyWillChange('activeConditions')
      this.set('activeConditions', activeConditions)
      this.propertyDidChange('activeConditions')
    },
    setConditionTypeAtIndex(i, conditionType) {
      let conditions = this.get('activeConditions');
      conditions[i].set('type', conditionType);

      Ember.Logger.debug("here", i, conditionType);

      this.propertyWillChange('activeConditions')
      this.set('activeConditions', conditions.slice())
      this.propertyDidChange('activeConditions')
    }
  }
});