<template>
  <div class="heroIntro" ref="heroIntro">
    <!-- <h1 class="hero_name" ref="heroName">prout</h1> -->
    <div class="heroIntro_title" ref="heroIntroTitle">
      <h2 class="title_top">Hi,</h2>
      <p class="title_text">
        I am a 4th year student working as front end developer with strong UX input. Producing userful and intuitive experiences are my everyday victories.
        I enjoy being part of the conception phase where I can match the perfect feature to the user’s need.
      </p>
      <p class="title_important">
        I am looking for a 6-month internship where we can work on a product together.
      </p>
      <div>
        <button class="btn-copy" ref="btnCopy" :v-clipboard="copyData" @click="triggerRevealAnimation">Reach me out !</button>
        <span class="copy-details">email now copied on your clipboard ;)</span>
      </div>
    </div>
  </div>
</template>

<script>
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
  methods: {
    // nameAnimation() {
    //   const tween = new TweenMax.fromTo(
    //     this.$refs.heroName,
    //     1,
    //     { x: '55%' },
    //     { x: '-55%' }
    //   );
    //   return tween;
    // },
    // Title animation
    initIntroAnimation() {
      new SplitText(this.$refs.heroIntroTitle, {
        type: 'lines, words',
        linesClass: 'heroIntroLines',
        wordsClass: 'heroIntroWord'
      });

      //TweenMax.set('.heroIntroLines', { overflowY: 'hidden' });
      TweenMax.set('.heroIntroLines', { opacity: 0, y: '100%' });
      TweenMax.set('.heroIntro_title', { opacity: 1 });

      this.triggerAnimation();
    },
    triggerAnimation() {
      const timeline = new TimelineMax()
        .staggerTo('.heroIntroLines', 1, { opacity: 1, y: '0%' }, 0.9)
        //.to(this.$refs.heroIntroDescription, 1, { opacity: 1 });
    },

    // Reveal copied
    initRevealAnimation(){
      TweenMax.set('.copy-details', { opacity: 0, y: '100%' });
    },

    triggerRevealAnimation(){
      console.log('hi')
      const timeline = new TimelineMax()
        .to('.copy-details', 1, { opacity: 1, y: '0%' })
        .staggerTo('.copy-details', 1, { opacity: 0})
    }
  },
  data(){
    return {
      copyData: 'hello@heleneta.com'
    }
  },
  mounted() {
    // Init ScrollMagic scene
    // const heroScene = new ScrollMagic.Scene({
    //   duration: (this.$refs.heroName.clientHeight + window.innerHeight) * 1.25,
    //   triggerHook: 1
    // })
    //   .setTween(this.nameAnimation())
    //   .addTo(this.$smController);

    // Intro title animation
    this.initIntroAnimation();
  }
};
</script>

<style scoped lang="scss">
.heroIntro {
  position: relative;
}

.hero_name {
  color: #000;
  letter-spacing: -0.4px;
  position: absolute;
  right: 0;
  top: -15vh;
  transform: translateX(55%);
  width: 220%;
  @include font($avenir-black, 10, 900, 9.4);

  @include responsive($xs) {
    width: 240%;
    @include font($avenir-black, 14, 900, 9.4);
  }

  @include responsive($sm) {
    width: 170%;
    @include font($avenir-black, 19, 900, 9.4);
  }

  @include responsive($lg) {
    width: 150%;
    @include font($avenir-black, 20.4, 900, 9.4);
  }

  @include responsive($xl) {
    width: 170%;
    @include font($avenir-black, 29.4, 900, 9.4);
  }
}

.heroIntro_title {
  color: $black;
  opacity: 0;
  position: relative;
  z-index: 3;
  @include font($avenir-black, 2.4, 900, 3.4);
  

  @include responsive($sm) {
    @include font($avenir-black, 2.4, 900, 9.4);
  }

  @include responsive($md) {
    max-width: 50vw;
    @include font($avenir-black,4.8, 900, 6.4);
  }

  .title_text{
    @include font($acaslonpro-regular,1.6, 500, 2.4);

    @include responsive($md) {
      @include font($acaslonpro-regular,1.8, 500, 3.4);
    }
  }

  .title_important{
    margin-top: 1rem;
    @include font($avenir-black,1.8, 900, 2.7);

    @include responsive($md) {
      @include font($avenir-black,1.8, 900, 3.4);
    }
  }

}

.heroIntroWord {
  line-height: 0;
}

.heroIntro_description {
  color: #757575;
  opacity: 0;
  padding-top: 1.5rem;
  @include font($avenir-book, 1.4, 300, 2.1);

  @include responsive($md) {
    color: #757575;
    max-width: 55.7rem;
    padding-top: 5.2rem;
    @include font($avenir-medium, 2.4, 500, 3.7);
  }
}

.btn-copy{
  @include font($avenir-black, 1.4, 900, 2.1);
  color: $pink;
  background-color: transparent;
  border: none;
  padding: 0;

  &:hover{
    cursor: pointer;
  }

  &:focus{
    outline: none;
  }
}

.copy-details{
  display: block;
  opacity: 0;
  @include font($avenir-book, 1.2, 300, 1.4);

  @include responsive($md) {
    display: inline-block;
    margin-left: 1rem;
  }
}
</style>