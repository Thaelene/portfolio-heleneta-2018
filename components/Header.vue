<template>
    <header class="header">
        <div class="header_logo">
            <nuxt-link to="/">Hélène Ta</nuxt-link>
        </div>
        <div class="header_nav">
            <nuxt-link to="/about" class="nav_link">About</nuxt-link>
        </div>
    </header>
</template>

<script>
</script>

<style scoped lang="scss">
.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 9vw 0;

  @include responsive($md) {
    padding: 3vw;
  }
}
.header_logo {
  color: $white;
  letter-spacing: 1px;
  @include font($avenir-black, 2.4, 900, 0.154);
}
.nav_link {
  color: $white;
  @include font($avenir-black, 1.6, 900, 2.4);
}
</style>