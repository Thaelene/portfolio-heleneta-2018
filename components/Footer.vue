<template>
  <footer class="footer">
    <h5 class="footer_contact">Don't be shy, <a href="mailto:hello@heleneta.com" class="footer_link">say hi !</a></h5>
    <nav class="footer_social">
      <ul>
        <li><a href="https://github.com/Thaelene" rel="noopener">Github</a></li>
        <li><a href="https://www.instagram.com/tahelene/" rel="noopener">Instagram</a></li>
        <li><a href="https://www.linkedin.com/in/helene-ta/" rel="noopener">LinkedIn</a></li>
        <li><a href="https://www.behance.net/helene121001e2" rel="noopener">Behance</a></li>
      </ul>
    </nav>
    <p class="footer_bye">See you soon</p>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  @include font($avenir-medium, 2, 500, 3);
  background-color: $black;
  color: #666;
  padding: 10.3rem 0 6.3rem;
  text-align: center;
}

.footer_contact {
  font-size: 2.8rem;
  color: $white;
}

.footer_link {
  text-decoration: underline;
  position: relative;

  &:before {
    content: '';
    background-color: $pink;
    color: $pink;
    display: block;
    height: 2px;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 3rem;
    white-space: nowrap;
    width: 0%;
    will-change: width;
    z-index: 2;
    transition: width 0.4s 0.3s;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
}

.footer_social {
  margin: 6.4rem 0 2.8rem;

  ul {
    li {
      padding: 0 2rem;

      @include responsive($md) {
        display: inline-block;
      }
    }
  }
}
</style>