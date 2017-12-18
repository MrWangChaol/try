<template>
<div class="presonal" id="presonal">
	<div class="top-id">
		<div class="id-image">
			<div class="id-imagea">
				<img :src="this.idpicture" class="id-picture">
			</div>
		</div>
		<p class="phone">
			{{this.phonenumber}}
		</p>
	</div>
	<div class="group">
		<ul class="group-item">
			<li>
				<router-link to="/j" style="color: #000000;">
				<span class="icons"></span>
				<span class="my-car">我的爱车</span>
				<span class="icon-right"></span>
				</router-link>
			</li>
			<li>
				<router-link to="/order" style="color: #000000;">
				<span class="icona"></span>
				<span class="my-car">我的订单</span>
				<span class="icon-right"></span>
				</router-link>
			</li>
		</ul>
	</div>
<footerv class="footer"></footerv>
</div>
</template>
<script>
import footerv from '../footer/footerv.vue'
	export default({
		data(){
			return{
				idpicture:require('./presonal.png/renxiang_03.png'),
				phonenumber:'15757111111'
			}
		},
		components:{
    	footerv
    	},
    	methods:{},
    	mounted(){
    		let  heigh=document.getElementById('presonal')
    		let  winHeight = window.innerHeight;
    		heigh.style.height=winHeight+'px'
    		
    	},
	})
</script>
<style scoped>
.presonal{
	background-color: #F5F5F5;
}
.footer{
	position: fixed;
	bottom: 0;
	width:100%;	
}
.top-id{
	width: 100%;
	height: 1.45rem;
	padding-top: 0.3rem;
	background: #37c6c0;
	position: relative;
}
.id-image{
	width: 0.75rem;
	height: 0.75rem;
	border-radius: 0.5rem;
	background: rgba(255,255,255,0.2);
	margin-left: 0.3rem;
	padding-top: 0.05rem;
}
.id-imagea{
	width: 0.65rem;
	height: 0.65rem;
	border-radius:0.5rem;
	margin: 0 auto;
	background:rgba(255,255,255,0.2);
}
.id-picture{
	width: 100%;
	height:100%;
}
.phone{
	position: absolute;
	top:45%;
	left:35%;
	color: #FFFFFF;
	font-size:0.15rem;
}
.group{
	width:100%;
}
.group-item{
	width:100%;
	background-color: #FFF;
}
.group-item li{
	margin: 0 auto;
	width:92%;
	height: 0.45rem;
	border-bottom: 0.01rem #F5F5F5 solid;
	position:relative;
	line-height: 0.45rem;
}
.icons{
	display: inline-block;
	height: 0.17rem;
	width: 0.19rem;
	background:url(presonal.png/picona.png) no-repeat;
	background-size:cover;
	margin-top: 0.13rem;
}
.icona{
	display: inline-block;
	height: 0.17rem;
	width: 0.19rem;
	background:url(presonal.png/piconb.png) no-repeat;
	background-size:cover;
	margin-top: 0.13rem;
}
.icon-right{
	display: inline-block;
	position: absolute;
	height: 0.15rem;
	width: 0.09rem;
	background:url(presonal.png/right.png)no-repeat;
	background-size:cover;
	margin-top: 0.13rem;
	right: 0;
}
.my-car{
	position: absolute;
	left:10%;
}
</style>