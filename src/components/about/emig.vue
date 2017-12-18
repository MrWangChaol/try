<template>
	<div class="sis">
		<div class="year-banner">
			<img src="./about.png/wei-banner.png" class="policeman-a">
		</div>
		<div class="main-boxa">
			<ul class="list-l-a">
					<li>车务办理</li>
					<li>所需手续</li>
					<li>注意事项</li>
			</ul>
			<ul class="replace-form-box">
						<li>
							<span>* 车牌属地：</span>
							<input type="text"   placeholder="浙江省 杭州市">
						</li>
						<li>
							<span>* 办理日期：</span>
							<input type="text"   placeholder="请选择办理日期">
						</li>
						<li>
							<span>* 车主姓名：</span>
							<input type="text"   placeholder="请输入车主姓名">
						</li>
						<li>
							<span>* 车主姓名：</span>
							<input type="text"   placeholder="请输入车牌号码">
						</li>
						<li>
							<span>* 输入地址：</span>
							<input type="text"   placeholder="请输入地址">
						</li>
					</ul>
		</div>
		<div class="orange-a">
			<p>·快递费用：快递费用由发件方承担,到付我方无法签收</p>
		</div>
		<div class="orange-footer-a">
			<a href="#">
				<div class="orange-price-a">
					<p>￥：<span>499</span></p>
					<p><del>519</del></p>
				</div>
				<div class="postaon-a">
					下单立减20
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.year-banner{
		height: 1.75rem;
		width: 100%;
	}
	.policeman-a{
		width:100%;
		height: 100%;
	}
	.main-boxa{
		height:2.6rem;
		padding-left:0.125rem;
		padding-right: 0.125rem;
	}
	.list-l-a{
		width:100%;
		height: 0.3rem;
		display:table;
		border-bottom: solid 0.01rem #f5f5f5;
	}
	.list-l-a li{
		display: table-cell;
		text-align:center;
		height: 0.3rem;
		line-height: 0.3rem;
		font-size: 0.12rem;
	}
	.list-l-a li:nth-of-type(1){
		border-bottom: solid 0.02rem #63a0f1;
	}
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
	.orange-a{
		margin: 0 auto;
		margin-top:0.5rem;
		padding-left: 0.15rem;
		width:90%;
		height:0.5rem;
		background-color:#fde6bd;
		
	}
	.orange-a p{
		line-height: 0.5rem;
		font-size: 0.09rem;
		color: #fd6b09;
	}
	.orange-footer-a{
		width: 100%;
		height:0.5rem;
		position:fixed;
		bottom: 0;
		background-color:#fd6b09;
	}
	.orange-price-a{
		width: 0.7rem;
		height: 100%;
		padding-top:0.12rem;
		text-align:center;
		margin-left: 0.15rem;
		float: left;
		background-color: #FFFFFF;
	}
	.orange-price-a P{
		color: #fd6b09;
		font-size: 0.14rem;
		font-weight: bold;
	}
	.orange-price-a P:nth-of-type(2){
		margin-top: 0.05rem;
	}
	.postaon-a{
		text-align:center;
		color: #FFFFFF;
		font-size: 0.18rem;
		font-weight:bold;
		line-height: 0.5rem;
		float: right;
		padding-right:1rem;
	}
	.replace-form-box li{
		width:100%;
		height:0.35rem;
		line-height:0.35rem;
		margin-top: 0.1rem;
	}
	.replace-form-box li span{
		font-size: 0.12rem;
	}
	.replace-form-box li input{
		width:59%;
		margin-left:0.2rem;
		height:0.25rem;
		border-radius:0.03rem;
		border: solid 0.01rem #e6e5e5;
		outline: none;
		padding-left:0.34rem;
		font-size: 0.09rem;
	}
</style>