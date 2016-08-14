import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(decodeURIComponent(params.query));
    return $.getJSON('https://nimbus.herokuapp.com/query?' + params.query);
  },

  queryParams: {
    query: {
      refreshModel: true
    },
  }
});
