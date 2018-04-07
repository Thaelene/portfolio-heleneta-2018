<template>
  <div class="loading_page" v-if="loading">
    <p>Loading...</p>
    <div class="line">{{ percent }}</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    percent: 0
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
    increase(num) {
      this.percent = num;
    }
  }
};
</script>

<style scoped lang="scss">
.loading_page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>