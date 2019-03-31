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
    title: 'Hélène Ta - My vision, my motivation and my commitment'
  },
  meta: {
    hid: 'description',
    name: 'description',
    content:
      "Hi, I'm Hélène Ta and this is a short description of what I do best. I'm Looking for a 6-month internship from June to December 2019."
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>