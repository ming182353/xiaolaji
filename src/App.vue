<template>

  <div id="app">
    <keep-alive include="movie">
    <router-view></router-view>
    </keep-alive>
  </div>

</template>

<script>
import '@/static/css/reset.css'
import '@/static/css/swiper-3.3.1.min.css'

export default {
  name: 'app'
}
</script>

<style>
#app {
  
}
</style>
