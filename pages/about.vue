<template>
    <section class="about">
      <div class="container">
        <Header/>
        <div class="about_wrapper">
          <div class="about_portrait">
            <img src="images/helene-ta.png" alt="Hélène Ta's portrait">
          </div>
      
          <div class="about_content">
            <h1 class="about_title">Hello there,</h1>
            <p class="about_description">
              My name is Hélène Ta, a front-end developer and a 3rd year student at <a href="https://www.hetic.net/" target="black" rel="noopener" class="about_link">Hetic</a>. Ex-intern at <a href="https://www.basaltiq.fr" target="black" rel="noopener" class="about_link">Basaltiq</a>, Paris in 2017. I thrive when I’m dealing with new challenges. I’m determined to create smooth experiences and discover new technologies.
            </p>
            <p class="about_description about_important">
              I’m a looking for a 4-month internship abroad from July to October 2018 where we can work together to build rewarding projects.
            </p>
            <nav class="about_socialsList">
              <ul>
                <li><a href="https://github.com/Thaelene" rel="noopener">Github</a></li>
                <li><a href="https://www.instagram.com/tahelene/" rel="noopener">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/helene-ta/" rel="noopener">LinkedIn</a></li>
                <li><a href="https://www.behance.net/helene121001e2" rel="noopener">Behance</a></li>
                <li><a href="http://www.heleneta.com/helenetaCV.pdf" target="blank" rel="noopener">Resume</a></li>
            </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import Header from '~/components/Header.vue';

export default {
  components: {
    Header
  },
  head: {
    title: 'About Hélène Ta'
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.header_logo,
.nav_link {
  color: $black;
}

.about {
  height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
}

.about_wrapper {
  display: flex;
  justify-content: space-between;
  padding: 3vw;
}

.about_portrait {
  max-width: 340px;
  overflow: hidden;

  img {
    filter: grayscale(8%);
    width: 100%;
    height: 100%;
  }
}

.about_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 560px;
  margin-top: 10rem;
}

.about_title {
  color: $pink;
  @include font($avenir-black, 8, 900, 12);
}

.about_description {
  color: $black;
  padding: 2rem 0 0;
  @include font($avenir-medium, 1.6, 500, 2.5);
}

.about_link {
  color: #666;
  font-family: $avenir-black;
  font-weight: 900;
}

.about_important {
  font-weight: 900;
}

.about_socialsList {
  margin: 3vw 0;
  @include font($avenir-black, 1.3, 900, 1.3);

  ul {
    li {
      display: inline-block;
      padding: 0 1.5rem;
    }
  }
}
</style>