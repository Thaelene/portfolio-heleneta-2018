<template>
  <section class="hero">
    <h1 class="hero_name" ref="heroName">Hélène Ta</h1>
    <div class="container">
      <Header/>
      <div class="heroIntroContainer">
        <HeroIntro/>
      </div>
      <div class="hero_scroll">
        
      </div>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header.vue';
import HeroIntro from '~/components/HeroIntro.vue';

import Vue from 'vue';
import { TweenMax } from 'gsap';

let ScrollMagic;
if (process.browser) {
  ScrollMagic = require('scrollmagic');
  require('animation.gsap');

  // Init ScrollMagic Controller
  Vue.prototype.$smController = new ScrollMagic.Controller();
}
export default {
  components: {
    Header,
    HeroIntro
  },
  methods: {
    animation() {
      const tween = new TweenMax.fromTo(
        this.$refs.heroName,
        1,
        { x: '45%' },
        { x: '-45%' }
      );
      return tween;
    }
  },
  mounted() {
    // Init ScrollMagic scene
    const heroScene = new ScrollMagic.Scene({
      duration: (this.$refs.heroName.clientHeight + window.innerHeight) * 1.25,
      triggerElement: this.$refs.heroIntro,
      triggerHook: 1
    })
      .setTween(this.animation())
      .addTo(this.$smController);
  }
};
</script>

<style scoped lang="scss">
.hero {
  background-color: #181818;
  height: 100vh;
  position: fixed;
  top: 0%;
  width: 100%;
  z-index: -111;

  @include responsive($md) {
    background-size: 260%;
  }
}

.hero_name {
  color: #000;
  letter-spacing: -0.4px;
  position: relative;
  @include font($avenir-black, 29.4, 900, 9.4);

  @include responsive($sm) {
    @include font($avenir-black, 5.6, 900, 9.4);
  }

  @include responsive($md) {
    position: absolute;
    top: 25vh;
    right: 0;
    width: 120%;
    transform: translateX(45%);
    @include font($avenir-black, 29.4, 900, 9.4);
  }
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.heroIntroContainer {
  margin: 0 auto;
  width: 75%;
}
</style>