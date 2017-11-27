<template>
  <div class="brank-list">
    <dl>
    	<dt>
    		<img src="//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN" />
    	</dt>
    	<dd>
    		<p class="title">日默瓦</p>
    		<p class="describe">复古之名万箱朝拜</p>
    	</dd>
    </dl>
    <dl>
    	<dt>
    		<img src="//img.haimi.com/Fo_3KRGu8XdoqcQ6DbPIJ33aYN3I" />
    	</dt>
    	<dd>
    		<p class="title">膳魔师</p>
    		<p class="describe">百年品牌源自德国</p>
    	</dd>
    </dl>
    <dl>
    	<dt>
    		<img src="//img.haimi.com/Fi35P_akILkjZbVQPEv9EV2IIiZm" />
    	</dt>
    	<dd>
    		<p class="title">猫王</p>
    		<p class="describe">胆机之父匠心之作</p>
    	</dd>
    </dl>
    <dl>
    	<dt>
    		<img src="//img.haimi.com/FofqVnbyUfMblFYalgoLBGfmFasN" />
    	</dt>
    	<dd>
    		<p class="title">Boogie Board</p>
    		<p class="describe">一天5次可用30年</p>
    	</dd>
    </dl>
    <dl>
    	<dt>
    		<img src="//img.haimi.com/Fuqtzw_4g62P_RqlbPzKrSH9ZNZ1" />
    	</dt>
    	<dd>
    		<p class="title">质造</p>
    		<p class="describe">马云也在用的杯子</p>
    	</dd>
    </dl>
    <dl>
    	<dt>
    		<img src="//img.haimi.com/Fi35P_akILkjZbVQPEv9EV2IIiZm" />
    	</dt>
    	<dd>
    		<p class="title">轻生活</p>
    		<p class="describe">只用美国海岛棉</p>
    	</dd>
    </dl>
    <dl>
    	<dt>
    		<img src="//img.haimi.com/FgL9AMUlqLrQSbSJuUnzq8wyq4BE" />
    	</dt>
    	<dd>
    		<p class="title">飞利浦</p>
    		<p class="describe">全球小家电典范</p>
    	</dd>
    </dl>
    <dl>
    	<dt>
    		<img src="//img.haimi.com/FtMK_7-no5zjla20D1zwPNqxzK57" />
    	</dt>
    	<dd>
    		<p class="title">芳新</p>
    		<p class="describe">美国高端洗衣品牌</p>
    	</dd>
    </dl>
    <dl>
    	<dt>
    		<img src="//img.haimi.com/FuBzTD9I1pQR6AiW6fVBL77DNaxQ" />
    	</dt>
    	<dd>
    		<p class="title">imblu</p>
    		<p class="describe">家庭必备收纳神器</p>
    	</dd>
    </dl>
    <dl>
    	<dt>
    		<img src="//img.haimi.com/Fizv0bO-u5h5h3eSdahegBgofQdP" />
    	</dt>
    	<dd>
    		<p class="title">S'well保温杯</p>
    		<p class="describe">星巴克也有在卖</p>
    	</dd>
    </dl>
    <dl>
    	<dt>
    		<img src="//img.haimi.com/Fvz0rLJIVjZ1R5yjJ3jJ07vGi5V5" />
    	</dt>
    	<dd>
    		<p class="title">北鼎</p>
    		<p class="describe">一人一壶一养生</p>
    	</dd>
    </dl>
    <dl>
    	<dt>
    		<img src="//img.haimi.com/FpEmfhbCjbsSVpI9CTFQRYQ8OvqN" />
    	</dt>
    	<dd>
    		<p class="title">微热山丘</p>
    		<p class="describe">台湾最好吃凤梨酥</p>
    	</dd>
    </dl>
    
  </div>
</template>

<script>
export default {
  name: 'brankNav',
  data () {
    return {
    }
  },
  props: ['brankNav']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .page{
    overflow:hidden;
    .brank-list{
    	height:2rem;
    	dl{
    		width:32%;
    		float:left;
    		dt{
    			width:100%;
    			height:70%;
    			img{
    				width:100%;
    				height:100%;
    			}
    		}
    		dd{
    			font-size:.15rem;
    			backgrund:pink;
    			padding:.05rem 0 .1rem 0;
    			p{
    				height:15%;
    			}
    			.describe{
    				font-size:.13rem;
    				color:#999;
    				padding-top:.05rem;
    			}
    		}
    	}
    }
}
</style>
