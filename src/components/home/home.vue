<template>
	<div class="home">
		<div class="home-banner-box">
			<img :src="seller.homer" class="home-banner">
		</div>
		<div class="news-box">
    	<yd-rollnotice autoplay="2000">
        <yd-rollnotice-item v-for="(neww,index) in news" :key='index'>{{neww.title}}<span style="color:#F00;">{{neww.activity}}</span></yd-rollnotice-item>
    	</yd-rollnotice>
		</div>
		<p class="margin"></p>
		<div class="icon-box1">
			<p class="v-h3">上牌及服务</p>
			<ul class="icon-maina">
				<li v-for="(iconl,index) in icons">
					<router-link :to="'/'+iconl.urll">
						<img :src="iconl.icona" class="icon">
						<p  class="icon-text">{{iconl.textl}}</p>
					</router-link>
				</li>
			</ul>
			<ul class="icon-maina">
				<li v-for="(iconi,index) in icond">
					<router-link :to="'/'+iconi.urll">
						<img :src="iconi.icona" class="icon">
						<p  class="icon-text">{{iconi.textl}}</p>
					</router-link>
				</li>
			</ul>
		</div>
		<p class="margin"></p>
		<div class="icon-box2">
			<p class="v-h3">年检验车</p>
			<ul class="icon-item">
				<li v-for="(iconj,index) in icone">
					<router-link :to="'/'+iconj.urll">
						<img :src="iconj.icona" class="icon">
						<p  class="icon-text">{{iconj.textl}}</p>
					</router-link>
				</li>
			</ul>
		</div>
		<p class="margin"></p>
		<div class="news-box2">
			<p class="news-box2-title v-h3">
				新闻资讯
				<span class="more-news">
				<router-link to="/newsitem"> 
						查看更多&nbsp;>
				</router-link>
				</span>
			</p>
			<ul class="news2-main">
				<li v-for="(news,index) in newsb">
					<div class="flex-container">
						<div class="news-png-box flex-item">
							<img  :src="news.picture" class="news-pircture">
						</div>
						<div class="new-text-box flex-item">
							<P class="intr">{{news.textl}}</P>
							<div class="news-time">
								<span>{{news.yearl}}</span>
								-<span>{{news.monthl}}</span>
								-<span>{{news.datel}}</span>
							</div>
							<div class="news-read">
								<img src="./home.png/eyes.png" class="eyes">
								<span>阅读(<span>{{news.readl}}</span>)</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div style="height: 0.5rem;"></div>
		<footerv class="footerv"></footerv>
	</div>
</template>
<script>
	import footerv from '../footer/footerv.vue'
	const ERR_OK=0
	export default({
    data(){
      return{
      		seller:{},
      		homer:require('./home.png/home-banner_02.png'),
      		news:[
      			{
      				title:'验车在线报价和下单。',
      				activity:'在线立减，立减20元'
      			},
      			{
      				title:'验车在线报价和下单。',
      				activity:'在线立减，立减20元'
      			}
      		],
      		icons:[
      			{	urll:'a',
      				icona:require('./home.png/icon(2).png'),
      				textl:'新车上牌'
      			},
      			{	urll:'entrust',
      				icona:require('./home.png/icon(3).png'),
      				textl:'车俩外迁'
      			},
      			{	urll:'outside',
      				icona:require('./home.png/icon(4).png'),
      				textl:'车俩迁入'
      			}
      		],
      		icond:[
      			{	urll:'regsiter',
      				icona:require('./home.png/icon(5).png'),
      				textl:'转籍提档'
      			},
      			{	urll:'replace',
      				icona:require('./home.png/icon(6).png'),
      				textl:'补办车牌'
      			},
      			{	urll:'driving',
      				icona:require('./home.png/icon(7).png'),
      				textl:'驾照换证'
      			}
      		],
      		icone:[
      			{	urll:'annual',
      				icona:require('./home.png/icon(8).png'),
      				textl:'6年内免上线年检'
      			},
      			{	urll:'annual',
      				icona:require('./home.png/icon(9).png'),
      				textl:'6年外上线验车'
      			},
      			{	urll:'ent',
      				icona:require('./home.png/icon(10).png'),
      				textl:'代办委托书'
      			},
      			{	urll:'break',
      				icona:require('./home.png/icon(11).png'),
      				textl:'违章查询'
      			},
      			{	urll:'grade',
      				icona:require('./home.png/icon(12).png'),
      				textl:'驾照扣分查询'
      			},
      			{	urll:'p',
      				icona:require('./home.png/icon(13).png'),
      				textl:'服务网点'
      			},
      			{	urll:'mend',
      				icona:require('./home.png/icon(14).png'),
      				textl:'补，换行驶证'
      			},
      			{
      				icona:require('./home.png/icon(15).png'),
      				textl:'二手车服务'
      			},
      			{	urll:'R',
      				icona:require('./home.png/icon(1).png'),
      				textl:'保险'
      			}
      		],
      		newsb:[
      			{	
      				picture:require('./home.png/new-picture.png'),
      				textl:'被”封印“的运动特性 测试西玛2.5LXV',
      				yearl:'2017',
      				monthl:'11',
      				datel:'27',
      				readl:'300'
      			},
      			{	
      				picture:require('./home.png/new-picture.png'),
      				textl:'被”封印“的运动特性 测试西玛2.5LXV',
      				yearl:'2017',
      				monthl:'11',
      				datel:'27',
      				readl:'300'
      			}
      		]
      	}	
     },
  	created(){
  		this.$http.get('/api/seller').then((response) => {
  			response=response.body;
  			console.log(response)
  			if (response.errno===ERR_OK) {
  				console.log('1')
  				this.seller=response.data;
  				console.log(this.seller.name)
  				console.log(this.seller.title)
  			}
  		})
  	},
    methods:{},
    mounted(){},
    components:{
    	footerv
    }
    })
