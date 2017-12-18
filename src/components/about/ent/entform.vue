<template>
  <div>
  	<ul>
  		<li>
		      <yd-cell-group>
		        <yd-cell-item arrow>
		          <span slot="left" style="margin-right: 0.2rem; font-size: 0.12rem;">* 车牌属地：</span>
		          <input slot="right" type="text" @click.stop="show2 = true" v-model="model2" readonly class="input" >
		        </yd-cell-item>
		      </yd-cell-group>
		      <yd-cityselect v-model="show2" ref="cityselectDemo" :callback="result2" :items="district" provance="浙江" city="杭州市" area="余杭区">
		      </yd-cityselect>
  		</li>
  		<li>
		     <yd-cell-group>
		        <yd-cell-item arrow>
		          <span slot="left" style="margin-right: 0.2rem; font-size: 0.12rem;">* 年检城市：</span>
		          <input slot="right" type="text" @click.stop="show3 = true" v-model="model3" readonly class="input" style="">
		        </yd-cell-item>
		      </yd-cell-group>
		      <yd-cityselect v-model="show3" ref="cityselectDemo" :callback="result3" :items="district" provance="浙江" city="杭州市" area="余杭区">
		      </yd-cityselect>
  		</li>
  		<li>
  				<div class="yd-cell-box">
  				<span class="date-t">* 办理日期：</span>
					 <yd-datetime style="border:1px solid #000;height: 50px;line-height: 50px;text-align: center;" v-model="datetime0"></yd-datetime>
  				</div>
  		</li>
  		<li>
  			<div class="yd-cell-box">
		     <yd-cell-group>
		        <yd-cell-item arrow>
		          <span slot="left" style="margin-right: 0.2rem; font-size: 0.12rem;">* 联系地址:</span>
		          <input slot="right" type="text" @click.stop="show4 = true" v-model="model4" readonly class="input">
		        </yd-cell-item>
		      </yd-cell-group>
		      <yd-cityselect v-model="show4" ref="cityselectDemo" :callback="result4" :items="district" provance="浙江" city="杭州市" area="余杭区">
		      </yd-cityselect>
  			</div>
  		</li>
  		<li style="margin-top:0.11rem">
  			<yd-cell-item>
            <span slot="left" style="font-size: 0.12rem;">*详细地址:</span>
            <yd-input slot="right" required v-model="input2" max="20" placeholder="请输地址" style='font-size: 0.12rem;'></yd-input>
       	</yd-cell-item>
  		</li>
  	</ul>
  	</div>
</template>

<script>
  import District from 'ydui-district/dist/jd_province_city_area_id';
    export default {
        name: "location",
       data() {
        return {
          show2: false,
          show3: false,
          show4:false,
          model2: '浙江 杭州市 余杭区', //车牌属地
          model3: '浙江 杭州市 余杭区',	//年检城市
          model4: '浙江 杭州市 余杭区',	//联系纸质
          district: District,
          input2:'',		  //详细地址
          datetime0: ''		//办理日期
        }
      },
      methods: {
        result2(ret) {
          this.model2 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
        },
        result3(ret) {
          this.model3 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
        },
        result4(ret) {
          this.model4 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
      	},
      	ifif(){
      		alert('1')
      	}
    	},
    	mounted(){

    	}
 }
</script>

