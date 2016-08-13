import Ember from 'ember';

export default Ember.Route.extend({
  model(query) {
    console.log(query);
  },

  queryParams: {
    query: {
      refreshModel: true
    },
  }
});
