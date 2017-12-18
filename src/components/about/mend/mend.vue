<template>
	<div class="sis">
		<div class="year-banner">
			<img src="./annual.png/ab.png" class="class-png">
		</div>
		<form>
		<div class="year-class">
			<span>证件类型：</span>
			<ul class="fofo">
				<li v-for="(papers,index) in paper"
				:class="{spsp:papers.spsp}" @click="func(papers,index)">{{papers.papers}}</li>
			</ul>
		</div>
		<div class="year-class">
			<span>业务类型：</span>
			<ul class="fofo">
				<li v-for="(classa,index) in classl" :class="{spsp:classa.spsp}" @click="mend(classa,index)">
					{{classa.mold}}
				</li>
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
					<mendform v-show="this.active==0" ref="annualform"></mendform>
					<mendmanage v-show="this.active==1"></mendmanage>
					<mendnotice v-show="this.active==2"></mendnotice>
				</div>
			</div>
		</div>
		</form>
		<div class="orange">
			<p>·办理登记证业务，车辆及车主本人需到场</p>
			<p>·办理行驶证业务，车辆需到场</p>
			<p>·办理车牌业务，无需车辆及车主本人到场</p>
			<p>·办理当天车辆需先处理完毕所有违章</p>
			<p>·损坏换领需携带损坏证件原件</p>
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
	import mendmanage from './mendmanage.vue'
	import mendform from './mendform.vue'
	import mendnotice from './mendnotice.vue'
	export default({
		data(){
			return{
				
				chose:'',
				input1:'',
				paper:[
					{
						papers:'登记证',
						spsp:true,
						name:'登记证'
					},
					{
						papers:'行驶证',
						spsp:false,
						name:'行驶证'
					}
				],
				classl:[
					{
						mold:'损坏补领',
						spsp:true,
						name:'损坏补领'
					},
					{
						mold:'丢失补领',
						spsp:false,
						name:'丢失补领'
					}
				],
				ok:true,
				active:0,
				actice1:0,
				actice2:0,
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
				mendd:{
					aff:'',
					drivia:'',
					drivin:'',
					timer:'',
					name:'',
					gogo:'',
					drop:'',
				}
			}
		},
		methods:{
			func(papers,index){
				for(var j=0; j<this.paper.length; j++)
				{
					this.paper[j].spsp=false
				}
				this.paper[index].spsp = true
				this.active1=index
				this.mendd.drivia=this.paper[index].name
			},
			mend(classa,index){
				for(var j=0; j<this.classl.length; j++)
				{
					this.classl[j].spsp=false
				}
				this.classl[index].spsp=true
				this.active2=index
				this.mendd.drivin=this.classl[index].name
//				console.log(this.mendd.drivin)
			},
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
			toastNonea1(){
				this.mendd.name=this.$refs.annualform.input1 //车主姓名
				this.mendd.gogo=this.$refs.annualform.address	//详细地址
				this.mendd.drop=this.$refs.annualform.model2   //邮寄地址
				this.mendd.aff=this.$refs.annualform.model1		//车牌属地
				this.mendd.timer=this.$refs.annualform.datetime0 //时间
//				console.log(this.mendd.gogo)
//				console.log(this.mendd.name)
				if(this.mendd.name==''||this.mendd.gogo==''){
					this.$dialog.toast({mes: '信息填写不全',timeout: 1000});
				}
				else{
						this.$dialog.toast({mes: '提交成功',timeout: 1000})	
					}
           	}		
		},
    	mounted(){
    		this.mendd.drivin=this.classl[0].name
    		this.mendd.drivia=this.paper[0].name
    		
    	},
    	 components:{
    	 	mendmanage,
    	 	mendform,
    	 	mendnotice
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
		height: 0.3rem;
		line-height: 0.3rem;
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