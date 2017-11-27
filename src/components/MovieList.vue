<template>
  <div class='index-product'>
    
    <div class="product-nav">
      <ul>
        <li>
          <img src="//img.haimi.com/FuPMz-_M6cc-EKholObO_ec5niTe">
          <span>新人专享</span>
        </li>
        <li>
          <img src="//img.haimi.com/Fvxjun-u3MAa7vGJnbSiCXlFtepB">
          <span>领取积分</span>
        <li>
          <img src="//img.haimi.com/Fi2HlhU6SOQ0GqagPJ1whoJAzg57">
          <span>邀请有礼</span>
        </li>
        <li>
          <img src="//img.haimi.com/Ft0Vx786oXJADIPEamFGp5vew5KY">
          <span>每周新品</span>
        </li>
      </ul>
    </div>
    <div class="product-details">
      <div class="details-one">
        <a href="#"><img src="//img.haimi.com/FgIrSmcEeh_3zG7YZIxHiaQfEuto" /></a>
      </div>
      <div class="details-two">
        <a href="#"><img src="//img.haimi.com/Fnzdw3QArWLTW1IhOMkfguiMD0Ks" /></a>
      </div>
    </div>
    <div class="product-selection">
      <div class="h2-title">严选产品</div>
      <div class="h2-content">
        <div class="content-left">
          <a href="#"><img src="//img.haimi.com/Fpj_yvmXlvrmg_J_KKQHnAvx_ogA" /></a>
          <a href="#"><img src="//img.haimi.com/FpxXPuCFqQ5Zi7X7wZU5Qxsv8CQs" /></a>
        </div>
        <div class="content-right">
          <a href="#"><img src="//img.haimi.com/FktreYFzuBx2gLTw9V9_0s4GGch6" /></a>
        </div>
      </div>
    </div>
    <div class="product-recommend">
      <div class="h2-title">推荐好物</div>
      <div class="recommend-content">
        <a href="#"><img src="//img.haimi.com/Frz_GPy8Jw6s9k1BD-7oMlg4aw-6" /></a>
        <a href="#"><img src="//img.haimi.com/FvIiZyy9v7fJng1tY-11tHXRD7ZU" /></a>
        <a href="#"><img src="//img.haimi.com/FiYaccwV02QtUfFVTHuJ3L8sWKdu" /></a>
        <a href="#"><img src="//img.haimi.com/Fgzoc-je_PRcfqoB-9CMCQVTRQpt" /></a>
        <a href="#"><img src="//img.haimi.com/FgdGtaLRwCovhYwy9_KCjfZmOzMx" /></a>
        <a href="#"><img src="//img.haimi.com/Fq9vYBCjORF0qJZQl8jHhOed3KnC" /></a>
        <a href="#"><img src="//img.haimi.com/FnMGXi5SqpNGwunxy9KQAzG4fD1o" /></a>
        <a href="#"><img src="//img.haimi.com/FsRbXjc3acEQEv-GPgisegGLgquG" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  data () {
    return {
    }
  },
  props: ['movieList']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .index-product{
    .product-nav{
      ul{
        display:flex;
        text-align:center;
        background:#fff;
        li{
          padding-bottom:.1rem;
          img{
            width:.8rem;
            height:.5rem;
          }
          span{
            font-size:.14rem;
            color:#333;
          }
        }
      }
    }
    .product-details{
      over-flow:hidden;
      margin-top:.1rem;
      .details-one, .details-two{
        width:100%;
        height:1.1rem;
        img{
          width:100%;
          height:100%;
        }
      }
    }
    .product-selection{
      margin-top:.1rem;
      background:#fff;
      .h2-title{
        font-size:.14rem;
        text-align:center;
        line-height:.45rem;   
      }
      .h2-content{
        height:2rem;
        display:flex;
        .content-left{
          flex:1;
          a{
            wifth:100%;
            height:1rem;
            img{
              width:100%;
              height:100%;
            }
          }
        }
        .content-right{
          flex:1;
          a{
            img{
              width:100%;
              height:100%;
            }
          }
        }
      }
    }
    .product-recommend{
      background:#fff;
      height:auto;
      margin-top:.5rem;
      .h2-title{
        font-size:.14rem;
        text-align:center;
        line-height:.45rem;
      }
      .recommend-content{
          a{
            width:50%;
            height:1.2rem;
            float:left;
            img{
              width:100%;
              height:100%;
            }
          }
      }
    }
  }
</style>
