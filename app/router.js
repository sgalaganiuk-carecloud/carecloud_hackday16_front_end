import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('query', function() {
    this.route('result');
  });
  this.route('home', {path: '/'} );
});

export default Router;
