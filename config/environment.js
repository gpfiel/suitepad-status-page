'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'suitepad-status-page',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.api_url = 'https://updown.io/api'
  ENV.website = 'https://updown.io/'
  ENV.check_descriptions = 'https://gist.githubusercontent.com/Rio517/c523873cd4495456a88cac8f1860461b/raw/81667cb58db57cae093092748225c3a98a43ee1e/check-description.json'
  

  if (environment === 'development') {
    ENV.api_key = 'ro-GVxtueJXTaJAa5SY3dhn'
    ENV.sample_data = 'https://gist.githubusercontent.com/Rio517/c523873cd4495456a88cac8f1860461b/raw/be008bc9ba648456c282228b463415f37b2373aa/checks.json'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.api_key = 'ro-pz3x1zy4ae63yhygraqe'
    // here you can enable a production-specific feature
  }

  return ENV;
};
