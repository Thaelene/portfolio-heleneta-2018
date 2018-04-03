<template>
    <div>
      <Header/>
        <h1 class="title">Salut</h1>
    </div>
</template>

<script>
import Header from '~/components/Header.vue';

export default {
  head: {
    title: 'About Helene Ta'
  }
};
</script>

<style scoped lang="scss">
.title {
  color: $test;
  font-family: $avenir-black;
  &:after {
    content: 'caca';
  }
}
</style>