<template>
  <div class="about_wrapper" ref="aboutWrapper">
    <div class="about_image">
      <div class="about_mask" ref="aboutMask"></div>
      <div class="about_portrait" ref="aboutPortrait">
        <img src="images/helene-ta.png" alt="Hélène Ta's portrait">
      </div>
    </div>

    <div class="about_content" ref="aboutContent">
      <h1 class="about_title" ref="aboutTitle">Hello there,</h1>
      <p class="about_description" ref="aboutDescription">
        My name is Hélène Ta, a 22-year-old front-end developer and a 3rd year student at <a href="https://www.hetic.net/" target="black" rel="noopener" class="about_link nav_link">Hetic</a>. Ex-intern at <a href="https://www.basaltiq.fr" target="black" rel="noopener" class="about_link nav_link">Basaltiq</a>, Paris in 2017. I thrive when I’m dealing with new challenges. I’m determined to create smooth experiences and discover new technologies.
      </p>
      <p class="about_important" ref="aboutImportant">
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

      <p class="credits" ref="aboutCredits">Thanks to <a href="https://dribbble.com/tranminhvillageois" alt="Tran Minh Villageois Dribbble" class="nav_link">Tran Minh Villageois</a> for putting into vectors this portfolio.</p>
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
  methods: {
    animationShowAbout() {
      const tween = new TimelineMax()
        .to(
          this.$refs.aboutMask,
          0.5,
          {
            x: '0%'
          },
          'imgStart'
        )
        .to(
          this.$refs.aboutPortrait,
          0.8,
          {
            width: '100%'
          },
          'imgStart+=0.2'
        )
        .to(this.$refs.aboutTitle, 0.3, {
          opacity: 1,
          y: -15
        })
        .to(this.$refs.aboutDescription, 0.3, {
          opacity: 1,
          y: -15
        })
        .to(this.$refs.aboutImportant, 0.3, {
          opacity: 1,
          y: -15
        })
        .to(this.$refs.aboutSocials, 0.3, {
          opacity: 1
        })
        .to(this.$refs.aboutCredits, 0.3, {
          opacity: 1
        });
      return tween;
    }
  },
  mounted() {
    // Init ScrollMagic scene
    const projectScene = new ScrollMagic.Scene({
      triggerElement: this.$refs.aboutWrapper,
      triggerHook: 0.5,
      reverse: false
    })
      .setTween(this.animationShowAbout())
      .on('end', () => aboutWrapper.destroy())
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
  margin: 2rem 0;

  @include responsive ($md) {
    padding: 3vw;
    margin: 0;
  }

  @include responsive ($lg) {
    flex-direction: row;
    padding: 3vw;
  }

  @include responsive ($xl) {
    flex-direction: row;
    padding: 3vw 9vw 5vw;
  }

  @include responsive ($xxl) {
    flex-direction: row;
    padding: 5vw;
  }
}

.about_image {
  position: relative;
  overflow: hidden;
  width: 34rem;

  @include responsive($xl) {
    max-width: 64rem;
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
  height: 100%;
  max-width: 340px;
  overflow: hidden;
  order: 2;
  width: 0;

  @include responsive($lg) {
    order: inherit;
    display: block;
    max-width: 34rem;
  }

  @include responsive($xl) {
    max-width: 64rem;
  }
  img {
    filter: grayscale(8%);
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.about_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 56rem;

  @include responsive($lg) {
    margin-top: 1rem;
    margin-left: 10rem;
    max-width: 43rem;
  }

  @include responsive($xl) {
    margin-left: 12rem;
  }
}

.about_title {
  color: $pink;
  opacity: 0;
  transform: translateY(15px);
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

.about_description,
.about_important {
  color: $black;
  opacity: 0;
  transform: translateY(15px);
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
  opacity: 0;
  margin: 9vw 0;
  @include font($avenir-black, 1.3, 900, 1.3);

  @include responsive ($md) {
    margin: 3vw 0;
  }

  @include responsive ($xxl) {
    margin: 1vw 0;
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
  font-weight: 900;

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

.credits {
  opacity: 0;
  @include font($avenir-book, 1.2, 300, 1.3);
}
</style>