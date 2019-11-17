<template>
  <div class="container">
    <Header/>
    <About/>
  </div>
</template>

<script>
import About from '~/components/About.vue';
import Header from '~/components/Header.vue';

export default {
  components: {
    Header,
    About
  },
  head: {
    title: 'Hélène Ta - Interactive Producer'
  }
};
</script>

<style scoped>

</style>
