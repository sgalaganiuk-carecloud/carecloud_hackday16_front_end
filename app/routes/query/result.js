import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(decodeURIComponent(params.query));
    return $.getJSON('http://localhost:3000/query?' + params.query);
  },

  queryParams: {
    query: {
      refreshModel: true
    },
  }
});
