<template>
  <div class="container">
    <div>
      <Logo />
      <Nav />
      <Header />
      <section>
        <main>
          <p>
            I've created two search-related plugins for Netlify, to simplify my
            life and yours. This demo site serves both purposes.
          </p>
        </main>
      </section>
      <section>
        <header>
          <h3>
            Netlify Plugin: Algolia Export
          </h3>
        </header>
        <main>
          <p>
            <strong>Export your search index straight to Algolia!</strong> Using
            this plugin, you can build a search index of all your content pages
            automatically, excluding any pages you don't want to index.
          </p>
          <p>
            <small>
              Recently updated to replace
              <nuxt-link to="/algolia-index"
                >Netlify Plugin: Algolia Index</nuxt-link
              >
            </small>
          </p>
        </main>
        <footer>
          <nuxt-link to="/algolia-export" class="button button--green">
            Read More
          </nuxt-link>
          <a
            href="https://github.com/lukeocodes/netlify-plugin-algolia-index"
            target="_blank"
            class="button button--grey"
          >
            GitHub
          </a>
        </footer>
      </section>
      <section>
        <header>
          <h3>
            Netlify Plugin: OpenSearch
          </h3>
        </header>
        <main>
          <p>
            Automatically generate an
            <a
              href="https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md"
              target="_blank"
              >OpenSearch</a
            >
            search.xml file on Netlify. Using this plugin, you can build a
            search index of all your content pages automatically, excluding any
            pages you don't want to index.
          </p>
          <p>
            <small>
              Not live on Netlify Plugins (yet)
            </small>
          </p>
        </main>
        <footer>
          <nuxt-link to="/opensearch" class="button button--green">
            Read More
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
  }
}
</script>
