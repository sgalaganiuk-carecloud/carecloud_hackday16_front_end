import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    if (!this.get('condition').get('status')) {
      this.set('active', 'pending');
    }
  },
  statuses: ["pending", "checked in"],
  statusMap: {
    "pending": "Pending",
    "checked_in": "Checked-In"
  },

  active: Ember.computed('condition', {
    get() {
      let statusMap = this.get('statusMap');
      let status = this.get('condition').status;
      return statusMap[status];
    },

    set(key, value) {
      let condition = this.get('condition');
      condition.set('status',value )
      this.propertyWillChange('condition');
      this.set('condition', condition);
      this.propertyDidChange('condition');
      return value;
    }
  }),



  actions: {
    setStatus(state) {
      this.set('active', state);
    }
  }
});
