<template>
  <div class="about_wrapper" ref="aboutWrapper">
    <div class="about_mask" ref="aboutMask"></div>
    <div class="about_portrait" ref="aboutPortrait">
      <img src="images/helene-ta.png" alt="Hélène Ta's portrait">
    </div>

    <div class="about_content" ref="aboutContent">
      <h1 class="about_title" ref="aboutTitle">Hello there,</h1>
      <p class="about_description" ref="aboutDescription">
        My name is Hélène Ta, a 22-year-old front-end developer and a 3rd year student at <a href="https://www.hetic.net/" target="black" rel="noopener" class="about_link nav_link">Hetic</a>. Ex-intern at <a href="https://www.basaltiq.fr" target="black" rel="noopener" class="about_link nav_link">Basaltiq</a>, Paris in 2017. I thrive when I’m dealing with new challenges. I’m determined to create smooth experiences and discover new technologies.
      </p>
      <p class="about_description about_important">
        I’m a looking for a 4-month internship abroad from July to October 2018 where we can work together to build rewarding projects.
      </p>
      <nav class="about_socials" ref="aboutSocials">
        <ul>
          <li>
            <a href="https://github.com/Thaelene" target="blank" rel="noopener" class="nav_link">Github</a>
          </li>
          <li>
            <a href="https://www.instagram.com/tahelene/" target="blank" rel="noopener" class="nav_link">Instagram</a>
            </li>
          <li>
            <a href="https://www.linkedin.com/in/helene-ta/" target="blank" rel="noopener" class="nav_link">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.behance.net/helene121001e2" target="blank" rel="noopener" class="nav_link">Behance</a>
          </li>
          <li>
            <a href="http://www.heleneta.com/helenetaCV.pdf" target="blank" rel="noopener" class="nav_link">Resume</a>
          </li>
      </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { TweenMax } from 'gsap';

let ScrollMagic;
if (process.browser) {
  ScrollMagic = require('scrollmagic');
  require('animation.gsap');

  // Init ScrollMagic Controller
  Vue.prototype.$smController = new ScrollMagic.Controller();
}
export default {
  head: {
    title: 'About Hélène Ta'
  },
  methods: {
    animation() {}
  },
  mounted() {
    // Init ScrollMagic scene
    const projectScene = new ScrollMagic.Scene({
      triggerElement: this.$refs.aboutWrapper,
      triggerHook: 0.5,
      reverse: false
    })
      .setTween(this.animation())
      .on('end', () => projectScene.destroy())
      .addTo(this.$smController);
  }
};
</script>

<style scoped lang="scss">
.header_logo,
.nav_link {
  color: $black;
}

.about_wrapper {
  display: flex;
  flex-direction: column;

  @include responsive ($md) {
    padding: 3vw;
  }

  @include responsive ($lg) {
    flex-direction: row;
    padding: 3vw;
  }

  @include responsive ($xl) {
    flex-direction: row;
    padding: 3vw 9vw;
  }

  @include responsive ($xxl) {
    flex-direction: row;
    padding: 3vw 5vw;
  }
}

.about_mask {
  background-color: $pink;
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateX(-101%);
  width: 100%;
}

.about_portrait {
  display: none;
  max-width: 340px;
  overflow: hidden;
  order: 2;

  @include responsive($lg) {
    order: inherit;
    display: block;
    max-width: 42rem;
  }

  @include responsive($lg) {
    max-width: 34rem;
  }
  img {
    filter: grayscale(8%);
    width: 100%;

    @include responsive($lg) {
      height: 100%;
      width: auto;
    }
  }
}

.about_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 56rem;

  @include responsive($lg) {
    margin-top: 10rem;
    margin-left: 10rem;
    max-width: 43rem;
  }

  @include responsive($xl) {
    margin-left: 12rem;
  }
}

.about_title {
  color: $pink;
  @include font($avenir-black, 4, 900, 6);

  @include responsive ($xxs) {
    @include font($avenir-black, 5, 900, 8);
  }

  @include responsive ($md) {
    @include font($avenir-black, 8, 900, 12);
  }

  @include responsive ($lg) {
    @include font($avenir-black, 7, 900, 12);
  }
}

.about_description {
  color: $black;
  padding: 2rem 0 0;
  @include font($avenir-medium, 1.4, 500, 2);

  @include responsive ($xxs) {
    @include font($avenir-medium, 1.8, 500, 2.5);
  }

  @include responsive ($md) {
    @include font($avenir-medium, 1.6, 500, 2.5);
  }
}

.about_link {
  color: #666;
  font-family: $avenir-black;
  font-weight: 900;
}

.about_important {
  font-weight: 900;
}

.about_socials {
  margin: 9vw 0;
  @include font($avenir-black, 1.3, 900, 1.3);

  @include responsive ($md) {
    margin: 3vw 0;
  }

  ul {
    li {
      display: block;
      line-height: 2rem;
      position: relative;

      @include responsive ($md) {
        display: inline-block;
        margin: 0 1.5rem;
      }
    }

    li:first-child {
      margin-left: 0;
    }
  }
}

.nav_link {
  position: relative;

  &:before {
    content: '';
    background-color: $pink;
    bottom: -0.2rem;
    color: $pink;
    display: block;
    height: 2px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    left: 0;
    transform: translateX(-100%);
    transition: all 0.3s ease-in;
    white-space: nowrap;
    width: 30%;
    z-index: 2;
  }

  &:hover {
    &:before {
      opacity: 1;
      transform: translateX(0);
      width: 100%;
    }
  }
}
</style>