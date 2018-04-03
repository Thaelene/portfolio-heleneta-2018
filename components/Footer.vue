<template>
  <footer class="footer">
    <h5 class="footer_contact">Don't be shy, <a href="mailto:hello@heleneta.com" class="footer_link">say hi !</a></h5>
    <nav class="footer_social">
      <ul>
        <li><a href="https://github.com/Thaelene">Github</a></li>
        <li><a href="https://www.instagram.com/tahelene/">Instagram</a></li>
        <li><a href="https://www.linkedin.com/in/helene-ta/">LinkedIn</a></li>
        <li><a href="https://www.behance.net/helene121001e2">Behance</a></li>
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
}

.footer_social {
  margin: 6.4rem 0 2.8rem;

  ul {
    li {
      display: inline-block;
      padding: 0 2rem;
    }
  }
}
</style>