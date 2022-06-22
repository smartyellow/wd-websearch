'use strict';

const icons = {
  find: '<path d="M699 620L540 484a71 71 0 0 0-48-20 252 252 0 1 0-28 28c-1 14 6 32 20 48l136 159c23 26 61 28 84 5s21-61-5-84zM300 468a168 168 0 1 1 0-336 168 168 0 0 1 0 336zm0 0"/>',
};

module.exports = {

  // Friendly name
  name: 'Web search',

  // Brief description of this plugin
  purpose: 'Search the web from your dashboard',

  // Version of this plugin
  version: '1.0.0',

  // Name of the plugin author
  author: 'Romein van Buren',

  // Name of vendor of this plugin
  vendor: 'Smart Yellow',

  // Array of plugins this plugin depends on
  requires: [],

  icon: icons.find,

  gui: {
    widgets: () => [
      {
        path: 'search.svelte',
        title: 'Web search',
        purpose: 'Search the web.',
        defaults: {
          title: 'Web search',
          engine: 'Qwant',
        },
      },
    ],
  },

};
