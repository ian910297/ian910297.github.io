<template>
  <footer class="page-footer grey darken-3">
    <div class="footer-copyright">
      <div class="container">
        &copy;2016-{{ year }} Chi Chung Yi, All Rights Reserved
      </div>
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

