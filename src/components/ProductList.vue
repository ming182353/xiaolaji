<template>
  <div class='index-product'>
    <div class="product-list">
      <div class="h2-title">大家都在买</div>
      <div class="list-content">
      <a href="#">
        <img src="//img.haimi.com/Fn1c4f4IxmYZfhVuis7Y5C955mCg?imageView2/1/w/375/h/375" />
        <p class="describe">【9月底发货】SANTEN参天 FX银装眼药水 12ml*3瓶</p>
        <p class="price">￥88.00</p>
      </a>
      <a href="#">
        <img src="//img.haimi.com/FpxuUhB77PBQlsX9RfPvs8l_0R2n?imageView2/1/w/375/h/375" />
        <p class="describe">【9月底发货】SANTEN参天 FX银装眼药水 12ml*3瓶</p>
        <p class="price">￥88.00</p>
      </a>
      <a href="#">
        <img src="//img.haimi.com/FvHz7isqRMnSusqDLmNwqUaDhzFF?imageView2/1/w/375/h/375" />
        <p class="describe">【9月底发货】SANTEN参天 FX银装眼药水 12ml*3瓶</p>
        <p class="price">￥88.00</p>
      </a>
      <a href="#">
        <img src="//img.haimi.com/FqNNdecuU6p3pKOS5a-Yf9f9R6G7?imageView2/1/w/375/h/375" />
        <p class="describe">【9月底发货】SANTEN参天 FX银装眼药水 12ml*3瓶</p>
        <p class="price">￥88.00</p>
      </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data () {
    return {
    }
  },
  props: ['ProductList']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .page{
    .product-list{
      margin-top:.1rem;
      height:auto;
      .list-content{
        .h2-title{
          font-size:.14rem;
          text-align:center;
          line-height:.45rem;   
        }
        a{
          width:48%;
          height:2.5rem;
          float:left;
          margin-right:.05rem;
          img{
            width:100%;
            height:76%;
          }
          p{
            height:10%;
            font-size:.14rem;
            color:#242424;
          }
          .describe{
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
          }
          .price{
            color:#666;
          }
        }
      }
    }
  }
  
</style>
