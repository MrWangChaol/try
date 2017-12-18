<template>
	<div class="sis">
		<div class="replace-banner">
			<img src="./replace.png/replace-banner.png" class="replace-banner-main">
		</div>
		<form>
		<div class="replace-content">
			<div class="replace-content-pading">
				<ul class="list-l-b">
					<li v-for="(tabnavl,index) in tabnav"
					@click="fun(tabnavl,index)"
					:class="{show:tabnavl.active}">
					{{tabnavl.navname}}
					</li>
				</ul>
				<div>
					<replacenotice v-show="this.active==2" ></replacenotice> 
					<replacemanage v-show="this.active==1"></replacemanage>
					<replaceform v-show="this.active==0" ref="ppp"></replaceform>
				</div>
			</div>
		</div>
		</form>
		<div class="orange-a">
			<p>{{this.tips.one}}</p>
			<p>{{this.tips.two}}</p>
		</div>
		<yd-button class="replace-footer orange-footer-a" @click.native="toastNonea" size="large" type="danger">
			<div class="replace-price">
				<p>￥：<span>{{this.price}}</span></p>
				<p><del>{{this.noprice}}</del></p>
			</div>
			<div class="replace-c">
				下单立减<span>{{this.minus}}</span>
			</div>
		</yd-button>
	</div>
</template>
<script>
import replacemanage from './replacemanage.vue'
import replaceform from './replaceform.vue'
import replacenotice from './replacenotice.vue'
export default({
		data(){
			return{
				price:'499',
				noprice:'519',
				minus:'20',
				tips:{
					one:'需车辆到场，办理当天车辆不限号',
					two:'办理当天车辆需先处理完毕所有违章'
				},
				ok:true,
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
				replace:{
					drop:'',
					aff:'',
					conadd:'',
					timer:'',
					name:'',
					gpgo:''
				}
				
			}
		},
		created(){},
		methods:{
			fun(tabnavl,index){
				this.chose=tabnavl.name
				console.log(index)
				for(var i=0; i<this.tabnav.length; i++)
				{
					this.tabnav[i].active = false
				}
				this.tabnav[index].active = true
				this.active=index
				console.log(this.active)
			},
			toastNonea(){
				this.replace.name=this.$refs.ppp.input1
				this.replace.gogo=this.$refs.ppp.input2
				this.replace.drop=this.$refs.ppp.model2
				this.replace.aff=this.$refs.ppp.model3
				this.replace.conadd=this.$refs.ppp.model4
				this.replace.timer=this.$refs.ppp.datetime0
				console.log(this.replace.timer)
				console.log(this.replace.name)
				console.log(this.replace.gogo)
				if(this.replace.name==''||this.replace.gogo==''){
					this.$dialog.toast({mes: '信息填写不全',timeout: 1000});
				}
				else{
					this.$dialog.toast({mes: '提交成功',timeout: 1000});
				}
           	}		
		},
    	mounted(){
    		
    	},
    	components:{
    		replacemanage,
    		replaceform,
    		replacenotice
    	}
	})
</script>

<style scoped>
	.orange-a{
		margin: 0 auto;
		margin-top:0.3rem;
		padding-left: 0.15rem;
		width:90%;
		height:0.5rem;
		background-color:#fde6bd;
	}
	.orange-a p{
		line-height: 0.22rem;
		font-size: 0.09rem;
		color: #fd6b09;
	}
	.orange-a p:nth-of-type(1){
		padding-top: 0.05rem;
	}
	.list-l-b .show{
		border-bottom: solid 0.02rem #63a0f1;
	}
	.replace-banner{
		height: 1.75rem;
		width: 100%;
	}
	.replace-banner-main{
		width:100%;
	}
	.replace-content{
		width: 100%;
		height:3.2rem;
	}
	.list-l-b{
		width:100%;
		height: 0.3rem;
		display:table;
		padding-top: 0.1rem;
		border-bottom: solid 0.01rem #f5f5f5;
	}
	.list-l-b li{
		display: table-cell;
		text-align:center;
		height: 0.3rem;
		line-height: 0.3rem;
		font-size: 0.12rem;
	}
	.replace-content-pading{
		padding-left: 0.15rem;
		padding-right: 0.15rem;
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
	.replace-tips{
		width:83.5%;
		height:0.5rem;
		background-color:#fde6bd;
		margin: 0 auto;
		padding-top: 0.1rem;
		padding-left:0.2rem;
	}
	.replace-tips p{
		line-height: 0.18rem;
		font-size: 0.09rem;
		color: #fd6b09;
	}
	.replace-footer{
		width: 100%;
		height:0.5rem;
		position:fixed;
		bottom: 0;
		background-color:#fd6b09;
	}
	.replace-price{
		width: 0.7rem;
		height: 100%;
		padding-top:0.12rem;
		text-align:center;
		margin-left: 0.15rem;
		float: left;
		background-color: #FFFFFF;
	}
	.replace-price P{
		color: #fd6b09;
		font-size: 0.14rem;
		font-weight: bold;
	}
	.replace-price P:nth-of-type(2){
		 margin-top: 0.05rem;
	}
	.replace-c{
		text-align:center;
		color: #FFFFFF;
		font-size: 0.18rem;
		font-weight:bold;
		line-height: 0.5rem;
		float: right;
		padding-right:1rem;
	}
</style>