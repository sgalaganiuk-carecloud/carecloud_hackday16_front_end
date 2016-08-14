import Ember from 'ember';

export default Ember.Component.extend({
  properties: Ember.computed('data', function() {
    let props = [];
    Ember.Logger.debug(this.get('data'));
    let data = this.get('data')[0];
    Object.keys(data).forEach(function(key){
      props.push(key);
    });
    return props;
  })
});
