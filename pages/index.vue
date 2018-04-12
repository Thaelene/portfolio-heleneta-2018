<template>
  <div>
    <Hero/>
    <Projects/>
    <Footer/>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue';
import Projects from '~/components/Projects.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Hero,
    Projects,
    Footer
  },
  head: {
    title: 'Hélène Ta Portfolio 2018'
  }
};
</script>

<style scoped>

</style>
