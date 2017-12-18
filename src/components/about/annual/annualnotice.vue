<template>
	<div class="annualnotice">
	<p>{{this.notice.one}}</p>
	</div>
</template>
<script>
	export default {
	 	data(){
	 		return{
	 			notice:{
	 				one:'1、已支付的订单，客服确认无法办理后，会在3个工作日之内无条件全额退款',
	 			}
	 		}
	 	}
	 }
</script>
<style scoped>
	.annualnotice{
		padding-left: 0.125rem;
		padding-right: 0.125rem;
	}
	.annualnotice p{
		font-size: 0.12rem;
		line-height: 0.2rem;
		width: 95%;
		margin: 0 auto;
	}
	.annualnotice p:nth-of-type(1){
		margin-top: 0.15rem;
	}
</style>