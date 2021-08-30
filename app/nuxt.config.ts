import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  head: {
    title: 'nuxt-skeleton',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: false,

  buildModules: ['@nuxtjs/stylelint-module', '@nuxt/typescript-build'],

  modules: [
    '@nuxtjs/axios',
    '~/modules/users/index.ts',
    '~/modules/manager/index.ts',
  ],

  axios: {},

  build: {},
}

export default config
