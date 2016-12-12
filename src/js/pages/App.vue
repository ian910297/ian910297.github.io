<template>
<div>
  <div class="header">
    <header-bar></header-bar>
  </div>
  <div class="pages">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar'

  export default {
    components: {
      HeaderBar
    }
  }
</script>

<style>

</style>

