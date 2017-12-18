<template>
	<div class="notice">
		<p>{{this.notice.one}}</p>
		<p>{{this.notice.two}}</p>
		<p>{{this.notice.three}}</p>
		<p>{{this.notice.four}}</p>
		<p>{{this.notice.five}}</p>
		<p>{{this.notice.six}}</p>
		<p>{{this.notice.seven}}</p>
		<p>{{this.notice.eight}}</p>
	</div>
</template>
<script>
	 export default {
	 	data(){
	 		return{
	 			notice:{
	 				one:'1、车辆购买方需到现场',
	 				two:'2、车辆需到场，办理当天车辆不要限号',
	 				three:'3、办理业务前需先处理完毕车辆的所有违章',
	 				four:'4、因车辆问题产生的额外费用需车主自行承担并单独支付',
	 				five:'5、请核对办理外迁提档所需原车主证件以及车辆证件、新车主证件。',
	 				six:'6、车辆需符合迁入城市的排放标准，具体标准请联系迁入地车管所核实。',
	 				seven:'7、原车主可选择由我方代驾到现场，代驾范围限北京5环内，其他城市地区需车主驾车到现场。',
	 				eight:'8、已支付的订单，客服确认无法办理后，会在3个工作日之内无条件全额退款。'
	 			}
	 		}
	 	}
	 }
</script>
<style scoped>
	.notice{
		padding-left: 0.125rem;
		padding-right: 0.125rem;
	}
	.notice p{
		font-size: 0.12rem;
		line-height: 0.2rem;
		width: 95%;
		margin: 0 auto;
	}
	.notice p:nth-of-type(1){
		margin-top: 0.15rem;
	}
</style>