/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {},
  variants: {},
  plugins: [
    plugin(function({ addBase, config }) {
      addBase({
        h1: { fontSize: config('theme.fontSize.5xl') },
        h2: { fontSize: config('theme.fontSize.4xl') },
        h3: { fontSize: config('theme.fontSize.3xl') },
        h4: { fontSize: config('theme.fontSize.2xl') },
        h5: { fontSize: config('theme.fontSize.xl') },
        h6: { fontSize: config('theme.fontSize.lg') }
      })
    })
  ]
}
