<template>
	<div class="newscar">
		<div class="newscar-banner">
		<img src="./about.png/newscar_02.png" class="newscar-banner-png">
		</div>
		<div class="title-bannera">
			<span></span>
			<img src="./about.png/titlea.png" class="title-png">
			<span></span>
		</div>
		<div class="newscar-detailde">
			<ul class="pice">
				<li>
					<table>
						<tr class="tr" v-for="(stat,index) in picerk">
							<td>{{stat.city}}</td>
							<td>{{stat.sign}}</td>
							<td><span>价格</span><span>{{stat.price}}</span></td>
							<td>{{stat.out}}</td>
							<td>{{stat.hint}}</td>
						</tr>
					</table>
				</li>
			</ul>
		</div>
		<div class="title-bannera">
			<span></span>
			<img src="./about.png/title.png" class="title-png">
			<span></span>
		</div>
		<div class="newscar-detailde">
			<ul class="pice">
				<li>
					<table>
						<tr class="tr" v-for="(stat,index) in outside">
							<td>{{stat.city}}</td>
							<td>{{stat.sign}}</td>
							<td><span>价格</span><span>{{stat.price}}</span></td>
							<td>{{stat.out}}</td>
							<td>{{stat.hint}}</td>
						</tr>
					</table>
				</li>
			</ul>
		</div>
		<p class="wenxi">温馨提示；由于上外地牌照的变动性大，政策各地变化较快，网站信息不是能及时更新
		请原谅。如有什么问题请电话沟通，谢谢大家的理解与支持。</p>
		<p class="wenxi">网址：</p>
		<P class="wenxi">联系人：X经理          上牌热线：400-444-5888</P>	
	</div>
</template>
<script>
	export default({
		data(){
			return{
				picerk:[
					{
						city:'杭州',
						sign:'浙A',
						price:'3600',
						out:'当天出牌',
						hint:'人车去一次'
					},
					{
						city:'杭州',
						sign:'浙A',
						price:'3600',
						out:'当天出牌',
						hint:'人车去一次'
					},
					{
						city:'杭州',
						sign:'浙A',
						price:'3600',
						out:'当天出牌',
						hint:'人车去一次'
					},
					{
						city:'杭州',
						sign:'浙A',
						price:'3600',
						out:'当天出牌',
						hint:'人车去一次'
					},
					{
						city:'杭州',
						sign:'浙A',
						price:'3600',
						out:'当天出牌',
						hint:'人车去一次'
					}
				],
			 outside:[
			 		{
						city:'衡阳',
						sign:'浙A',
						price:'3600',
						out:'当天出牌',
						hint:'人车去一次'
					},
					{
						city:'杭州',
						sign:'浙A',
						price:'3600',
						out:'当天出牌',
						hint:'人车去一次'
					},
					{
						city:'杭州',
						sign:'浙A',
						price:'3600',
						out:'当天出牌',
						hint:'人车去一次'
					},
					{
						city:'杭州',
						sign:'浙A',
						price:'3600',
						out:'当天出牌',
						hint:'人车去一次'
					},
					{
						city:'杭州',
						sign:'浙A',
						price:'3600',
						out:'当天出牌',
						hint:'人车去一次'
					}
			 		]
			}
		}
})
</script>
<style scoped>
	.tr td{
		height: 0.27rem;
	}
	.tr td:nth-of-type(2){
		width: 0.4rem
	
	}
	.tr td:nth-of-type(3){
		width: 0.9rem
	}
	.tr td:nth-of-type(4){
		width: 0.9rem
	}
	.newscar-banner{
		width: 100%;
		height: 1.75rem;
	}
	.pice li{
		width:100%;
	}
	.newscar-banner-png{
		width: 100%;
		height: 100%;
	}
	.title-bannera{
		width: 100%;
		height: 0.4rem;
		position: relative;
	}
	.title-bannera span{
		display:inline-block;
		width: 0.5rem;
		height: 0.01rem;
		position: absolute;
		background-color:#ff0000;
	}
	.title-bannera span:nth-of-type(1){
		top: 50%;
		left:20%;
	}
	.title-bannera span:nth-of-type(2){
		top: 50%;
		left:64%;
	}
	.title-png{
		width: 1rem;
		position: absolute;
		left:35%;
		top: 25%;
	}
	.newscar-detailde{
		font-size: 0.12rem;
		padding-left:0.125rem;
		padding-right:0.125rem;
	}
	.wenxi{
		padding-left: 0.125rem;
		padding-right: 0.125rem;
		font-size: 0.10rem;
		line-height: 0.15rem;
		padding-top: 0.2rem;
	}
	.wenxi:nth-of-type(2){
		padding-top:0.05rem;
	}
	.wenxi:nth-of-type(3){
		padding-top:0.05rem;
	}
</style>