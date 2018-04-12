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
  },
  head: {
    title: 'About Hélène Ta - 2018 Portfolio'
  },
  meta: {
    hid: 'description',
    name: 'description',
    content:
      "Hi, I'm Hélène Ta and this is a short description of what I do best. I'm Looking for a 4-month internship from July to October 2018."
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
}
</style>