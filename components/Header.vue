<template>
    <header class="header">
        <nuxt-link to="/">
          <div class="header_logo">
           <span class="logo_name">Hélène Ta</span>
            <span class="logo_title">Interactive Producer</span>
          </div>
        </nuxt-link>
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
  z-index: 5;
  color: $black;

  @include responsive($md) {
    padding: 3rem;
  }
}
.header_logo {

  span{
    display: block;
    @include font($avenir-black, 1.6, 900, 2.4);
  }

  .logo_title{
    @include font($avenir-medium, 1.6, 500, 2.4);
  }
}

.nav_link {
  @include font($avenir-black, 1.6, 900, 2.4);
}
</style>