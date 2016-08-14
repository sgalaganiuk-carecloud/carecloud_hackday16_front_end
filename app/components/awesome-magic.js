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
      this.sendAction('clearConditions');
      let availableScopes = ['patients', 'appointments', 'providers', 'balances'];
      let availableConditionTypes = ["balance", 'appointment'];

      let value = this.get('value');
      if (value.includes(' with ')) {
        let [intendedScope, conditionString] = value.split(' with ');

        if (availableScopes.includes(intendedScope)) {
          this.set('activeScope', intendedScope);
        }

        let conditions = conditionString.split(' and ');
        let activeConditions = [];
        for (let i = 0; i < conditions.length; i ++) {
          let conditionString = conditions[i];
          let words = conditionString.split(" ");
          let type = words[0];
          if (availableConditionTypes.includes(type)) {
            let condition = Condition.create();
            if(type === "appointment") {
                let dateMap = this.get('dateMap');
                condition.set('type', type);
                condition.setProperties(dateMap[words[1]]);
                activeConditions.push(condition);
              } else if (type === "balance") {
                let [operator, value] = words.slice(1);
                condition.set('type', type);
                condition.setProperties({operator, value});
                activeConditions.push(condition);
              } else {
                return;
              }
              console.log(condition);
              console.log(activeConditions);
            }
          }
          if (activeConditions.length > 0) {
            // console.log("before send:", activeConditions);
            this.sendAction('setConditions', activeConditions);
          }
        }
      }
    }
  }
);
