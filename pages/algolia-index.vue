<template>
  <div class="container">
    <div>
      <Logo />
      <Nav />
      <Header title="Netlify Algolia Index Plugin" />
      <section>
        <main>
          <p>
            <strong>Export your search index straight to Algolia!</strong> Using
            this plugin, you can build a search index of all your content pages
            automatically, excluding any pages you don't want to index.
          </p>
        </main>
        <footer>
          <nuxt-link to="/" class="button button--green">
            Home
          </nuxt-link>
          <a
            href="https://github.com/nuxt/nuxt.js"
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
