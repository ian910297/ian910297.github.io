<style lang="scss">
.brand-logo {
  font-family: 'Monoton', cursive;
}
.nav-wrapper {
  background: white;

  a {
    color: black;
  }
}
</style>

<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo" slot="logo">DEMONIC</a>
      <ul class="right hide-on-med-and-down">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/experience">Experience</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
</script>