<style>
	.yd-cell-right .yd-datetime-input,
	.yd-cell-right input[type=date],
	.yd-cell-right input[type=datetime-local],
	.yd-cell-right input[type=email],
	.yd-cell-right input[type=number]:not(.yd-spinner-input),
	.yd-cell-right input[type=password],
	.yd-cell-right input[type=tel],
	.yd-cell-right input[type=text],
	.yd-cell-right input[type=time],
	.yd-cell-right input[type=url] {
		font-size: 0.12rem!important;
		width: 70%;
		height: 0.25rem;
		border: solid 0.01rem #e6e5e5;
	}
	.yd-cityselect-title{
		font-size: 0.18rem;
	}
	.yd-input-error:after {
    content: "\E614";
    color: #f43530;
    font-size: 0.2rem;
    position:absolute;
    right:0.2rem;
	}
	.yd-input-warn:after {
    content: "\E614";
    color: #10aeff;
    font-size:0.2rem;
    position:absolute;
    right:0.2rem;
	}
	.yd-input-success:after {
    content: "\E601";
    color: #09bb07;
    font-size: 0.2rem;
    position:absolute;
    right:0.2rem;
	}
	.yd-input-clear{
		display: none;
	}
	.yd-datetime-input{
		height: 0.25rem!important;
    display: inline-block;
    line-height: 0.25rem!important;
    margin-left: 0.1rem!important;
    text-align:left!important;
    color: #666666!important;
    width: 70%;
    font-size: 0.12rem;
    border:solid 0.01rem #e6e5e5!important;
	}
	.yd-input {
    height: 0.25rem;
    margin-top: 0.1rem;
    width:100%;
    margin-right:0.12rem;
    position: relative;
	}
	.yd-cell-right{
		height: 0.25rem;
		min-height:0.25rem;
		font-size: 0.12rem;
		margin-left: 0.21rem;
		padding-right:0;
		margin-top: 0.02rem;
	}
	.replace-form-box li .last-text{
		margin-left: 0.9rem;
	}
	.gps-border{
		width: 70%;
		border: solid 0.01rem #e6e5e5;
	}
	.carform{
		padding-left: 0.125rem;
		padding-right: 0.125rem;
	}
	.date-t{
		display: inline-block;
		margin-left: 0.2rem;
		margin-top: 0.1rem;
		color: #333333;
		font-size: 0.12rem;
	}
	.date{
		border: solid 0.01rem #e5e6e6;
		color:#666;
		width: 70%;
		height: 0.25rem;
		margin-left: 0.1rem;
	}
	.time-list{
		margin-top: 0.1rem;
	}

	.list-text{
		margin-left: 1rem;
		margin-top: 0.1rem;
		width: 70%;
		height: 0.25rem;
		border: solid 0.01rem #e5e6e6;
	}
	.yd-cell-item{
	    padding-left:0.1rem;
	    height: 0.4rem;
	}
	.yd-cell-arrow:after{
	    display: none!important;
	}
	.input
	 {
	   	margin-left:1.0rem!important;
	    font-size: 0.12rem!important;
	    position: absolute!important;
	    left:0.0rem!important;
	    top: 0!important;
	    width: 70%!important;
	    padding-right:0.15rem!important;
	    height: 0.25rem!important;
	    top:0.07rem!important;
	   	border:solid 0.01rem #e5e6e6!important;
	 }
	  .yd-cell-box {
	    margin-bottom: 0rem;
	    margin-top: 0.1rem;
	}
	.yd-cell:after {
    content: "";
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 0px solid #b2b2b2;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
</style>
	<!--<form class="outside-form">
	<ul class="replace-form-box">
		<li>
			<span>* 车牌属地：</span>
			<erji class="maps"></erji>
		</li>
		<li>
			<span>* 落牌城市：</span>
			<erji class="maps"></erji>
		</li>
		<li>
			<span>* 办理日期：</span>
			<input type="date" placeholder="请选择办理日期" class="date">
		</li>
		<li>
			<span>* 买方姓名：</span>
			<input type="text" placeholder="请输入买方姓名">
		</li>
		<li>
			<span>* 联系地址：</span>
			<erji class="maps"></erji>
		</li>
		<li>
			<input type="text" placeholder="请输入地址" class="last-text">
		</li>
	</ul>
	</form>-->
	<!--</div>
</template>-->
<!--<script>
	import erji from './erji.vue'
	export default {
		components:{
    		erji
    	}
	}
</script>
<style scoped>

</style>-->
