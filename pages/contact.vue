<template>
    <div>
        <h1 class="title">Salut</h1>
    </div>
</template>

<script>
export default {
  head: {
    title: 'Helene Ta Contact me'
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