<template>
	<div class="annualmanage">
			<div class="from-pading-a">
				<p>{{this.entmanage.one}}</p>
				<p>{{this.entmanage.two}}</p>	
				<p>{{this.entmanage.three}}</p>		
			</div>
			<div class="from-pading-b">
				<p>{{this.entmanage.sitetitle}}</p>
				<p>收件人：{{this.entmanage.receiver}} </p>	
				<p>联系电话：{{this.entmanage.plane}}</p>	
				<p>邮寄地址：{{this.entmanage.address}}</p>	
				<p>邮政编码：{{this.entmanage.zip}}</p>
			</div>
	</div>
</template>
<script>
	 export default {
	 	data(){
	 		return{
	 			entmanage:{
	 				one:'车辆无未处理违章记录',
	 				two:'行驶证原件&复印件',
	 				three:'企业名下车辆需营业执照副本',
	 				sitetitle:'快递地址',
	 				receiver:'奔跑的小牛',
	 				plane:'400-454-4545',
	 				address:'杭州市什么区什么什么街道232号什么什么',
	 				zip:'332000'
	 			}
	 		}
	 	}
	 }
</script>
<style scoped>
	.from-pading-a{
		padding-left: 0.15rem;
		padding-right: 0.15rem;
		padding-top: 0.2rem;
	}
	.from-pading-a p{
		line-height: 0.2rem;
		font-size: 0.12rem;
	}
	.from-pading-b{
		padding-left: 0.15rem;
		padding-right: 0.15rem;
		margin-top: 0.25rem;
	}
	.from-pading-b p{
		line-height: 0.2rem;
		font-size: 0.12rem;
	}
</style>