require('dotenv').config()

export default {
  mode: 'universal',

  env: {
    algoliaIndex: process.env.ALGOLIA_INDEX,
    algoliaApplicationId: process.env.ALGOLIA_APPLICATION_ID,
    algoliaSearchKey: process.env.ALGOLIA_SEARCH_KEY
  },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'search',
        type: 'application/opensearchdescription+xml',
        href: '/search.xml',
        title: 'demo site'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#38b2ac' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@/plugins/vue-instantsearch.js' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
