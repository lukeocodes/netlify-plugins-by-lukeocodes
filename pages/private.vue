<template>
  <div class="container">
    <div>
      <Logo />
      <Nav />
      <Header title="This Page Won't Get Indexed" />
      <section>
        <main>
          <h3>
            This is <strong>NOT</strong> a search indexable page for the demo.
          </h3>
          <p>
            Information on this page won't be indexed by the plugin.
          </p>
          <p>
            Unique string for test in the
            <nuxt-link to="/search">search</nuxt-link> box:
            <code>5f4dcc3b5aa765d61d8327deb882cf99</code>
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
