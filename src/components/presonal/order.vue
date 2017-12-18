<template>
	<div class="order">
		<table class="my-table">
			<tr style="height: 0.25rem; background-color: #ebebeb; color: #999999;">
				<td>时间</td>
				<td>类目</td>
				<td>金额</td>
				<td>状态</td>
			</tr>
			<tr v-for="(cc,index) in order" class="tri">
				<td><span>{{cc.year}}</span>-<span>{{cc.month}}</span>-<span>{{cc.day}}</span></td>
				<td>{{cc.cla}}</td>
				<td>{{cc.price}}</td>
				<td>{{cc.state}}</td>
			</tr>
		</table>
	</div>
</template>
<script>
		export default({
			data(){
				return{
					order:[
						{
							year:'2017',
							month:'11',
							day:'11',
							cla:'新车上牌',
							price:'500',
							state:'进行中'
							
						},
						{
							year:'2017',
							month:'11',
							day:'11',
							cla:'新车上牌',
							price:'500',
							state:'进行中'
							
						},
						{
							year:'2017',
							month:'11',
							day:'11',
							cla:'新车上牌',
							price:'500',
							state:'进行中'
							
						}
					]
				}
			}
		})
</script>
<style scoped>
	.my-table{
		width: 100%;
	}
	.my-table tr{
		width: 100%;
	} 
	.my-table tr td{
		width: 20%;
		text-align: center;
		
	}
	.tri{
		height: 0.5rem;
		width: 100%;
		text-align: center;
		border: solid 0.01rem #f5f5f5;
	}
</style>