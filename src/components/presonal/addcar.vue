<template>
  <div>
  	<p style="text-align: center; height: 0.25rem; width: 100%; background-color: #fd6b09; line-height: 0.25rem; color: #FFFFFF;">请对照《机动车行驶证》认真填写一下信息</p>
  	 <yd-cell-group>
        <yd-cell-item type="radio">
            <span slot="left" style="font-size: 0.12rem;">小型车:</span>
            <input slot="right" type="radio" value="小型车" v-model="picked"/>
        </yd-cell-item>

        <yd-cell-item type="radio">
            <span slot="left" style="font-size: 0.12rem;">大型车:</span>
            <input slot="right" type="radio" value="大型车" v-model="picked"/>
        </yd-cell-item>

        <yd-cell-item>
            <span slot="left" style="font-size: 0.12rem;">您的选择：</span>
            <span slot="right">{{picked}}</span>
        </yd-cell-item>
    </yd-cell-group>
  	<ul>
  		<li>
		      <yd-cell-group>
		        <yd-cell-item arrow>
		          <span slot="left" style="margin-right: 0.2rem; font-size: 0.12rem;">* 车牌号码：</span>
		          <yd-input slot="right" v-model="addcar.input1" regex="^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$" placeholder="请输入您的车牌号码"></yd-input>
		        </yd-cell-item>
		      </yd-cell-group>
  		</li>
  		<li>
		     <yd-cell-group>
		        <yd-cell-item arrow>
		          <span slot="left" style="margin-right: 0.2rem; font-size: 0.12rem;">*车架号码：</span>
		           <yd-input  slot="right" v-model="addcar.input2" regex="^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,6}$" placeholder="请输入车架号后6位"></yd-input>
		        </yd-cell-item>
		      </yd-cell-group>
  		</li>
  		<li style="margin-top:0.15rem">
        <yd-cell-item class="name">
            <span slot="left" style="margin-right: 0.2rem; font-size: 0.12rem;">*发动机号：</span>
             <yd-input slot="right" v-model="addcar.input3" regex="^[a-zA-Z0-9]{8}$" placeholder="请输入您的发动机号码"></yd-input>
        </yd-cell-item>
  		</li>
  	</ul>
  		<yd-button class="orange-footer-a" @click.native="toastNonea" size="large" type="danger">
					确认添加
		</yd-button>
  	</div>
</template>

<script>
  import District from 'ydui-district/dist/jd_province_city_area_id';
    export default {
        name: "location",
       data() {
        return {
        	addcar:{
        		 input1:'',
        	   input2:'',
          	 input3:'',	
        	},
        	picked:'小型车'
         
        }
      },
      methods: {
      	toastNonea(){
      			console.log(this.addcar.input1)
				if(this.addcar.input1==''||this.addcar.input2==''||this.addcar.input3==''){
					this.$dialog.toast({mes: '信息填写不全',timeout: 1000});
				}
				else{
					
					this.$dialog.toast({mes: '提交成功',timeout: 1000});
				}
          } 	
           	
    	},
    	mounted(){
    		
    	}	
 }     
</script>

<style>
	.yd-cell-right input[type=checkbox]:not(.yd-switch)+.yd-cell-checkbox-icon:after, .yd-cell-right input[type=checkbox]:not(.yd-switch)+.yd-cell-radio-icon:after, .yd-cell-right input[type=radio]+.yd-cell-checkbox-icon:after, .yd-cell-right input[type=radio]+.yd-cell-radio-icon:after {
    font-family: YDUI-INLAY;
    font-size: .25rem;
	}
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
		margin-left: 0.15rem;
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
	.orange-footer-a{
		width: 100%;
		height:0.5rem;
		position:fixed;
		bottom: 0;
		font-size: 0.18rem;
		background-color:#fd6b09;
	}
</style>