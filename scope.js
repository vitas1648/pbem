'use strict';

module.exports = {
  TYPE_TEMPLATE: 1,
  TYPE_BLOCK: 2,
  TYPE_ELEMENT: 3,
  TYPE_MODIFIER: 4,
  compiledTemplates: {
    templates: {},
    blocks: {}
  },
  templateFilterOptions: [
    'scopeConfig',
    'locals',
    'debug'
  ],
  blockFilterOptions: [
    'scopeConfig',
    'mods',
    'mixes',
    'data',
    'attributes',
    'locals',
    'debug'
  ]
};
