<template>
	<footer>
		<ul class="my-footer">
			<li>
				<router-link to='/'>
				<p class="footer-logo aaa"></p>	
				<p class="tit">首页</p>
				</router-link>
			</li>
			<li>
				<router-link to='/presonal'>
				<p class="footer-logo bbb"></p>
				<p class="tit">我的</p>
				</router-link>
			</li>
		</ul>
	</footer>
</template>
<script>
	export default({
			data(){
				return{
					exact:'false'
				}
			},
			methods:{
				
			}
	})
</script>
<style scoped>
	.router-link-exact-active P{
		color: #37c6c0;
	}
	
	.router-link-exact-active .aaa{
		background: url(footer.png/ac.png) no-repeat;
		background-size: cover;
		height: 0.26rem;
	}
	.router-link-exact-active .bbb{
		background: url(footer.png/cbb.png) no-repeat;
		background-size: cover;
		height: 0.26rem;
	}
	
	.my-footer{
		width:100%;
		height:0.45rem;
		background-color:#F5F5F5;
		padding-top:0.08rem;
		display:table;
		border-top:#eeeeee solid 0.01rem;
	}
	.my-footer li{
		height: 100%;
		display: table-cell;
		text-align: center;
		padding-top: 0.02rem;
		position: relative;
	}
	.footer-logo{
		width:0.28rem;
		background-size: cover;
		background-color: #FFF100;
		height: 0.26rem;
		position: absolute;
		left: 50%;
		margin-left: -0.14rem;
		top:0;
	}
	.aaa{
		background:url(footer.png/home.png) no-repeat;
		background-size: cover;
	}
	.bbb{
		background: url(footer.png/my.png) no-repeat;
		background-size: cover;
	}
	.tit{
		margin-top: 0.3rem;
		color: #333333;
	}
	.active{
		color: red;
	}
</style>