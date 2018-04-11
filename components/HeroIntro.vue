<template>
  <div class="heroIntro">
    <h1 class="heroIntro_name">Hélène Ta</h1>
    <h2 class="heroIntro_subtitles">Creating and building useful projects with simplicity and conscientiousness</h2>
    <p class="heroIntro_description">
      I’m a french Front-end developer at HETIC and looking for a 4-month intership.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.heroIntro_name {
  color: #000;
  letter-spacing: -0.4px;
  position: relative;
  @include font($avenir-black, 29.4, 900, 9.4);

  @include responsive($sm) {
    @include font($avenir-black, 5.6, 900, 9.4);
  }

  @include responsive($md) {
    position: absolute;
    top: 25vh;
    right: 0;
    width: 120%;
    transform: translateX(45%);
    @include font($avenir-black, 29.4, 900, 9.4);
  }
}

.heroIntro_subtitles {
  color: $white;
  position: relative;
  z-index: 3;
  @include font($avenir-medium,1.8, 500, 3.4);

  @include responsive($sm) {
    @include font($avenir-black, 2.4, 900, 9.4);
  }

  @include responsive($md) {
    @include font($avenir-black,4.8, 900, 6.4);
  }
}

.heroIntro_link {
  color: $pink;
  text-transform: uppercase;
}

.heroIntro_description {
  @include font($avenir-book, 1.4, 300, 2.1);
  color: $white;
  padding-top: 1.5rem;

  @include responsive($md) {
    color: #424242;
    max-width: 55.7rem;
    padding-top: 5.2rem;
    @include font($avenir-medium, 2.4, 500, 3.7);
  }
}
</style>