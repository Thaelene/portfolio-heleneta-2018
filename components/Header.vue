<template>
    <header class="header">
        <div class="header_logo">
            <nuxt-link to="/"><img src="~/static/images/logo.png" alt="Helene Ta Portfolio"></nuxt-link>
        </div>
        <div class="header_nav">
            <nuxt-link to="/about" class="nav_link">About</nuxt-link>
        </div>
    </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;
}
.nav_link {
  @include font($avenir-black, 1.6, 900, 2.4);
  color: $white;
}
</style>