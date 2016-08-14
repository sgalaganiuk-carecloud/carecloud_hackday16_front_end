import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    if (!this.get('condition').get('operator')) {
      this.set('active', 'today');
    }
  },
  dates: ["past", "today", "future"],
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

  operatorMap: {
    "<": "past",
    "=": "today",
    ">": "future"
  },

  active: Ember.computed('condition.operator', {
    get() {
      let operatorMap = this.get('operatorMap');
      let operator = this.get('condition').operator;
      Ember.Logger.debug(operatorMap[operator]);
      return operatorMap[operator];
    },

    set(key, value) {
      let condition = this.get('condition');
      let dateMap = this.get('dateMap');
      condition.setProperties(dateMap[value]);
      this.propertyWillChange('condition');
      this.set('condition', condition);
      this.propertyDidChange('condition');
      return value;
    }
  }),



  actions: {
    setDate(timeline) {
      this.set('active', timeline);
    }
  }

});
