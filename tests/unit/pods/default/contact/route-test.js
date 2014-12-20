import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:default/contact', 'DefaultContactRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function() {
  var route = this.subject();
  ok(route);
});

test('Should activate the navigation link', function() {
  visit('/contact').then(function() {
    equal(find('a:contains("Contact")').hasClass("active"), true);
    equal(find('a:contains("About")').hasClass("active"), false);
  });
});