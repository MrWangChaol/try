<template>
	<div class="sis">
		<div class="year-banner">
		<img class="policeman-a" src="./register.png/register.png">
		</div>
		<div class="main-box">
			<ul class="list-l-a">
					<li
					v-for="(tabnavl,index) in tabnav"
					@click="fun(tabnavl,index)"
					:class="{show:tabnavl.active}"
					>
					{{tabnavl.navname}}
					</li>
			</ul>
			<registernotice v-show="this.active==2" ></registernotice> 
			<registerreq v-show="this.active==1"></registerreq>
			<registerform  v-show="this.active==0" v-on:listener='formshow' ref="reg"></registerform >
		</div>
		<div class="orange-a">
			<p>{{this.ems}}</p>
		</div>
		<yd-button class="orange-footer-a" @click.native="toastNonea" size="large" type="danger">
					确认提交
		</yd-button>
	</div>
</template>

<script>
import registerreq from './registerreq.vue'
import registerform from './registerform.vue'
import registernotice from './registernotice.vue'
	export default({
		data(){
			return{
				ems:'快递费用：快递费用由发件方承担,到付我方无法签收',
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
				register:{
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
			toastNonea(){
				this.register.name=this.$refs.reg.input1
				this.register.gogo=this.$refs.reg.input2
				this.register.drop=this.$refs.reg.model2
				this.register.aff=this.$refs.reg.model3
				this.register.conadd=this.$refs.reg.model4
				this.register.timer=this.$refs.reg.datetime0
				console.log(this.register.timer)
				console.log(this.register.name)
				console.log(this.register.gogo)
				if(this.register.name==''||this.register.gogo==''){
					this.$dialog.toast({mes: '信息填写不全',timeout: 1000});
				}
				else{
					
					this.$dialog.toast({mes: '提交成功',timeout: 1000});
				}
           	}		
		},
    	mounted(){
    		this.formshow()
    	},
    	components:{
    		registerreq,
    		registerform, 
    		registernotice
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
		font-size: 0.18rem;
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