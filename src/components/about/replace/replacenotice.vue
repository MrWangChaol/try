<template>
	<div class="replacenotice">
		<p>{{this.replacenotice.one}}</p>
		<p>{{this.replacenotice.two}}</p>
		<p>{{this.replacenotice.three}}</p>
		<p>{{this.replacenotice.four}}</p>
		<pre class="notice-txt">




		</pre>
	</div>
</template>
<script>
	export default {
	 	data(){
	 		return{
	 			replacenotice:{
	 				one:'1、车辆必须到场，下单时需填写取送车地址',
	 				two:'2、办理当天车辆需处理完毕所有违章',
	 				three:'3、损坏换领需携带损失证件/拍照原件',
	 				four:'4、已支付的订单，客服确认无法办理后，会在三个工作日内无条件全额退款',
	 			}
	 		}
	 	}
	 }
</script>
<style scoped>
	.replacenotice{
		padding-left: 0.125rem;
		padding-right: 0.125rem;
	}
	.replacenotice p{
		font-size: 0.12rem;
		line-height: 0.2rem;
		width: 95%;
		margin: 0 auto;
	}
	.replacenotice p:nth-of-type(1){
		margin-top: 0.15rem;
	}
</style>