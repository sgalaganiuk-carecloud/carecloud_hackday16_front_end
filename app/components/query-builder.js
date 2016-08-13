import Ember from 'ember';

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
      "condition": ">",
      "value": 0
    }
  ]
},

  actions: {
    submit() {
      this.sendAction("action", this.get("queryObject"));
    }
  }
});
