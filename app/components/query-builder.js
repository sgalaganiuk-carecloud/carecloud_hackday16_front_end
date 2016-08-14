import Ember from 'ember';

const Condition = Ember.Object.extend({
  type: 'select condition'
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

  activeScope: 'patients',
  activeConditions: [
    Condition.create()
  ],

  remainingConditions: Ember.computed('activeConditions.[]', function(){
    let activeConditions = this.get('activeConditions');
    return activeConditions.slice(1);
  }),

  firstCondition: Ember.computed('activeConditions.[]', function(){
    return this.get('activeConditions')[0];
  }),

  scopes: ['appointments', 'patients', 'providers', 'balances', 'statuses', 'age'],

  actions: {
    submit() {
      this.sendAction("action", this.get("queryObject"));
    },
    selectScope(scope) {
      Ember.set(this, "activeScope", scope);
    },
    appendCondition() {
      console.log('appending condition');
      let activeConditions = this.get("activeConditions");
      activeConditions.push(Condition.create());
      this.propertyWillChange('activeConditions');
      this.set('activeConditions', activeConditions);
      this.propertyDidChange('activeConditions');
    },
    clearConditions() {
      this.propertyWillChange('activeConditions');
      this.set('activeConditions', [
        // Condition.create()
      ]);
      this.propertyDidChange('activeConditions');
    },
    setConditions(conditions) {
      // console.log("after send:", conditions);
      this.propertyWillChange('activeConditions');
      this.set('activeConditions', conditions);
      this.propertyDidChange('activeConditions');
    }
  }
});
