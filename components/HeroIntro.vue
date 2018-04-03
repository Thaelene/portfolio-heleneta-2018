<template>
  <div class="heroIntro">
    <h1 class="heroIntro_name">Hélène Ta</h1>
    <h2 class="heroIntro_subtitles">Front-end developer - 3rd year student at <a href="https://www.hetic.net" class="heroIntro_link">Hétic</a></h2>
    <p class="heroIntro_description">
      Trying to create and build useful projects - Simplicity and conscientiousness are my thing
    </p>
    <p class="heroIntro_description">
      I am currently looking for a 4 months intership abroad.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.heroIntro_name {
  @include font($avenir-black, 4.6, 900, 9.4);
  color: $white;
  letter-spacing: -0.4px;

  @include responsive($sm) {
    @include font($avenir-black, 5.6, 900, 9.4);
  }

  @include responsive($md) {
    @include font($avenir-black, 7.6, 900, 9.4);
  }
}

.heroIntro_subtitles {
  @include font($avenir-medium,1.8, 500, 3.4);
  color: $white;

  @include responsive($sm) {
    @include font($avenir-black, 2.4, 900, 9.4);
  }

  @include responsive($md) {
    @include font($avenir-medium,2.8, 500, 9.4);
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
    @include font($avenir-book, 1.8, 300, 3);
    padding-top: 0;
  }
}
</style>