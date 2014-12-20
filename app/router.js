import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('default', {path: '/'}, function(){
    this.route('about', {path: '/about'});
    this.route('contact', {path: '/contact'});    
  });
  this.route('signup', function() {
    this.route('mentor');
    this.route('student');    
  });
});

export default Router;
