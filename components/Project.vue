<template>
<a :href="project.link" ref="projectContainer" target="_blank">
  <div class="project">
    <div class="project_content">
      <li class="project_count" ref="projectCount">{{index &lt; 10 ? `0${index + 1}` : index + 1}} <span>/ {{projectsLength &lt; 10 ? `0${projectsLength}` : projectsLength}}</span></li>
      <div class="project_info">
        <h3 class="project_title" ref="projectTitle">{{ project.title }}</h3>
        <span class="project_year" ref="projectYear">{{ project.year }}</span>
        <p class="project_description" ref="projectDescription">{{ project.description }}</p>
      </div>
      <p class="project_role">{{ project.role }}</p>
    </div>
    <div class="project_image">
      <div class="project_wrapper">
        <img :src="`images/${project.image}`">
        <div class="project_icon">
          <svg id="arrow-icon" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"><title>Arrow icon</title><path d="M71,50a2.37,2.37,0,0,0-.56-1.38l-16-17a2,2,0,0,0-2.83-.07,2,2,0,0,0-.08,2.82L64.37,48H31a2,2,0,0,0,0,4H64.37L51.53,65.62a2.09,2.09,0,0,0,.08,2.83,2,2,0,0,0,2.83-.07l16-17A1.77,1.77,0,0,0,71,50Z"/></svg>
        </div>
      </div>
    </div>
  </div>
  </a>
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
  mounted() {
    const tween = TweenMax.to(this.$refs.projectTitle, 1, {
      opacity: 1,
      transform: 'translateY(-15px)'
    });
    const projectScene = new ScrollMagic.Scene({
      triggerElement: this.$refs.projectContainer,
      triggerHook: 0.5,
      reverse: false
    })
      .setTween(tween)
      .addTo(this.$smController);
  },
  props: ['project', 'index', 'projectsLength']
};
</script>

<style scoped lang="scss">
a {
  display: block;
}
.project {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  margin: 9rem 0;

  @include responsive($lg) {
    flex-direction: row;
    flex-wrap: wrap;
    height: 48.6rem;
    margin: 13rem 0;
    position: relative;
  }
}

// Project content
.project_content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  z-index: 5;

  @include responsive($lg) {
    max-width: 37rem;
    height: 100%;
  }
}

.project_count {
  @include font($acaslonpro-regular, 1.6, 400, 1.3);

  @include responsive($lg) {
    @include font($acaslonpro-regular, 2.2, 400, 3.3);
  }

  span {
    font-size: 1.2rem;

    @include responsive($lg) {
      font-size: 1.4rem;
    }
  }
}

.project_info {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin: 1.5rem 0;

  @include responsive($lg) {
    margin: 0;
  }
}

.project_title {
  opacity: 0;
  transform: translateY(15px);
  @include font($avenir-black, 4.6, 900, 4.5);

  @include responsive($lg) {
    @include font($avenir-black, 6.6, 900, 7.5);
  }
}

.project_year {
  @include font($avenir-heavy, 1.2, 900, 1.2);
  margin: 2.7rem 0 1.8rem;
  padding-left: 1rem;
  position: relative;

  &:before {
    content: '';
    display: block;
    width: 0.3rem;
    height: 0.8rem;
    background-color: $pink;
    position: absolute;
    top: calc(50%-4px);
    left: 0;
    margin-right: 1rem;
  }
}

.project_description {
  @include font($acaslonpro-regular, 1.6, 400, 2.8);

  @include responsive($lg) {
    max-width: 28.2rem;
  }
}

.project_role {
  @include font($avenir-heavy, 1.4, 900, 2.1);
  text-align: right;
  margin-bottom: 2.5rem;

  &:after {
    content: '';
    display: inline-block;
    width: 10rem;
    height: 0.3rem;
    background-color: #222;
    margin-left: 2.2rem;
  }
}

// Project image
.project_image {
  @include responsive($lg) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    overflow: hidden;
  }

  @include responsive($xl) {
    width: 81rem;
  }

  @include responsive($xxl) {
    width: 89.3rem;
    height: 48.6rem;
  }

  img {
    width: 100%;

    @include responsive($lg) {
      height: 100%;
      width: inherit;
    }

    @include responsive($xl) {
      width: 100%;
      height: inherit;
    }
  }
}

.project_wrapper {
  position: relative;

  @include responsive($lg) {
    width: 63.3rem;
    height: 100%;
  }

  @include responsive($xl) {
    width: inherit;
    height: inherit;
  }

  &:after {
    content: '';
    display: block;
    background-color: $pink;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.project_icon {
  position: absolute;
  top: 50%;
  right: 0;
  svg {
    width: 4rem;
    height: 4rem;
  }
}
</style>
