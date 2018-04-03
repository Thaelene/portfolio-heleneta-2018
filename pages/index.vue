<template>
  <div>
    <Hero/>
    <Projects/>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue';
import Projects from '~/components/Projects.vue';

export default {
  components: {
    Hero,
    Projects
  },
  head: {
    title: 'Helene Ta Portfolio'
  }
};
</script>

<style scoped>

</style>
