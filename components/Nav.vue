<template>
  <ul>
    <li><nuxt-link to="/">Home</nuxt-link></li>
    <li><nuxt-link to="/info">Info</nuxt-link></li>
    <li><nuxt-link to="/private">Not Indexed</nuxt-link></li>
  </ul>
</template>

<style scoped>
ul {
  margin-top: 16px;
  list-style: none;
}

li {
  display: inline;
}

li:after {
  content: ' ›› ';
  display: inline;
  font-size: 1.2em;
  color: #aaa;

  padding: 0 0.0725em 0 0.15em;
}

li:last-child:after {
  content: '';
}
</style>
