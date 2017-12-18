<template>
	<div class="serve" id="serve">
		<p class="serve-title">
			服务网点
		</p>
		<ul class="serve-item">
			<li v-for="(sites,index) in site">
				<div class="flex-container">
					  <div class="flex-item">
					  	<span class="number">{{sites.num}}</span>
					  </div>
					  <div class="flex-item">
					  	<p class="serve-list-title">{{sites.title}}</p>
					  	<p class="serve-list-gps">（<span>{{sites.address}}</span>）</p>
					  </div>
				</div>
			</li>
		</ul>
		<div class="serve-footer">
			<div class="flex-container">
				<div class="flex-item flfoot">
					<div class="bb">
						<p>热线电话：<span>{{message.telphone}}</span></p>
						<p>传真：<span>{{message.fax}}</span></p>
						<p>网站：<span>{{message.website}}</span></p>
					</div>	
				</div>
				<div class="flex-item flfoot">
					<div class="cc">
						<p>热线电话：<span>{{message.telphonea}}</span></p>
						<p>服务QQ：<span>{{message.qq}}</span></p>
						<p>{{message.telphonea}}</p>
					</div>
				</div>
			</div>	
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				site:[
					{
						num:'1',
						title:'虹口区汶水东路937号，进中环广粤路出口',
						address:'适合虹口  杨浦 闸北 宝山用户'
						
					},
					{
						num:'2',
						title:'虹口区汶水东路937号，进中环广粤路出口',
						address:'适合虹口  杨浦 闸北 宝山用户'
					},
					{
						num:'3',
						title:'虹口区汶水东路937号，进中环广粤路出口',
						address:'适合虹口  杨浦 闸北 宝山用户'
					},
					{
						num:'4',
						title:'虹口区汶水东路937号，进中环广粤路出口',
						address:'适合虹口  杨浦 闸北 宝山用户'
					},
					{
						num:'5',
						title:'虹口区汶水东路937号，进中环广粤路出口',
						address:'适合虹口  杨浦 闸北 宝山用户'
					},
				],
				message:{
					telphone:'4008-91-4040',
					telphonea:'021-69718894',
					fax:'021-69718687',
					website:'www.shanghaiyanche.com',
					get:'电话预约免费上门取件',
					qq:'2436672137'
				}
			}
		},
		methods:{
			
		},
		mounted(){
				let heigh=document.body.scrollHeight
				console.log(heigh)
				let id=document.getElementById("serve")
				id.style.height=heigh+'px'
    	}	

	}
</script>

<style scoped>
	.serve{
		background-color: #f5f5f5;
		width: 100%;
	}
	.serve-title{
		padding-top: 0.1rem;
		padding-bottom: 0.1rem;
		margin-left: 0.3rem;
		font-weight: 600;
	}
	.serve-item{
		width: 100%;
	}
	.serve-item li{
		background-color: #FFF;
		width:88%;
		margin: 0 auto;
		height: 0.75rem;
		border-radius: 0.05rem;
		box-shadow: 0.0rem 0.05rem 0.2rem #dedddc;
		margin-top: 0.2rem;
	}
	.serve-item li:nth-of-type(1){
		margin-top: 0.05rem;
	}
	.number{
		display: inline-block;
		width: 0.45rem;
		height: 0.45rem;
		background-color: #63a0f1;
		border-radius: 0.03rem;
		margin-left:0.15rem;
		margin-top: 0.15rem;
		text-align: center;
		font-size:0.2rem;
		line-height: 0.45rem;
		color: #FFFFFF;
	}
	.flex-container {
    display: -webkit-flex;
    display: flex;
	}
	.serve-list-title{
		margin-top: 0.15rem;
		margin-left:0.2rem;
		margin-bottom:0.2rem;
	}
	.serve-list-gps{
		margin-left:0.2rem;
	}
	.serve-footer{
		width: 100%;
		height: 0.5rem;
		position: fixed;
		bottom: 0;
	}
	.flfoot{
		width:50%;
		height: auto;
		position: relative;
	}
	.flfoot p{
		line-height:0.15rem;
		height: auto;
	}
	.bb{
		margin-left:0.09rem;
	}
	.cc{
		position: absolute;
		right:9%;
	}
</style>