<template>
	<div class="sis">
		<div class="year-banner">
			<img src="./annual.png/ab.png" class="class-png">
		</div>
		<form>
		<div class="year-class">
			<span>业务类型：</span>
			<ul class="fofo">
				<li v-for="(year,index) in yearleng"
				:class="{spsp:year.spsp}" @click="func(year,index)">{{year.years}}</li>
			</ul>
		</div>
		<div class="from">
			<div class="from-pading">
				<ul class="list-l">
					<li
					v-for="(tabnavl,index) in tabnav"
					@click="fun(tabnavl,index)"
					:class="{show:tabnavl.active}"
					>
					{{tabnavl.navname}}
					</li>
				</ul>
				<div>
					<annualform v-show="this.active==0" ref="annualform"></annualform>
					<annualmanage v-show="this.active==1"></annualmanage>
					<annualnotice v-show="this.active==2"></annualnotice>
				</div>
			</div>
		</div>
		</form>
		<div class="orange">
			<p>{{this.orangetext.one}}</p>
			<p>{{this.orangetext.two}}</p>
			<p>{{this.orangetext.three}}</p>
			<p>{{this.orangetext.four}}</p>
			<p>{{this.orangetext.five}}</p>
		</div>
		<yd-button class="orange-footer-a orange-footer" @click.native="toastNonea1" size="large" type="danger">
			<div class="orange-price">
				<p>￥：<span>499</span></p>
				<p><del>519</del></p>
			</div>
			<div class="postaon">
				下单立减20
			</div>
		</yd-button>
	</div>
</template>

<script>
	import annualmanage from './annualmanage.vue'
	import annualform from './annualform.vue'
	import annualnotice from './annualnotice.vue'
	export default({
		data(){
			return{
				chose:'',
				input1:'',
				yearleng:[
					{
						years:'6年内'	,
						spsp:true,
						name:'6年内'
					},
					{
						years:'6年外'	,
						spsp:false,
						name:'6年外'
					}
				],
				ok:true,
				actice1:0,
				active:0,
				tabnav:[
					{	name:'0',
						active:true,
						navname:'车务办理',
					},
					{	name:'1',
						active:false,
						navname:'所需手续',
					},
					{	name:'2',
						active:false,
						navname:'注意事项',
					}
				],
				orangetext:{
					one:'·办理登记证业务，车辆及车主本人需到场',
					two:'·办理行驶证业务，车辆需到场',
					three:'·办理车牌业务，无需车辆及车主本人到场',
					four:'·办理当天车辆需先处理完毕所有违章',
					five:'·损坏换领需携带损坏证件原件'
				},
				annual:{
					drop:'', //车牌属地
					timer:'', //办理日期
					name:'', //车主姓名
					gpgo:'' ,//车牌号码
					year:'',//年限
				}
			}
		},
		methods:{
			fun(tabnavl,index){
				this.chose=tabnavl.name
				console.log(this.chose)
				for(var i=0; i<this.tabnav.length; i++)
				{
					this.tabnav[i].active = false
				}
				this.tabnav[index].active = true
				this.active=index
			},
			func(year,index){
				for(var j=0; j<this.yearleng.length; j++)
				{
					this.yearleng[j].spsp=false
				}
				this.yearleng[index].spsp = true
				this.active1=index
				this.annual.year=this.yearleng[index].name
			},
			toastNonea1(){
				this.annual.name=this.$refs.annualform.input1 //车主姓名
				this.annual.gogo=this.$refs.annualform.input3 //车牌号码
				this.annual.drop=this.$refs.annualform.model2 //车牌属地
				this.annual.timer=this.$refs.annualform.datetime0 //办理日期
				console.log(this.annual.year)
				if(this.annual.name==''||this.annual.gogo==''){
					this.$dialog.toast({mes: '信息填写不全',timeout: 1000});
				}
				else{
					this.$dialog.toast({mes: '提交成功',timeout: 1000});
				}
           	}		
		},
    	mounted(){
    		this.annual.year=this.yearleng[0].name
    	},
    	 components:{
    	 	annualmanage,
    	 	annualform,
    	 	annualnotice
    	 }
	})
</script>

<style scoped>
	.show{
		border-bottom: solid 0.02rem #63a0f1;
	}
	.class-png{
		width: 100%;
	}
	.fofo {
		display: inline-block;
    	height: 0.2rem;
	}
	.fofo li{
		float: left;
		margin-right: 0.2rem;
		border:solid #dedede 0.01rem;
		width: 0.7rem;
		height: 0.2rem;
		border-radius: 0.06rem;
		text-align: center;
		line-height: 0.2rem;
		margin-top: 0.04rem;
	}
	.fofo .spsp{
		background-color: #ec6941;
		color: #FFFFFF;
		border: none;
	}
	.year-class span{
		width: 0.74rem;
		height: 0.2rem;
		font-size: 0.11rem;
		display: inline-block;
		line-height: 0.2rem;
	}
	.YearOrange{
		color: #FFFFFF;
		background-color:#ec6941;
	}
	.year-banner{
		height: 1.75rem;
		width: 100%;
	}
	.policeman{
		width:100%;
	}
	.year-class{
		padding-left:0.15rem;
		height: 0.35rem;
		line-height: 0.35rem;
		margin-bottom:0.1rem;
	}
	.from{
		width: 100%;
		height:2.6rem;
	}
	.list-l{
		width:100%;
		height: 0.3rem;
		display:table;
		border-bottom: solid 0.01rem #f5f5f5;
	}
	.year-edate{
		color: #666;
	}
	.list-l li{
		display: table-cell;
		text-align:center;
		height: 0.3rem;
		line-height: 0.3rem;
		font-size: 0.12rem;
	}
	.from-pading{
		padding-left: 0.15rem;
		padding-right: 0.15rem;
	}
	.woca li{
		width:100%;
		height:0.35rem;
		line-height:0.35rem;
		margin-top: 0.1rem;
	}
	.woca li span{
		font-size: 0.12rem;
	}
	.woca li input{
		width:59%;
		margin-left:0.2rem;
		height:0.25rem;
		border-radius:0.03rem;
		border: solid 0.01rem #e6e5e5;
		outline: none;
		padding-left:0.34rem;
		font-size: 0.09rem;
	}
	.orange{
		width:83.5%;
		height:0.95rem;
		background-color:#fde6bd;
		margin: 0 auto;
		padding-top: 0.03rem;
		padding-left:0.2rem;
	}
	.orange p{
		line-height: 0.18rem;
		font-size: 0.09rem;
		color: #fd6b09;
	}
	.orange-footer{
		width: 100%;
		height:0.5rem;
		position:fixed;
		bottom: 0;
		background-color:#fd6b09;
	}
	.orange-price{
		width: 0.7rem;
		height: 100%;
		padding-top:0.12rem;
		text-align:center;
		margin-left: 0.15rem;
		float: left;
		background-color: #FFFFFF;
	}
	.orange-price P{
		color: #fd6b09;
		font-size: 0.14rem;
		font-weight: bold;
	}
	.orange-price P:nth-of-type(2){
		margin-top: 0.05rem;
	}
	.postaon{
		text-align:center;
		color: #FFFFFF;
		font-size: 0.18rem;
		font-weight:bold;
		line-height: 0.5rem;
		float: right;
		padding-right:1rem;
	}
</style>