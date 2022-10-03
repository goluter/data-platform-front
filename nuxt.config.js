import { resolve } from 'path'
import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Govey',
    title: 'Govey',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/gtag.js', mode: 'client' },
    { src: '~/plugins/comma.js' },
    { src: '~/plugins/date.js' },
    { src: '~/plugins/trunc.js' },
    { src: '~/plugins/route' }
  ],

  alias: {
    govey: resolve(__dirname, './')
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  modulesDir: ['../../node_modules'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  env: {
    API_HOST: process.env.API_HOST
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // https://github.com/nuxt-community/redirect-module
    '@nuxtjs/redirect-module'
  ],

  auth: {
    strategies: {
      google: {
        clientId: '354470131799-rshmkrc8forsb5q1s6b2hpj7pq2k03ma.apps.googleusercontent.com',
        codeChallengeMethod: '',
        responseType: 'code',
        endpoints: {
          token: 'http://localhost:8080/login/',
          userInfo: 'http://localhost:3000/mypage'
        }
      }
    },
    redirect: {
      callback: '/protected'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    proxy: true
  },

  proxy: {
    '/api': 'http://localhost:8080'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  publicRuntimeConfig: {
    API_HOST: process.env.API_HOST
  },
  // redirect: [
  //   {
  //     from: '^.*(?<!\/)$',
  //     to: (from, req) => req.url + '/'
  //   }
  // ],
  // router: {
  //   trailingSlash: true
  // }
  router: { middleware: ['route-guard'] }
}
