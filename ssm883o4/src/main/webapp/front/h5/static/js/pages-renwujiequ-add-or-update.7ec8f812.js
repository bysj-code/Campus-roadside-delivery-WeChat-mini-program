(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-renwujiequ-add-or-update"],{"29ec":function(r,e,i){"use strict";i.r(e);var t=i("e96d"),a=i("4e83");for(var n in a)"default"!==n&&function(r){i.d(e,r,(function(){return a[r]}))}(n);i("d043");var o,d=i("f0c5"),u=Object(d["a"])(a["default"],t["b"],t["c"],!1,null,"35e8fca8",null,!1,t["a"],o);e["default"]=u.exports},"4e83":function(r,e,i){"use strict";i.r(e);var t=i("dd4b"),a=i.n(t);for(var n in t)"default"!==n&&function(r){i.d(e,r,(function(){return t[r]}))}(n);e["default"]=a.a},"5bb4":function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-35e8fca8]{padding:%?20?%}.content[data-v-35e8fca8]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220210/87bd12d356ac4a8e90125da208a7597e.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-35e8fca8]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-35e8fca8]{width:%?180?%}.avator[data-v-35e8fca8]{width:%?150?%;height:%?60?%}.right-input[data-v-35e8fca8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-35e8fca8]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-35e8fca8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-35e8fca8]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-35e8fca8]{border:0}.cu-form-group uni-input[data-v-35e8fca8]{padding:0 %?30?%}.uni-input[data-v-35e8fca8]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-35e8fca8]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-35e8fca8]::after{line-height:%?80?%}.select .uni-input[data-v-35e8fca8]{line-height:%?80?%}.input .right-input[data-v-35e8fca8]{line-height:%?88?%}',""]),r.exports=e},"5ed4":function(r,e,i){var t=i("5bb4");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=i("4f06").default;a("384d089a",t,!0,{sourceMap:!1,shadowMode:!1})},d043:function(r,e,i){"use strict";var t=i("5ed4"),a=i.n(t);a.a},dd4b:function(r,e,i){"use strict";var t=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("28a5"),i("96cf");var a=t(i("3b8d")),n=t(i("e2b1")),o={data:function(){return{cross:"",ruleForm:{dingdanbianhao:"",renwumingcheng:"",renwuleixing:"",renwuyongjin:"",jiequshijian:"",jiequzhuangtai:"",renwutupian:"",fabuzhanghao:"",zhanghao:"",xingming:"",sfsh:"",shhf:"",ispay:"",userid:""},jiequzhuangtaiOptions:[],jiequzhuangtaiIndex:0,user:{},ro:{dingdanbianhao:!1,renwumingcheng:!1,renwuleixing:!1,renwuyongjin:!1,jiequshijian:!1,jiequzhuangtai:!1,renwutupian:!1,fabuzhanghao:!1,zhanghao:!1,xingming:!1,sfsh:!1,shhf:!1,ispay:!1,userid:!1}}},components:{wPicker:n.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(e){var i,t,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return this.ruleForm.jiequshijian=this.$utils.getCurDateTime(),i=uni.getStorageSync("nowTable"),r.next=4,this.$api.session(i);case 4:if(t=r.sent,this.user=t.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ro.zhanghao=!0,this.ruleForm.xingming=this.user.xingming,this.ro.xingming=!0,this.jiequzhuangtaiOptions="配送中,待付款,已完成".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=19;break}return this.ruleForm.id=e.id,r.next=17,this.$api.info("renwujiequ",this.ruleForm.id);case 17:t=r.sent,this.ruleForm=t.data;case 19:if(this.cross=e.cross,!e.cross){r.next=71;break}a=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(a);case 23:if((r.t1=r.t0()).done){r.next=71;break}if(n=r.t1.value,"dingdanbianhao"!=n){r.next=29;break}return this.ruleForm.dingdanbianhao=a[n],this.ro.dingdanbianhao=!0,r.abrupt("continue",23);case 29:if("renwumingcheng"!=n){r.next=33;break}return this.ruleForm.renwumingcheng=a[n],this.ro.renwumingcheng=!0,r.abrupt("continue",23);case 33:if("renwuleixing"!=n){r.next=37;break}return this.ruleForm.renwuleixing=a[n],this.ro.renwuleixing=!0,r.abrupt("continue",23);case 37:if("renwuyongjin"!=n){r.next=41;break}return this.ruleForm.renwuyongjin=a[n],this.ro.renwuyongjin=!0,r.abrupt("continue",23);case 41:if("jiequshijian"!=n){r.next=45;break}return this.ruleForm.jiequshijian=a[n],this.ro.jiequshijian=!0,r.abrupt("continue",23);case 45:if("jiequzhuangtai"!=n){r.next=49;break}return this.ruleForm.jiequzhuangtai=a[n],this.ro.jiequzhuangtai=!0,r.abrupt("continue",23);case 49:if("renwutupian"!=n){r.next=53;break}return this.ruleForm.renwutupian=a[n],this.ro.renwutupian=!0,r.abrupt("continue",23);case 53:if("fabuzhanghao"!=n){r.next=57;break}return this.ruleForm.fabuzhanghao=a[n],this.ro.fabuzhanghao=!0,r.abrupt("continue",23);case 57:if("zhanghao"!=n){r.next=61;break}return this.ruleForm.zhanghao=a[n],this.ro.zhanghao=!0,r.abrupt("continue",23);case 61:if("xingming"!=n){r.next=65;break}return this.ruleForm.xingming=a[n],this.ro.xingming=!0,r.abrupt("continue",23);case 65:if("userid"!=n){r.next=69;break}return this.ruleForm.userid=a[n],this.ro.userid=!0,r.abrupt("continue",23);case 69:r.next=23;break;case 71:this.styleChange();case 72:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},jiequshijianConfirm:function(r){console.log(r),this.ruleForm.jiequshijian=r.result,this.$forceUpdate()},jiequzhuangtaiChange:function(r){this.jiequzhuangtaiIndex=r.target.value,this.ruleForm.jiequzhuangtai=this.jiequzhuangtaiOptions[this.jiequzhuangtaiIndex]},renwutupianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.renwutupian="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){var e,i,t,a,n,o,d,u,s,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.ruleForm.renwuyongjin||this.$validate.isNumber(this.ruleForm.renwuyongjin)){r.next=3;break}return this.$utils.msg("任务佣金应输入数字"),r.abrupt("return");case 3:if(!this.cross){r.next=19;break}if(a=uni.getStorageSync("statusColumnName"),n=uni.getStorageSync("statusColumnValue"),""==a){r.next=19;break}if(o=uni.getStorageSync("crossObj"),a.startsWith("[")){r.next=15;break}for(d in o)d==a&&(o[d]=n);return u=uni.getStorageSync("crossTable"),r.next=13,this.$api.update("".concat(u),o);case 13:r.next=19;break;case 15:e=Number(uni.getStorageSync("userid")),i=o["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 19:if(!i||!e){r.next=41;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=i,s={page:1,limit:10,crossuserid:e,crossrefid:i},r.next=25,this.$api.list("renwujiequ",s);case 25:if(l=r.sent,!(l.data.total>=t)){r.next=31;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 31:if(!this.ruleForm.id){r.next=36;break}return r.next=34,this.$api.update("renwujiequ",this.ruleForm);case 34:r.next=38;break;case 36:return r.next=38,this.$api.add("renwujiequ",this.ruleForm);case 38:this.$utils.msgBack("提交成功");case 39:r.next=49;break;case 41:if(!this.ruleForm.id){r.next=46;break}return r.next=44,this.$api.update("renwujiequ",this.ruleForm);case 44:r.next=48;break;case 46:return r.next=48,this.$api.add("renwujiequ",this.ruleForm);case 48:this.$utils.msgBack("提交成功");case 49:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===r?i-=60:"end"===r&&(i+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(i,"-").concat(t,"-").concat(a)},toggleTab:function(r){this.$refs[r].show()}}};e.default=o},e96d:function(r,e,i){"use strict";var t={"w-picker":i("e2b1").default},a=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("订单编号")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.dingdanbianhao,placeholder:"订单编号"},model:{value:r.ruleForm.dingdanbianhao,callback:function(e){r.$set(r.ruleForm,"dingdanbianhao",e)},expression:"ruleForm.dingdanbianhao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("任务名称")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.renwumingcheng,placeholder:"任务名称"},model:{value:r.ruleForm.renwumingcheng,callback:function(e){r.$set(r.ruleForm,"renwumingcheng",e)},expression:"ruleForm.renwumingcheng"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("任务类型")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.renwuleixing,placeholder:"任务类型"},model:{value:r.ruleForm.renwuleixing,callback:function(e){r.$set(r.ruleForm,"renwuleixing",e)},expression:"ruleForm.renwuleixing"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("任务佣金")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.renwuyongjin,placeholder:"任务佣金"},model:{value:r.ruleForm.renwuyongjin,callback:function(e){r.$set(r.ruleForm,"renwuyongjin",e)},expression:"ruleForm.renwuyongjin"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("接取时间")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"接取时间"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.toggleTab("jiequshijian")}},model:{value:r.ruleForm.jiequshijian,callback:function(e){r.$set(r.ruleForm,"jiequshijian",e)},expression:"ruleForm.jiequshijian"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("接取状态")]),i("v-uni-picker",{attrs:{value:r.jiequzhuangtaiIndex,range:r.jiequzhuangtaiOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.jiequzhuangtaiChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.jiequzhuangtai?r.ruleForm.jiequzhuangtai:"请选择接取状态"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.renwutupianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("任务图片")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.renwutupian?i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.renwutupian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("发布账号")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.fabuzhanghao,placeholder:"发布账号"},model:{value:r.ruleForm.fabuzhanghao,callback:function(e){r.$set(r.ruleForm,"fabuzhanghao",e)},expression:"ruleForm.fabuzhanghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("账号")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.zhanghao,placeholder:"账号"},model:{value:r.ruleForm.zhanghao,callback:function(e){r.$set(r.ruleForm,"zhanghao",e)},expression:"ruleForm.zhanghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("姓名")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.xingming,placeholder:"姓名"},model:{value:r.ruleForm.xingming,callback:function(e){r.$set(r.ruleForm,"xingming",e)},expression:"ruleForm.xingming"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(130, 163, 157, 1)",borderColor:"rgba(130, 163, 157, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1),i("w-picker",{ref:"jiequshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(e){arguments[0]=e=r.$handleEvent(e),r.jiequshijianConfirm.apply(void 0,arguments)}}})],1)},n=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return t}))}}]);