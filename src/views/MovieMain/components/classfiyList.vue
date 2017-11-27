<template>
  <main class="classify-list">
      <dl>
        <dt>
          <img src="//img.haimi.com/FloxuBkDf7JLo-AtEqLGRRnhAxJn" />
        </dt>
        <dd>
          <a href="#">面膜</a>
          <a href="#">面霜乳液</a>
          <a href="#">眼霜</a>
          <a href="#">精华</a>
          <a href="#">爽肤水</a>
          <a href="#">眼霜</a>
          <a href="#">精华</a>
          <a href="#">爽肤水</a>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="//img.haimi.com/FoXDKmO-JoZqbHyGfCcOQFeb0Jit" />
        </dt>
        <dd>
          <a href="#">毛巾</a>
          <a href="#">雨具</a>
          <a href="#">摆件</a>
          <a href="#">收纳</a>
          <a href="#">洗衣</a>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="//img.haimi.com/FgHw-Qt_o8Dpt6Xj9Yq7TXuldwZ6" />
        </dt>
        <dd>
          <a href="#">杯壶</a>
          <a href="#">锅具</a>
          <a href="#">刀铲</a>
          <a href="#">餐具</a>
          <a href="#">其他</a>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="//img.haimi.com/FqdLiXEI16k6T2WEivYT7NhZYgGD" />
        </dt>
        <dd>
          <a href="#">玩具</a>
          <a href="#">奶粉</a>
          <a href="#">尿裤</a>
          <a href="#">喂养</a>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="//img.haimi.com/FoXDKmO-JoZqbHyGfCcOQFeb0Jit" />
        </dt>
        <dd>
          <a href="#">手提包</a>
          <a href="#">钱包</a>
          <a href="#">拉杆箱</a>
          <a href="#">收纳箱</a>
          <a href="#">双肩包</a>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="///img.haimi.com/Frx1nTQbp06lG2ecUpC87lf5ii53" />
        </dt>
        <dd>
          <a href="#">吸尘器</a>
          <a href="#">电饭煲</a>
          <a href="#">电动牙刷</a>
          <a href="#">剃须刀</a>
          <a href="#">空气净化器</a>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="///img.haimi.com/Frx1nTQbp06lG2ecUpC87lf5ii53" />
        </dt>
        <dd>
          <a href="#">吸尘器</a>
          <a href="#">电饭煲</a>
          <a href="#">电动牙刷</a>
          <a href="#">剃须刀</a>
          <a href="#">空气净化器</a>
        </dd>
      </dl>
    </main>
</template>

<script>
export default {
  name: 'classfiyList',
  data () {
    return {
    }
  },
  props: ['classfiyList']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .page{
    font-size: 20px;
    overflow:hidden;
    text-align:center;
    .classify-list{
      dl{
        dt{
          height:1.3rem;
          background:pink;
          img{
            width:100%;
            height:100%;
          }
        }
        dd{
          margin-bottom:.2rem;
          a{
            display:inline-block;
            padding:.05rem .1rem;
            border:1px solid #ccc;
            margin:.1rem 0 0 .1rem;
            font-size:.14rem;
            color:#333;
          }
        }
      }
    }
}
</style>
