import Ember from 'ember';

const Condition = Ember.Object.extend({
  type: 'select condition'
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

      let value = this.get('value');
      if (value.includes(' with ')) {
        let [intendedScope, conditionString] = value.split(' with ');

        if (availableScopes.includes(intendedScope)) {
          this.set('activeScope', intendedScope);
        }

        let conditions = conditionString.split(' and ');
        let activeConditions = conditions.map(x => conditionFor(x));
        if (activeConditions.length > 0) {
          // console.log("before send:", activeConditions);
          this.sendAction('setConditions', activeConditions);
        }
      }
    }
  }
});

function conditionFor(conditionString) {
  let words = conditionString.split(" ");
  let type = words[0];
  let prepareMap = {
    balance: prepareSimpleCondition,
    age: prepareSimpleCondition,
    appointment: prepareAppointment,
    provider: prepareProvider
  };
  let availableConditionTypes = Object.keys(prepareMap);


  if (availableConditionTypes.includes(type)) {
    let condition = Condition.create({ type });
    return prepareMap[type](condition, words);
  }
}

  function prepareAppointment(condition, words) {
      let dateMap = {
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
    };
        condition.setProperties(dateMap[words[1]]);
        return condition;
}

  function prepareSimpleCondition(condition, words) {
    let [operator, value] = words.slice(1);
        condition.setProperties({operator, value});
        return condition;
  }

function prepareProvider(condition, words) {
  let operator = '=';
  let value = words.slice(1).join(" ");
  condition.setProperties({operator, value});
  return condition;
}
