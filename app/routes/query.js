import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    getResult(queryObject) {
      // Ember.Logger.debug(queryObject);
      this.transitionTo('query.result', { queryParams: {query: $.param(queryObject) }});
    }
  }
});
