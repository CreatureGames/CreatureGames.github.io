export default {
  components: true,
  target: 'static',
  ssr: false,
  head: {
    title: 'Creature Games Studio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/creature-icon.png' }
    ]
  },
  css: [
    '~/assets/sass/main.sass',
    '~/assets/sass/colors.sass',
    '~/assets/sass/mixins.sass',
  ],
  buildModules: [
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    sass: [
      '~/assets/sass/colors.sass',
      '~/assets/sass/mixins.sass',
    ]
  }
}
