<template>
	<div class="sis">
		<div class="year-banner">
		<img class="policeman-a" src="./comm.png/outcar.png">
		</div>
		<div class="main-box">
			<ul class="list-l-a" >
					<li
					v-for="(tabnavl,index) in tabnav"
					@click="fun(tabnavl,index)"
					:class="{show:tabnavl.active}"
					>
					{{tabnavl.navname}}
					</li>
			</ul>
			<entrustnotice v-show="this.active==2" ></entrustnotice> 
			<entrustmanage v-show="this.active==1"></entrustmanage>
			<entrustform v-show="this.active==0" v-on:listener='formshow' ref="phone"></entrustform>
		</div>
		<div class="orange-a">
			<p>{{this.ems}}</p>
		</div>
		<yd-button class="orange-footer-a" @click.native="toastNone" size="large" type="danger">
				<div class="orange-price-a">
					<p>￥：<span>{{this.price}}</span></p>
					<p><del>{{this.discount}}</del></p>
				</div>
				<div class="postaon-a">
					下单立减<span>{{this.minus}}</span>
				</div>
		</yd-button>
	</div>
</template>
<script>
import entrustmanage from './entrustmanage.vue'
import entrustform from './entrustform.vue'
import entrustnotice from './entrustnotice.vue'
	export default({
		data(){
			return{
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
				entrust:{
					name:'',	//车主名字
					gpgo:'',	//详细地址
					drop:'',	//车牌属地
					aff:'',		//落牌城市
					conadd:'',	//联系地址
					timer:''	//办理日期	
				},
				ems:'快递费用：快递费用由发件方承担,到付我方无法签收',
				price:'499',
				discount:'519',
				minus:'20'
				
			}
		},
		created(){},
		methods:{
			formshow(){
				
			},
			fun(tabnavl,index){
				this.chose=tabnavl.name
				console.log(index)
				for(var i=0; i<this.tabnav.length; i++)
				{
					this.tabnav[i].active = false
				}
				this.tabnav[index].active = true
				this.active=index
			},
			toastNone(){
				this.entrust.name=this.$refs.phone.input1
				this.entrust.gogo=this.$refs.phone.input2
				this.entrust.drop=this.$refs.phone.model2
				this.entrust.aff=this.$refs.phone.model3
				this.entrust.conadd=this.$refs.phone.model4
				this.entrust.timer=this.$refs.phone.datetime0
				console.log(this.entrust.timer)
				if(this.entrust.name==''||this.entrust.gogo==''){
					this.$dialog.toast({mes: '信息填写不全',timeout: 1500});
				}
				else{
					
					this.$dialog.toast({mes: '提交成功',timeout: 1500});
				}
           	}		
		},
    	mounted(){
    		this.formshow()
    	},
    	components:{
    		entrustmanage,
    		entrustform,
    		entrustnotice
    	}
	})
</script>

<style scoped>
	.yd-confirm-ft>.primary{
    	color: #000!important;
	}
	.ent-tab{
		display: none;
	}
	.list-l-a .show{
		border-bottom: solid 0.02rem #63a0f1;
	}
	.year-banner{
		height: 1.75rem;
		width: 100%;
	}
	.policeman-a{
		width:100%;
		height: 100%;
	}
	.main-box{
		width: 100%;
		height:2.6rem;
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
	.orange-a{
		margin: 0 auto;
		margin-top:0.9rem;
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
</style>