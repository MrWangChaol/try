<template>
	<div class="break">
		<form class="my-form">
		<p class="hint">
			{{this.secrecy}}
		</p>
		<div class="break-paiding">
			<div class="license-box">
				<ul class="ty-radio">
					<li v-for="(plates,index) in plate"
						@click="showpic(plates,index)"
						:class="{dps:plates.dps}"
						>
						{{plates.texta}}
					</li>
				</ul>
			</div>
			<div class="car-number-box">
				<span  class="car-number-b">车牌号</span>
				<input type="text" />
				<input type="text" />
				<input type="text" />
				<input type="text" />
				<input type="text" />
				<input type="text" />
				<input type="text" />
			</div>
			<div class="car-date">
				<div class="yd-cell-box">
  					<span>* 办理日期：</span>
					 <yd-datetime  v-model="datetime0"></yd-datetime>			
  				</div>
			</div>
			<div class="phone-number">
            	<span>* 请输入手机号：</span>
            	<input type="text" placeholder="请输入手机号" class="phone" id="phone" @blur="fou"/>
			</div>
			<div class="phone-number">
				<span  class="car-number-b">*验证码</span>
				<a href="#" class="fasong">获取验证码</a>
				<input type="text" placeholder="请输入验证码" class="number-bb"/>
			</div>
		</div>
			 <yd-button @click.native="openAlert" size="large" type="hollow" class="bottom">立即查询</yd-button>
		</form>
	</div>
</template>

<script>
	import District from 'ydui-district/dist/jd_province_city_area_id';
	export default {
		data(){
			return{
				secrecy:'以下信息仅供交管局查询，我们将严格保密',
				input4:'',
				model2:'',
				plate:[
					{	
						dps:true,
						texta:'普通车牌'
					},
					{	dps:false,
						texta:'新能源车牌'
					}
					],
					datetime0:''
			}
		},
		methods: {
			showpic(plates,index){
				console.log(index)
				for(var i=0; i<this.plate.length; i++)
				{
					this.plate[i].dps = false
				}
				this.plate[index].dps = true
//				this.active=index
			},
			result2(ret) {
          	this.model2 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
        	},
        	fou(){
        		var phone = document.getElementById('phone').value;
        		if(!(/^1[34578]\d{9}$/.test(phone)))
        		{
        			  this.$dialog.alert({mes: '手机号填写有误'});
        		}
        	},
        	openAlert() {
                this.$dialog.alert({mes: '查询中'});
            },
		},
		mounted(){
    		
    	}	
	}
</script>
 
<style scoped>
	.phone{
		border: solid 0.01rem #DEDEDE;
		width:66%;
		text-align: right;
		border:none;
	}
	.yd-cell-right{
		height: 0.25rem;
		min-height:0.25rem;
		font-size: 0.12rem;
		padding-left: 0.21rem;
		padding-right:0;
		margin-top: 0.02rem;
	}
	.yd-datetime-input{
		display:inline-block;
		width: 73%;
		text-align: right;
	}
	.hint{
		width:100%;
		height: 0.25rem;
		color: #fd6b09;
		line-height: 0.25rem;
		font-size: 0.1rem;
		padding-left: 0.04rem;
		padding-top: 0.2rem;
		
	}
	.ty-radio .dps{
		color: #f39700;
		border: solid 1px #f39700;
		background: url(../about/about.png/tips.png) no-repeat;
		background-size:inherit;
		background-position:right;
	}
	.break-paiding{
		margin: 0 0.15rem;
	}
	.license-box{
		width:100%;
		padding-top: 0.2rem;
		height:0.4rem;
	}
	.ty-radio li{
		height: 0.2rem;
		width: 1.0rem;
		float: left;
		line-height: 0.2rem;
		text-align: center;	
		border: solid 1px #d2d2d2;
		font-size: 0.12rem;
	}
	.ty-radio li:nth-of-type(1){
		margin-right: 0.3rem;	
	}
	.car-number-box{
		width:100%;
		padding-top: 0.2rem;
	}
	.car-number-b{
		display: inline-block;
		line-height:0.18rem ;
		width: 0.63rem;
		font-size: 0.12rem;
	}
	.car-number-box input{
		width: 0.2rem;
		height: 0.2rem;
		margin-right: 0.1rem;
		border: solid 1px #DEDEDE;
	}
	.car-number-box input:nth-last-of-type{
		width: 0.2rem;
		height: 0.2rem;
	}
	.car-date{
		width: 100%;
		height: 0.57rem;
		line-height: 0.57rem;
		position: relative;
		font-size: 0.12rem;
	}
	.cun{
		display: inline-block;
		width:60%;
	}
	.date{
		position:absolute;
		top:25%;
		border: none;
		outline: none;
		color: #999999;
		font-size: 0.12rem;
	}
	.date option{
		color: #999999;
		font-size: 0.12rem;
	}
	.phone-number{
		width: 100%;
		height: 0.5rem;
	}
	.number-p{
		outline: none;
		border: none;
		float: right;
		width: 1.1rem;
		font-size: 0.12rem;	
	}
	.number-bb{
		border: none;
		float: right;
		width: 0.9rem;
		line-height: 0.2rem;
		outline:none;
		font-size: 0.12rem;
	}
	.fasong{
		float:right;
		display: inline-block;
		width: 0.8rem;
		height: 0.2rem;
		line-height: 0.2rem;
		background-color: #fff100;
		font-size: 0.10rem;
		text-align:center;
		color: #333;
		border-radius: 0.03rem;
		margin-right: 0.2rem;
		font-size: 0.10rem;
	}
	.bottom{
		position: fixed;
		width: 100%;
		height: 0.5rem;
		background-color: #ec6941;
		bottom: 0;
		text-align: center;
		line-height: 0.5rem;
		color: #FFFFFF;
		font-size: 0.18rem;
		border: none;
		outline: none;
		display: block;
	}
</style>