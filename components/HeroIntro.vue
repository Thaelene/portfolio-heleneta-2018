<template>
  <div class="heroIntro" ref="heroIntro">
    <h2 class="heroIntro_title" ref="heroIntroTitle">Creating and building useful projects with simplicity and conscientiousness</h2>
    <p class="heroIntro_description" ref="heroIntroDescription">
      I’m a french Front-end developer at HETIC and looking for a 4-month intership.
    </p>
  </div>
</template>

<script>
import { TweenMax } from 'gsap';

export default {
  methods: {
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
        .staggerTo('.heroIntroLines', 1, { opacity: 1, y: '0%' }, 0.5)
        .to(this.$refs.heroIntroDescription, 1, { opacity: 1 });
    }
  },
  mounted() {
    this.initIntroAnimation();
  }
};
</script>

<style scoped lang="scss">
.heroIntroWord {
  line-height: 0;
}
.heroIntro_title {
  color: $white;
  opacity: 0;
  position: relative;
  z-index: 3;
  @include font($avenir-medium,1.8, 500, 3.4);

  @include responsive($sm) {
    @include font($avenir-black, 2.4, 900, 9.4);
  }

  @include responsive($md) {
    @include font($avenir-black,4.8, 900, 6.4);
  }
}

.heroIntro_link {
  color: $pink;
  text-transform: uppercase;
}

.heroIntro_description {
  color: $white;
  opacity: 0;
  padding-top: 1.5rem;
  @include font($avenir-book, 1.4, 300, 2.1);

  @include responsive($md) {
    color: #424242;
    max-width: 55.7rem;
    padding-top: 5.2rem;
    @include font($avenir-medium, 2.4, 500, 3.7);
  }
}
</style>