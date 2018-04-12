<template>
    <section class="about">
      <div class="container">
        <Header/>
        <About/>
      </div>
    </section>
</template>

<script>
import Header from '~/components/Header.vue';
import About from '~/components/About.vue';

export default {
  components: {
    Header,
    About
  }
};
</script>

<style scoped lang="scss">
.about {
  @include responsive ($md) {
    height: 100vh;
  }
}
.container {
  display: flex;
  flex-direction: column;
  height: 100%;

  @include responsive ($lg) {
    justify-content: space-around;
  }
}
</style>