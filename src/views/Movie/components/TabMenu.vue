<template>
  <nav class="tab-menu">
    <a 
        v-for="(item, index) in menuList"
        href="javascript:;" 
        :class="{active: isActive == index}" 
        @click="tabClick(index)"
        :key="index"
    >{{item}}</a>
  </nav>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      isActive: 0,
      menuList: ['推荐', '居家', '美妆', '个护', '箱包']
    }
  },
  methods: {
    tabClick (index) {
      this.isActive = index
      this.$emit('tabList', index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.tab-menu{
      margin-top:.4rem;
      background:#fff;
    a{
        display: inline-block;
        height: 40px;
        line-height: 40px;
        font-size: .14rem;
        position: relative;
        text-align: center;
        color: #50505a;
        text-decoration: none;
        padding:0 0.07rem;
        margin:0 0.07rem;
        position: relative;
        // background:green;
        &:after{
            content: '';
            display: block;
            height: 0.02rem;
            width: 100%;
            background: #fff;
            position: absolute;
            bottom:.04rem;
            left: 0;
        }
        &.active{
            color: #ff4d64;
            &:after{
                background: #ff4d64;
            }
        }
    }
}
</style>
