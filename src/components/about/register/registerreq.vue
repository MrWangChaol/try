<template>
	<div class="registernotice">
			<div class="from-pading-a">
				<p>{{this.entmanage.one}}</p>
				<p>{{this.entmanage.two}}</p>	
				<p>{{this.entmanage.three}}</p>
				<p>{{this.entmanage.sitetitle}}</p>	
			</div>
	</div>
</template>

<script>
	export default {
	 	data(){
	 		return{
	 			entmanage:{
	 				one:'1、行驶证原件',
	 				two:'2、交强险副本',
	 				three:'3、非当地注册登记车辆需异地年检委托车',
	 				sitetitle:'4、办理异地年检委托书需携带身份证、行驶证原件及复印件，到车辆注册登记城市车管所开具',
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