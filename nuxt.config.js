const path = require('path');

module.exports = {
  css: ['~/assets/scss/main.scss'],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Helene Ta Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/loading.vue',
  modules: ['nuxt-sass-resources-loader'],
  sassResources: ['~assets/scss/main.scss'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      config.resolve.alias['animation.gsap'] = path.join(
        this.options.rootDir,
        'node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
      );
      config.resolve.alias['TweenMax'] = path.join(
        this.options.rootDir,
        'node_modules/gsap/TweenMax.js'
      );
      config.resolve.alias['TimelineMax'] = path.join(
        this.options.rootDir,
        'node_modules/gsap/TimelineMax.js'
      );
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    },
    vendor: ['scrollmagic']
  },
  plugins: [
    {
      src: '~plugins/scrollmagic.js',
      ssr: false
    },
    {
      src: '~plugins/animation.gsap.js',
      ssr: false
    }
  ]
};
