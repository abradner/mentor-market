/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'mentor-market',
    podModulePrefix: 'mentor-market/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        'ember-htmlbars': true,
        'ember-routing-named-substates': true,
        'composable-computed-properties': true,
        'ember-routing-will-change-hooks': true,
        'ember-metal-is-present': true,
        'property-brace-expansion-improvement': true,
        'ember-routing-multi-current-when': true,
        'ember-runtime-item-controller-inline-class': true,
        'ember-routing-fire-activate-deactivate-events': true,
        'ember-testing-pause-test': true,
        'ember-htmlbars-component-generation': true,
        'ember-htmlbars-inline-if-helper': true,
        'ember-htmlbars-attribute-syntax': true,
        'ember-metal-injected-properties': true,
        'ember-htmlbars-block-params': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
