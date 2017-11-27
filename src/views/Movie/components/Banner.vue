<template>
    <swiper :options="swiperOption" ref="mySwiper" class="movie-banner">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in banners" :key="index">
            <img :src="item" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      banners: [
        '//img.haimi.com/FpzEfBA56Z9PDD39jK4zUU8XCs9a',
        '//img.haimi.com/Fo2U1Rz9yClEpWce1jo1aATcduFH',
        '//img.haimi.com/FjCgVMdy6SexvcnknMEMBS0Moj-T',
        '//img.haimi.com/FhW3s7fOqKfPWOrrtb4OfKeM6PET',
        '//img.haimi.com/FktHEInxZc8d852r7MuRQSyzyvXH',
        '//img.haimi.com/Fs92pQSI01cBZTrpSHDcUlehC9ee',
        '//img.haimi.com/FlMjoZI2DHhNfpXy8LDmrGZOa4L0'
      ],
      swiperOption: {
        autoplay: 5000,
        initialSlide: 1,
        loop: true,
        pagination: '.swiper-pagination',
        onSlideChangeEnd: swiper => {
          //console.log('onSlideChangeEnd', swiper.realIndex)
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.movie-banner{
  over-flow:hidden;
    .swiper-slide{
        img{
            display: block;
            width: 100%;
        }
    }
}
</style>
