<template>
	<div class="news-item">
		<ul class="news2-main">
				<li v-for="(news,index) in newss">
					<lin
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
								<img src="../home/home.png/eyes.png" class="eyes">
								<span>阅读(<span>{{news.readl}}</span>)</span>
							</div>
						</div>
					</div>
				</li>
		</ul>
	</div>
</template>

<script>
	export default({
    data(){
      return{
      		seller:{},
      		newss:[
      			{	
      				picture:require('../home/home.png/new-picture.png'),
      				textl:'被”封印“的运动特性 测试西玛2.5LXV',
      				yearl:'2017',
      				monthl:'11',
      				datel:'27',
      				readl:'300'
      			},
      			{	
      				picture:require('../home/home.png/new-picture.png'),
      				textl:'被”封印“的运动特性 测试西玛2.5LXV',
      				yearl:'2017',
      				monthl:'11',
      				datel:'27',
      				readl:'300'
      			},
      			{	
      				picture:require('../home/home.png/new-picture.png'),
      				textl:'被”封印“的运动特性 测试西玛2.5LXV',
      				yearl:'2017',
      				monthl:'11',
      				datel:'27',
      				readl:'300'
      			},
      			{	
      				picture:require('../home/home.png/new-picture.png'),
      				textl:'被”封印“的运动特性 测试西玛2.5LXV',
      				yearl:'2017',
      				monthl:'11',
      				datel:'27',
      				readl:'300'
      			}
      		]
      			
      	}	
     }
  })
</script>

<style scoped>
	.news-item{
		width: 100%;
		border-bottom: solid 0.01rem #dedede;
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
		font-size: 0.14rem;
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