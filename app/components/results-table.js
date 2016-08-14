import Ember from 'ember';

export default Ember.Component.extend({
  properties: Ember.computed('data', function() {
    let props = [];
    let data = {};
    Ember.Logger.debug(this.get('data'));
    if (this.get('data')[0]) {
      data = this.get('data')[0];
    }
    Object.keys(data).forEach(function(key){
      props.push(key);
    });
    return props;
  })
});