</script>

<style scoped>
	.footerv{
		position:fixed;
		bottom: 0;
		width:100%;
	}
	a{
		display: inline-block;
	}
	.home-banner-box{
		width: 100%;
		height:1.8rem;
	}
	.home-banner{
		width: 100%;
	}
	.news-box{
		padding-left: 0.2rem;
		height: 0.34rem;
		border-bottom: solid 1px #e7e7e7;
	}
	.news-main{
		padding-left: 0.15rem;
	}
	.news-box span{
		line-height: 0.34rem;
		font-size: 0.12rem;
	}
	.news-box span:nth-of-type(1){
		color: #333;
	}
	.news-box span:nth-of-type(2){
		color: #ff0000;
	}
	.margin{
		width:100%;
		height: 0.07rem;
		background: #f5f5f5;
	}
	.icon-box1{
		padding-top:0.13rem;
		width: 100%;
		height:1.95rem;
		font-size: 0.12rem;
	}
	.v-h3{
		font-size: 0.12rem;
		padding-left: 0.15rem;
		margin-bottom: 0.13rem;
		color: #333333;
		font-weight:bold;
	}
	.icon{
		width: 0.45rem;
		height: 0.45rem;
	}
	.icon-maina{
		display:table;
		width:100%;
		height: auto;
	}	
	.icon-maina li{
		text-align:center;
		display:table-cell;
	}
	.icon-text{
		padding-top: 0.1rem;
	}
	.icon-maina:nth-of-type(1){
		margin-bottom: 0.1rem;
	}
	.icon-box2{
		width: 100%;
		height:2.65rem;
		padding-top: 0.13rem;
	}
	.icon-item{
		width: 100%;
		height: auto;
		font-size: 0.12rem;
	}
	.icon-item li{
		float:left;
		width:33.33%;
		margin-bottom: 0.12rem;
		text-align: center;
	}
	.news-box2{
		width: 100%;
		height: 2rem;
		padding-top:0.13rem;
		padding-bottom:0.5rem;
	}
	.more-news{
		display: inline-block;
		float: right;
		color: #999;
		padding-right: 0.15rem;
		font-size: 0.05rem;
	}
	.news2-main{
		width: 100%;
		height: auto;
	}
	.news2-main li{
		width:100%;
		height:0.8rem;
		border-top: solid 1px #eeeeee;
	}
	.flex-container {
    display: -webkit-flex;
    display: flex;
    width: 100%;
    height: 100%;
    font-size: 0.12rem;
	}
	.flex-item {
		height:100%;
	}
	.news-png-box{
		width:34%;
		padding-top: 0.12rem;
		text-align: center;
	}
	.new-text-box{
		width:64%;
		padding-right: 0.17rem;
		position:relative;
	}
	.news-pircture{
		width:0.9rem;
		
	}
	.intr{
		padding-top: 0.12rem;
		width:2.2rem;
		height:auto;
	}
	.news-read{
		display: inline-block;
		position: absolute;
		bottom:8%;
		right: 8%;
		color: #999999;
		font-size:0.09rem;
	}
	.news-time{
		display: inline-block;
		position:absolute;
		bottom:8%;
		left:0;
		color: #999999;
		font-size: 0.09rem;
	}
	.eyes{
		width: 0.16rem;
	}
</style>