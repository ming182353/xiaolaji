<template>
  <div class="page">
    <div class="content" v-show="tabFlg == 0">
      <TabMenu slot="right-group" @tabList='tabList'></TabMenu>
      <classfiyList></classfiyList>
    </div>
    <div class="content" v-show="tabFlg == 1">
      <TabMenu slot="right-group" @tabList='tabList'></TabMenu>
      <brankNav></brankNav>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'
import TabMenu from './components/TabMenu'
import brankNav from './components/brankNav'
import classfiyList from './components/classfiyList'

export default {
  name: 'movie',
  data () {
    return {
      title: '商城',
      tabFlg: 0,
      movieList: [],
      cityId: 0,
      page: 0,
      pageSize: 10,
      flg: true,
      keepAlive: true
    }
  },
  components: {
    TabMenu,
    brankNav,
    classfiyList,
    FooterBar
  },
  methods: {
    tabList (index) {
      this.tabFlg = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .page{
    font-size: 20px;
    overflow:hidden;
    text-align:center;
  }  
</style>
