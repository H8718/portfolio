<template>
  <div id="site">
    <Banner />
  </div>
</template>

<script>
import Banner from './components/Banner';

export default {
  name: 'app',
  components: {
    Banner
  }
}
</script>

<style lang="scss" scoped>
#site {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
