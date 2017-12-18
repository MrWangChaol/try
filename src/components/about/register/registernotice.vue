<template>
	<div class="registernotice">
		<p>{{this.notice.one}}</p>
		<p>{{this.notice.two}}</p>
	</div>
</template>
<script>
	export default {
	 	data(){
	 		return{
	 			notice:{
	 				one:'1、办理业务前需先处理完毕车辆的所有违章',
	 				two:'2、已支付的订单，客服确认无法办理后，会在3个工作日之内无条件全额退款',
	 			}
	 		}
	 	}
	 }
</script>
<style scoped>
	.registernotice{
		padding-left: 0.125rem;
		padding-right: 0.125rem;
	}
	.registernotice p{
		font-size: 0.12rem;
		line-height: 0.2rem;
		width: 95%;
		margin: 0 auto;
	}
	.registernotice p:nth-of-type(1){
		margin-top: 0.15rem;
	}
</style>