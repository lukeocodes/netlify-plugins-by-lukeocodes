require('dotenv').config()

export default {
  mode: 'universal',

  env: {
    algoliaIndex: process.env.ALGOLIA_INDEX,
    algoliaApplicationId: process.env.ALGOLIA_APPLICATION_ID,
    algoliaSearchKey: process.env.ALGOLIA_SEARCH_KEY
  },

  head: {
    title: 'My plugins',
    titleTemplate: `%s » Netlify Plugins by @lukeocodes`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Demo site for the collection of Netlify Plugins by @lukeocodes'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'search',
        type: 'application/opensearchdescription+xml',
        href: '/search.xml',
        title: 'Netlify Search Plugins'
      }
    ]
  },

  loading: { color: '#38b2ac' },

  css: [],

  plugins: [{ src: '@/plugins/vue-instantsearch.js' }],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: [],

  build: {
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
    extend(config, ctx) {}
  }
}
