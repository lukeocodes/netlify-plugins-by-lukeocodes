<template>
  <div class="container">
    <div>
      <Logo />
      <Nav />
      <Header title="Search with Algolia" />
      <section>
        <main>
          <client-only v-if="algoliaIndex">
            <ais-instant-search
              :index-name="algoliaIndex"
              :search-client="searchClient"
              :routing="routing"
            >
              <ais-search-box />
              <ais-stats />
              <ais-hits>
                <template slot="item" slot-scope="{ item }">
                  <p>
                    <ais-highlight attribute="title" :hit="item" />
                  </p>
                </template>
              </ais-hits>
              <ais-pagination />
            </ais-instant-search>
          </client-only>
        </main>
        <footer>
          <nuxt-link to="/" class="button button--green">
            Home
          </nuxt-link>
        </footer>
      </section>
    </div>
  </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite'
import { history } from 'instantsearch.js/es/lib/routers'
import { simple } from 'instantsearch.js/es/lib/stateMappings'
import Logo from '~/components/Logo.vue'
import Nav from '~/components/Nav.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    Logo,
    Nav,
    Header
  },

  data() {
    return {
      algoliaIndex: process.env.algoliaIndex,
      searchClient: algoliasearch(
        process.env.algoliaApplicationId,
        process.env.algoliaSearchKey
      ),
      routing: {
        router: history(),
        stateMapping: simple()
      }
    }
  },

  methods: {
    checkForm(e) {
      if (this.$refs.query.value) {
        return true
      }

      e.preventDefault()
    }
  },

  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css'
        }
      ]
    }
  }
}
</script>
