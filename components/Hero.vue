<template>
  <section class="hero">
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

export default {
  components: {
    Header,
    HeroIntro
  }
};
</script>

<style scoped lang="scss">
.hero {
  background-image: url('~/static/images/hero_background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 40% 55%;
  height: 100vh;

  @include responsive($md) {
    background-size: 260%;
  }
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.heroIntroContainer {
  width: 75%;
  margin: 0 auto;
}
</style>