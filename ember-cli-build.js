'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // custom options here
  });

  const { Webpack } = require('@embroider/webpack');

  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTrees: true,
    staticAddonTestSupportTrees: true,
    staticHelpers: true,
    staticComponents: true,
    // splitAtRoutes: ['docs', 'docs.templates'],
    packagerOptions: {
      webpackConfig: {
        // module: {
        //   rules: [
        //     {
        //       test: /\.css$/,
        //       use: ['style-loader', 'css-loader'],
        //     },
        //   ],
        // },
      },
    },
  });
};
