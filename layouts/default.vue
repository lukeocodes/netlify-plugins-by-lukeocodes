<template>
  <div class="main" role="main">
    <nuxt />
  </div>
</template>

<style>
html {
  @apply font-sans text-base tracking-normal box-border px-6 mt-12;
}

*,
*:before,
*:after {
  @apply box-border m-0;
}

.button {
  @apply inline-block border rounded no-underline py-1 px-3;
}

.button--green {
  @apply border-teal-500 text-teal-500;
}

.button--green:hover {
  @apply text-white bg-teal-500;
}

.button--grey {
  @apply border-gray-500 text-gray-500;
}

.button--grey:hover {
  @apply text-white bg-gray-500;
}

.main {
  max-width: 600px;
  margin: 0 auto;
}

.container {
  @apply min-h-screen flex justify-center text-center mx-auto;
}

a {
  @apply text-teal-500;
}

a:hover {
  @apply text-teal-700;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply text-gray-600;
}

section {
  @apply my-6;
}

footer {
  @apply mt-3;
}
</style>
