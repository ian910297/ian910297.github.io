<style lang="scss" scoped>
.header {
  a {
    text-decoration: none;
  }

  .img {
    width: 100px;
    height: 100px;
    background: url(assets/demonic.png);
  }
}
</style>

<template>
  <div class="header">
    <div class="img"></div>
    <router-link to="/">Home</router-link>
    <router-link to="/experience">Experience</router-link>
  </div>
</template>

