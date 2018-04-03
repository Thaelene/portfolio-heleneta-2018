<template>
<a href={{ path: project.link }}>
  <div class="project">
    <div class="project_content">
      <li class="project_count">{{index &lt; 10 ? `0${index + 1}` : index + 1}} / {{projectsLength &lt; 10 ? `0${projectsLength}` : projectsLength}}</li>
      <div class="project_info">
        <h3 class="project_title">{{ project.title }}</h3>
        <span class="project_year">{{ project.year }}</span>
        <p class="project_description">{{ project.description }}</p>
      </div>
      <p class="project_role">{{ project.role }}</p>
    </div>
    <div class="project_image">
      <img :src="`images/${project.image}`">
      <div class="project_link">
        <div class="project_icon">
          <svg id="arrow-icon" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"><title>Arrow icon</title><path d="M71,50a2.37,2.37,0,0,0-.56-1.38l-16-17a2,2,0,0,0-2.83-.07,2,2,0,0,0-.08,2.82L64.37,48H31a2,2,0,0,0,0,4H64.37L51.53,65.62a2.09,2.09,0,0,0,.08,2.83,2,2,0,0,0,2.83-.07l16-17A1.77,1.77,0,0,0,71,50Z"/></svg>
        </div>
      </div>
    </div>
  </div>
  </a>
</template>

<script>
export default {
  props: ['project', 'index', 'projectsLength']
};
</script>

<style scoped lang="scss">

</style>