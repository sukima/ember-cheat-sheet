'use strict';

const { configs } = require('@nullvoxpopuli/eslint-configs');
const { baseConfig, baseModulesConfig } = require('@nullvoxpopuli/eslint-configs/configs/node');

let ember = configs.ember();

module.exports = {
  ...ember,
  overrides: [
    ...ember.overrides,
    {
      files: ['lib/**/*.js', 'lib/**/*.cjs'],
      ...baseConfig,
    },
    {
      files: ['lib/**/*.mjs'],
      ...baseModulesConfig,
    },
  ],
};
