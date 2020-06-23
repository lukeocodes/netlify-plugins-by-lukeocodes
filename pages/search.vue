<template>
  <div class="container">
    <div>
      <Logo />
      <Nav />
      <Header title="Search with Algolia" />
      <section>
        <main>
          <p>
            Information on this page won't be indexed by the plugin.
          </p>
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
