<style>
  html {
    font-family: 'Abril Fatface', cursive;
  }
</style>

<template>
<div>
  <div class="header">
    <header-bar></header-bar>
  </div>
  <div class="pages">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar'
  import Footer from '../components/Footer'

  export default {
    components: {
      'header-bar': HeaderBar,
      'Footer': Footer
    }
  }
</script>

