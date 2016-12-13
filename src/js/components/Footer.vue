<style lang="scss" scoped>
.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
}
</style>

<template>
  <footer class="page-footer">
    <div class="container"></div>
    <div class="footer-copyright">
      &copy;2016-{{ year }} Chi Chung Yi, All Rights Reserved
    </div>
  </footer>
</template>

<script>
var currentYear = new Date().getFullYear()

export default {
  data: function () {
    return {
      year: currentYear
    }
  }
}
</script>

