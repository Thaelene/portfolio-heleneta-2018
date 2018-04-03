<template>
    <section class="projects">
      <div class="container">
        <div class="label">
          <h4 class="label_title">Projects</h4>
          <p class="label_subtitles">Selected works</p>
      </div>
      <ul>
        <Project 
        v-for="(project, index) in projects" 
        :key="project.title"
        :project="project"
        :index="index"
        :projectsLength="projects.length"
        />
      </ul>
      </div>
    </section>
</template>

<script>
import projects from '~/static/projects.json';
import Project from '~/components/Project.vue';

export default {
  components: {
    Project
  },
  data({ params }) {
    return {
      projects
    };
  },
  mounted() {
    console.log(this.projects);
  }
};
</script>

<style scoped lang="scss">
.label {
  font-size: 1.4rem;
  margin-top: 13rem;
}

.label_title {
  display: inline-block;
  font-weight: 900;
  letter-spacing: 0.13rem;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 2.1rem;
    height: 0.3rem;
    background-color: #cdcdcd;
    position: absolute;
    right: calc(0-3.3rem);
    top: 50%;
  }
}

.label_subtitles {
  @include font($acaslonpro-regular, 1.4, 400, 2.1);
  display: inline-block;
  letter-spacing: 0.13rem;
  margin-left: 4.6rem;
}
</style>