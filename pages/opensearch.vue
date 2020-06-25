<template>
  <div class="container">
    <div>
      <Logo />
      <Nav />
      <Header title="Netlify Plugin: OpenSearch" />
      <section>
        <main>
          <p>
            Automatically generate an
            <a
              href="https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md"
              target="_blank"
              >opensearch</a
            >
            search.xml file on Netlify. Using this plugin, you can build a
            search index of all your content pages automatically, excluding any
            pages you don't want to index.
          </p>
        </main>
        <footer>
          <nuxt-link to="/" class="button button--green">
            Home
          </nuxt-link>
          <a
            href="https://github.com/lukeocodes/netlify-plugin-opensearch"
            target="_blank"
            class="button button--grey"
          >
            GitHub
          </a>
        </footer>
      </section>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Nav from '~/components/Nav.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    Logo,
    Nav,
    Header
  },

  head() {
    return {
      title: 'Netlify Plugin: OpenSearch',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Automatically generate an OpenSearch meta file with Netlify'
        }
      ]
    }
  }
}
</script>
