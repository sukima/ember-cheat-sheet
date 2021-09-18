'use strict';

const path = require('path');
const autolinkHeadings = require('remark-autolink-headings');
const highlight = require('remark-highlight.js');

module.exports = {
  repository: {
    url: 'https://github.com/nullvoxpopuli/ember-cheat-sheet',
    editBranch: 'main'
  },
  remarkPlugins: [
    [autolinkHeadings, { behavior: 'wrap' }],
    highlight
  ],
  sources: [
    {
      root: path.resolve(__dirname, './docs'),
      pattern: '**/*.md',
      urlPrefix: 'docs'
    },
  ],
};
