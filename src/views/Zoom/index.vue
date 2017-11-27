<template>
  <div class="page">
    <HeaderBar v-title="title">
      <SelectCity slot="left-group" @selectCity="selectCity"></SelectCity>
    </HeaderBar>
    sss
    <div style="height:1000px;"></div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'
import HeaderBar from '@/components/HeaderBar'
import SelectCity from '@/components/SelectCity'

export default {
  name: 'hello',
  data () {
    return {
      title: ''
    }
  },
  components: {
    FooterBar,
    HeaderBar,
    SelectCity
  },
  created () {
    setTimeout(() => {
      this.title = '购物车'
    }, 2000)
  },
  methods: {
    selectCity (data) {
      console.log(data)
    }
  },
  destroyed () {
    console.log( '销毁' )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page{
    font-size: 20px;
    
}
</style>
