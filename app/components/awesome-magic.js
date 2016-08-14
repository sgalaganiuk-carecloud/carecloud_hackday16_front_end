import Ember from 'ember';

const Condition = Ember.Object.extend({
  type: 'unset'
});

export default Ember.Component.extend({
  dateMap: {
    past: {
      operator: "<",
      value: new Date()
    },
    today: {
      operator: "=",
      value: new Date()
    },
    future: {
      operator: ">",
      value: new Date()
    }
  },

  actions: {
    handleMagicEntry() {
      let availableScopes = ['patients', 'appointments', 'providers', 'balances'];
      let availableConditionTypes = ["balance", 'appointment'];

      let value = this.get('value');
      if (value.includes(' with ')) {
        let [intendedScope, conditionString] = value.split(' with ');

        if (availableScopes.includes(intendedScope)) {
          this.set('activeScope', intendedScope);
        }

        let conditions = conditionString.split(' and ');
        for (let i = 0; i < conditions.length; i ++) {
          let conditionString = conditions[i];
          let words = conditionString.split(" ");
          let type = words[0];
          let activeConditions = this.get('activeConditions');
          let condition = activeConditions[i];

          if (!condition) {
            console.log('no condition')
            this.sendAction();
            condition = activeConditions[i];
          }
          if (availableConditionTypes.includes(type)) {
            if(type === "appointment") {
                let dateMap = this.get('dateMap');


                this.propertyWillChange('activeConditions');
                condition.set('type', type);
                condition.setProperties(dateMap[words[1]]);
                activeConditions[i] = condition;
                this.set('activeConditions', activeConditions);
                this.propertyDidChange('activeConditions');
              } else if (type === "balance") {
                let [operator, value] = words.slice(1);

                this.propertyWillChange('activeConditions');
                condition.set('type', type);
                condition.setProperties({operator, value});
                activeConditions[i] = condition;
                this.set('activeConditions', activeConditions);
                this.propertyDidChange('activeConditions');
              }
            }
          }
        }
      }
    }
  }
);
