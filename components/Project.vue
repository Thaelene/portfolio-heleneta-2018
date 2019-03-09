<template>
<a :href="project.link" ref="projectContainer" target="_blank" rel="noopener">
  <div class="project">
    <div class="project_content">
      <div class="project_count" ref="projectCount">{{index &lt; 10 ? `0${index + 1}` : index + 1}} <span>/ {{projectsLength &lt; 10 ? `0${projectsLength}` : projectsLength}}</span></div>
      <div class="project_info">
        <h3 class="project_title" ref="projectTitle">{{ project.title }}</h3>
        <span class="project_year" ref="projectYear">{{ project.year }}</span>
        <div class="project_description_container">
        <p class="project_description" ref="projectDescriptionLeft">{{ project.descriptionLeft }}</p>
        <p class="project_description" ref="projectDescriptionRight">{{ project.descriptionRight }}</p>
        </div>
      </div>
      <div class="project_role_container">
        <p class="project_role" ref="projectRole">{{ project.role }}</p>
        <div class="project_role_line" ref="projectRoleLine"></div>
      </div>
    </div>
    <div class="project_image">
      <div class="project_wrapper" ref="projectWrapper">
        <div class="project_mask" ref="projectMask"></div>
        <div class="project_image_container" ref="projectImgContainer">
          <img :src="`images/${project.image}`" :alt="`images/${project.imageAlt}`" ref="projectImg">
        </div>
        <div class="project_filter" ref="projectFilter"></div>
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
  methods: {
    // Change cursor on unvailable project
    changeCursor() {
      if (this.$refs.projectTitle.innerHTML == 'Écritures numériques') {
        this.$refs.projectWrapper.style.cursor = 'default';
      }
    },

    // Animation on scroll
    animation() {
      if (window.innerWidth > 960) {
        const tween = new TimelineMax()
          // Content side animation
          .to(
            this.$refs.projectCount,
            0.3,
            {
              opacity: 1,
              y: -15
            },
            'start'
          )
          .to(this.$refs.projectTitle, 0.3, {
            opacity: 1,
            y: -15
          })
          .to(this.$refs.projectYear, 0.3, {
            opacity: 1,
            y: -15
          })
          .to(this.$refs.projectDescriptionLeft, 0.3, {
            opacity: 1,
            y: -15
          })
          .to(this.$refs.projectDescriptionRight, 0.3, {
            opacity: 1,
            y: -15
          })
          // Img side animation
          .to(
            this.$refs.projectMask,
            0.5,
            {
              x: '0%'
            },
            'start'
          )
          .to(
            this.$refs.projectImgContainer,
            0.8,
            {
              width: '100%'
            },
            'start+=0.2'
          )
          .to(this.$refs.projectRole, 0.3, {
            opacity: 1,
            x: 0
          })
          .to(this.$refs.projectRoleLine, 0.3, {
            scaleX: 1
          });
        return tween;
      } else {
        const tween = new TimelineMax()
          // Content side animation
          .to(
            this.$refs.projectCount,
            0.3,
            {
              opacity: 1,
              y: -15
            },
            'start'
          )
          .to(this.$refs.projectTitle, 0.3, {
            opacity: 1,
            y: -15
          })
          .to(this.$refs.projectYear, 0.3, {
            opacity: 1,
            y: -15
          })
          .to(this.$refs.projectDescription, 0.3, {
            opacity: 1,
            y: -15
          })
          .to(this.$refs.projectRole, 0.3, {
            opacity: 1,
            x: 0
          })
          .to(this.$refs.projectRoleLine, 0.3, {
            scaleX: 1
          })
          // Img side animation
          .to(
            this.$refs.projectMask,
            0.5,
            {
              x: '0%'
            },
            'imgStart'
          )
          .to(
            this.$refs.projectImgContainer,
            0.8,
            {
              width: '100%'
            },
            'imgStart+=0.2'
          );

        return tween;
      }
    }
  },
  mounted() {
    // Init ScrollMagic scene
    const projectScene = new ScrollMagic.Scene({
      triggerElement: this.$refs.projectContainer,
      triggerHook: 0.5,
      reverse: false
    })
      .setTween(this.animation())
      .on('end', () => projectScene.destroy())
      .addTo(this.$smController);

    this.changeCursor();
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
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;

  @include responsive($lg) {
    height: 100%;
    width: 75%;
  }
}

.project_count {
  opacity: 0;
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
  align-items: space-between;
  display: flex;
  flex-direction: column;
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
  margin: 2.7rem 0 1.8rem;
  opacity: 0;
  padding-left: 1rem;
  position: relative;
  @include font($avenir-heavy, 1.2, 900, 1.2);

  &:before {
    content: '';
    background-color: $pink;
    display: block;
    height: 0.8rem;
    left: 0;
    margin-right: 1rem;
    position: absolute;
    top: calc(50%-4px);
    width: 0.3rem;
  }
}

.project_description_container{
  display: flex;
  flex-direction: column;

  @include responsive($lg) {
    flex-direction: row;
  }
}

.project_description {
  opacity: 0;
  @include font($acaslonpro-regular, 1.6, 400, 2.8);

  &:nth-child(2n){
    padding-top: 1rem;
  }

  @include responsive($lg) {
    max-width: 33.2rem;

    &:nth-child(2n){
      padding-top: 0;
      margin-left: 2rem;
    }
  }
}

.project_role_container {
  align-items: center;
  display: flex;
  margin-bottom: 2.5rem;
  margin-left: auto;
}
.project_role {
  opacity: 0;
  text-align: right;
  transform: translateX(-10px);
  @include font($avenir-heavy, 1.4, 900, 2.1);
}

.project_role_line {
  background-color: #222;
  height: 0.2rem;
  margin-left: 2.2rem;
  transform: scaleX(0);
  transform-origin: left center;
  width: 10rem;
}

// Project image
.project_image {
  @include responsive($lg) {
    height: 100%;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
  }

  @include responsive($xl) {
    width: 27%;
  }

  @include responsive($xxl) {
    height: 48.6rem;
    width: 27%rem;
  }
}

.project_wrapper {
  cursor: url('~/static/images/arrow_right.png'), auto;
  height: 180px;
  overflow: hidden;
  position: relative;

  &:hover {
    .project_filter {
      opacity: 1;
    }
  }

  @include responsive ($md) {
    height: 35rem;
  }

  @include responsive($lg) {
    height: 100%;
    width: 63.3rem;
  }

  // @include responsive($xl) {
  //   height: inherit;
  //   width: inherit;
  // }
}

.project_filter {
  background-color: rgba(0, 0, 0, 0.473);
  display: block;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  transition: opacity 0.3s ease-in;
}

.project_image_container {
  height: 100%;
  position: relative;
  width: 0%;

  img {
    height: 100%;
    object-fit: cover;
    transform: scale(1.08);
    width: 100%;
    @include responsive($lg) {
      width: inherit;
    }

    @include responsive($xl) {
      width: 100%;
    }
  }
}

.project_mask {
  background-color: $pink;
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateX(-101%);
  width: 100%;
}
</style>
