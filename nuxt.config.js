const path = require('path');

module.exports = {
  css: ['~/assets/scss/main.scss'],
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'eng'
    },
    title: 'Hélène Ta - A dedicated front-end developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Hi, I'm Hélène Ta, a dedicated front-end developer. I'm Looking for a 4-month internship from July to October 2018."
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'front-end developer, front-end, portfolio, vuejs, nuxt, javascript, development'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      }
    ],
    link: [{ rel: 'manifest', href: '/site.webmanifest' }],
    link: [
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#ffb48e'
  },
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
    vendor: ['scrollmagic', '~/plugins/splittext.js']
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
