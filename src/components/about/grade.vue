<template>
	<div class="break">
		<form class="my-form">
		<p class="hint">
			{{this.hint}}
		</p>
		<div class="break-paiding">
			<div class="license-box">
				<span>* 驾驶证号码：</span>
				<input type="text" placeholder="请输入18位驾驶证号码" class="car" id="car" @blur="car" v-model="grade.driv"/>
			</div>
			<div class="license-box">
				<span>* 驾驶证档案编号：</span>
				<input type="text" placeholder="请输入12位档案编号" class="bian" id="bian" @blur="bian" v-model="grade.filel"/>
			</div>
			<div class="car-date">
				<div class="yd-cell-box">
  					<span>* 驾驶证领证日期：</span>
					<yd-datetime  v-model="grade.datetime0"></yd-datetime>			
  				</div>
			</div>
			<div class="phone-number">
            	<span>* 请输入手机号：</span>
            	<input type="text" placeholder="请输入手机号" class="phone" id="phone" @blur="fou" v-model="grade.phone"/>
			</div>
			<div class="phone-number">
				<span  class="car-number-b">*验证码</span>
				<a href="#" class="fasong" @click="fasong">获取验证码</a>
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
				grade:{
					driv:'',//驾驶证
					filel:'',//档案号
					datetime0:'',//领取证件日期
					phone:''	//电话
				},
				
				hint:'以下信息仅供交管局查询，我们将严格保密',
				inputa:'',
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
        		console.log(this.driv)
        		var phone = document.getElementById('phone').value;
        		var car=document.getElementById('car').value;
        		
        		if(!(/^1[34578]\d{9}$/.test(phone))||!(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(car))||!(/\b\d{12}\b/.test(car))){
        			this.$dialog.alert({mes: '填写信息不全'});
        		}
        		else
        		{
        			 this.$dialog.alert({mes: '查询中'});
        		}
               
            },
            car(){
            	var car=document.getElementById('car').value;
            	if(!(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(car)))
            	{
            		 this.$dialog.alert({mes: '驾驶证填写有误'});
            	}
            },
            bian(){
            	var car=document.getElementById('car').value;
            	if(!(/\b\d{12}\b/.test(car)))
            	{
            		 this.$dialog.alert({mes: '档案编号填写有误'});
            	}
            },
            fasong(){
            	var phone = document.getElementById('phone').value;
        		if(!(/^1[34578]\d{9}$/.test(phone))||phone==="")
        		{
        			  this.$dialog.alert({mes: '请先输入有效手机号码'});
        		}
        		else{
        			
        		}
            }
            
		},
		mounted(){
    		
    	}	
	}
</script>
 
<style scoped>
	.car{
		border: solid 0.01rem #DEDEDE;
		width:69%;
		text-align:right;
		border:none;
	}
	.bian{
		border: solid 0.01rem #DEDEDE;
		width:63%;
		text-align:right;
		border:none;
	}
	.phone{
		border: solid 0.01rem #DEDEDE;
		width:66%;
		text-align: right;
		border:none;
	}
	.yd-cell-icon{
	display: block;
	margin-right:0rem!important
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
		width: 62%;
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
		margin: 0.2rem 0.2rem;
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