<template>
  <section class="hero" ref="hero">
    
    <div class="container">
      <Header/>
      <div class="heroIntroContainer">
        <HeroIntro/>
      </div>
      <div class="hero_scroll">
        <div class="hero_scroll_container">
          <div class="scroll"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header.vue';
import HeroIntro from '~/components/HeroIntro.vue';

import Vue from 'vue';
import { TweenMax } from 'gsap';

export default {
  components: {
    Header,
    HeroIntro
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.hero {
  background-color: #F6F6F6;
  height: 100vh;
  position: fixed;
  top: 0%;
  width: 100%;
  z-index: -111;

  @include responsive($md) {
    background-size: 260%;
  }
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header {
  color: #fff;
}

.heroIntroContainer {
  margin: 0 auto;
  width: 75%;
}

.hero_scroll {
  height: 7.5rem;
  position: relative;
}

.hero_scroll_container {
  margin-bottom: 9vw;
  position: absolute;
  bottom: 0;
  right: 3vw;
  background-color: grey;
  overflow: hidden;

  @include responsive($md) {
    margin-bottom: 3vw;
  }
}

.scroll {
  width: 0.3rem;
  height: 7.5rem;
  background: $white;
  will-change: animation;
  animation: scroll 2s ease-in;
  animation-iteration-count: infinite;
}

@keyframes scroll {
  from {
    height: 7.5rem;
    transform: translateY(-100%);
  }
  to {
    height: 0.5rem;
    transform: translateY(0%);
  }
}
</style>