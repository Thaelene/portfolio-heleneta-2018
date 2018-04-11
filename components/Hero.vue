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