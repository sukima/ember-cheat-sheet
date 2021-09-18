'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    minifyCSS: {
      options: { processImport: true },
    },
    prember: {
      urls: ['/', '/docs/', '/docs/templates'],
    },
  });

  // return app.toTree();
  const { Webpack } = require('@embroider/webpack');

  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTrees: true,
    staticAddonTestSupportTrees: true,
    staticHelpers: true,
    staticComponents: true,
    splitAtRoutes: ['docs', 'docs.templates'],
    packagerOptions: {
      webpackConfig: {},
    },
  });
};
