![](https://img.shields.io/badge/main-not%20master-green)
![](https://img.shields.io/badge/made%20with-%E2%9D%A4-red)
![](https://img.shields.io/github/contributors/lukeocodes/netlify-plugins-by-lukeocodes)
![](https://img.shields.io/github/issues/lukeocodes/netlify-plugins-by-lukeocodes)

# Netlify Plugins by ME

This is the source for the Nuxt.js based [demo site deployed to Netlify](https://netlify-plugins-by-lukeocodes.netlify.app/), that includes the use of plugins I've created for the [Netlify Plugin Directory](http://app.netlify.com/plugins)

## Netlify Plugin: Algolia Export

The [Algolia Export plugin](https://github.com/lukeocodes/netlify-plugin-algolia-export) exports the parsed built pages to Algolia directly. Requires environment variables to be set to work, without which it will fail the plugin but not the build, with a message reminding you to set them.

```
[[plugins]]
  package = "netlify-plugin-algolia-export"
    [plugins.inputs]
      exclude = ['/private', '/200', '/search']
```

## Netlify Plugin: OpenSearch

The [OpenSearch plugin](https://github.com/lukeocodes/netlify-plugin-opensearch) builds a simple search.xml file based on config. Why not just create a `search.xml` file? It is just another arbitrary file to store statically.

```
[[plugins]]
  package = "netlify-plugin-opensearch"
    [plugins.inputs]
      siteShortName = "Demo Site"
      siteDescription = "Find stuff on the demo site"
      siteTags = "demos"
      siteContact = "luke@lukeoliff.com"
```

## Running This Demo Locally

Install and run :)

```
npm install
```

```
npm run dev
```

## Using This As a Nuxt.js Starter

Using this as an Algolia enabled Nuxt.js Starter repo, see above for running locally.

To build as a universal server-side rendered Vue application:

```
npm run generate
```

Dist folder is the standard Nuxt.js `dist` directory.

### Using Algolia Export

The Algolia Export plugin requires the following environment variables.

| env variable name  | type  | required  | default  | description  |
|---|---|---|---|---|
| ALGOLIA_APPLICATION_ID | String | true | `null` | Your Algolia application ID |
| ALGOLIA_ADMIN_KEY | String | true | `null` | Your Algolia Admin (or any index-write enabled) API key |
| ALGOLIA_INDEX | String | true | `null` | Your Algolia index name |

### Using Algolia InstantSearch

The `/search` page uses [Algolia InstantSearch](https://www.algolia.com/doc/api-reference/widgets/instantsearch/vue/). You'll need to add an extra environment variable to get this working.

| env variable name  | type  | required  | default  | description  |
|---|---|---|---|---|
| ALGOLIA_SEARCH_KEY | String | true | `null` | Your Algolia Search (or any index-read enabled) API key |

## Contributing

Make pull-requests, but follow [code of conduct](.github/CODE_OF_CONDUCT.md) please.
