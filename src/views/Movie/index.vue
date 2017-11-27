<template>
  <div class="page">
    <HeaderBar v-title="title">
      <!-- <SelectCity slot="left-group" v-model="cityId"></SelectCity> -->
      <SelectCity slot="left-group" :cityId.sync='cityId'></SelectCity>
    </HeaderBar>
    <div class="content" v-show="tabFlg == 0">
      <TabMenu slot="right-group" @tabList='tabList'></TabMenu>
      <Banner></Banner>
      <MovieList></MovieList>
    </div>
    <div class="content" v-show="tabFlg == 1">
      <TabMenu slot="right-group" @tabList='tabList'></TabMenu>
      222222
    </div>
    <div class="content" v-show="tabFlg == 2">
      <TabMenu slot="right-group" @tabList='tabList'></TabMenu>
      3333333
    </div>
    <div class="content" v-show="tabFlg == 3">
      <TabMenu slot="right-group" @tabList='tabList'></TabMenu>
      44444444
    </div>
    <div class="content" v-show="tabFlg == 4">
      <TabMenu slot="right-group" @tabList='tabList'></TabMenu>
      555555555
    </div>
    <!--<div class="content" v-show="tabFlg == 5">
      <TabMenu slot="right-group" @tabList='tabList'></TabMenu>
      6666666
    </div>
    <div class="content" v-show="tabFlg == 6">
      <TabMenu slot="right-group" @tabList='tabList'></TabMenu>
      77777777
    </div>
    <div class="content" v-show="tabFlg == 7">
      <TabMenu slot="right-group" @tabList='tabList'></TabMenu>
      8888888
    </div>
    <div class="content" v-show="tabFlg == 8">
      <TabMenu slot="right-group" @tabList='tabList'></TabMenu>
      999999999
    </div>-->
    <!--<div class="content" v-show="tabFlg == 9">
      <TabMenu slot="right-group" @tabList='tabList'></TabMenu>
      01100110100101
    </div>
    <div class="content" v-show="tabFlg == 10">
      <TabMenu slot="right-group" @tabList='tabList'></TabMenu>
      121212121212
    </div>-->
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'
import MovieList from '@/components/MovieList'
import MovieList2 from '@/components/MovieList2'
import SelectCity from '@/components/SelectCity'
import TabMenu from './components/TabMenu'
import Banner from './components/Banner'
import ProductList from '@/components/ProductList'

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
    HeaderBar,
    TabMenu,
    Banner,
    FooterBar,
    MovieList,
    SelectCity,
    ProductList
  },
  methods: {
    scrollLoad () {
      if( !this.keepAlive ) return;
      if( this.flg ) {
        this.page += 1;
        this.getMovieList();
      }
    },
    tabList (index) {
      this.tabFlg = index
    },

    selectCity (data) {
      this.cityId = data[0];
    },

    getMovieList () {
      this.flg = false
      this.$axios.get('/api/queryAdvertise', {
        params: {
          cityId: 12345,
          page: this.page,
          pageSize: this.pageSize
        }
      }).then( (response) => {
        this.movieList = this.movieList.concat(response.data.data)
        this.flg = true
      }).catch((error) => {
        console.log(error);
        this.flg = true
      })
    }
  },
  watch: {
    '$route': (to, from) => {
      //console.log(to, from)
    },
    'cityId': function(){
      console.log( 'ssss' )
      this.getMovieList()
    }
  },
  created () {
    console.log(this.$route.params)
    this.getMovieList()
  },

  activated () {
    console.log('组件启用')
    this.keepAlive = true;
  },

  deactivated () {
    this.keepAlive = false;
    console.log( '组件停用' )
  },
  destroyed () {
    console.log( '销毁首页' )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page{
    font-size: 20px;
    over-flow:hidden;
}
</style>
