<template>
  <div class="container">
    <div>
      <Logo />
      <Nav />
      <Header />
      <h2 class="subtitle">
        This is a search indexable page for the demo.
      </h2>
      <p>
        To install, add the plugin in your netlify.toml. No config is required
        but we show the default options here. Default config will exclude
        nothing and generate a JSON file at
        <code>https://yoursite.netlify.com/searchIndex.json</code>
      </p>
      <Links />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Nav from '~/components/Nav.vue'
import Header from '~/components/Header.vue'
import Links from '~/components/Links.vue'

export default {
  components: {
    Logo,
    Nav,
    Header,
    Links
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
