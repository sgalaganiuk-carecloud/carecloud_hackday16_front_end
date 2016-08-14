import Ember from 'ember';

export default Ember.Component.extend({

  startDate: Ember.computed('condition.startDate', {
    get() {
      return this.get('condition').get('startDate') || new Date();
    },

    set(key, startDate) {
      this.get('condition').set('startDate', startDate);
    }
  }),
  endDate: Ember.computed('condition.endDate', {
    get() {
      return this.get('condition').get('endDate') || new Date();
    },

    set(key, endDate) {
      this.get('condition').set('endDate', endDate);
    }
  }),

  actions: {
    setStartDate(date) {
      let condition = this.get('condition');
      condition.set('startDate', date);
      this.set('condition', condition);
    },
    setEndDate(date) {
      let condition = this.get('condition');
      condition.set('endDate', date);
      this.set('condition', condition);
    }
  }

});
