(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/daisongrenwu/add-or-update"],{"0f85":function(n,e,r){},"5a40":function(n,e,r){"use strict";r.r(e);var a=r("aebf"),t=r("db75");for(var i in t)"default"!==i&&function(n){r.d(e,n,(function(){return t[n]}))}(i);r("675e");var u,o=r("f0c5"),s=Object(o["a"])(t["default"],a["b"],a["c"],!1,null,"5995f59d",null,!1,a["a"],u);e["default"]=s.exports},"675e":function(n,e,r){"use strict";var a=r("0f85"),t=r.n(a);t.a},aebf:function(n,e,r){"use strict";r.d(e,"b",(function(){return t})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return a}));var a={wPicker:function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"fbac"))}},t=function(){var n=this,e=n.$createElement;n._self._c},i=[]},db75:function(n,e,r){"use strict";r.r(e);var a=r("e2ce"),t=r.n(a);for(var i in a)"default"!==i&&function(n){r.d(e,n,(function(){return a[n]}))}(i);e["default"]=t.a},e2ce:function(n,e,r){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t(r("a34a"));function t(n){return n&&n.__esModule?n:{default:n}}function i(n,e,r,a,t,i,u){try{var o=n[i](u),s=o.value}catch(c){return void r(c)}o.done?e(s):Promise.resolve(s).then(a,t)}function u(n){return function(){var e=this,r=arguments;return new Promise((function(a,t){var u=n.apply(e,r);function o(n){i(u,a,t,o,s,"next",n)}function s(n){i(u,a,t,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("fbac"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{cross:"",ruleForm:{dingdanbianhao:this.getUUID(),renwumingcheng:"",renwuleixing:"",renwuneirong:"",renwuyongjin:"",fabushijian:"",songdashixiao:"",dingdanzhuangtai:"",renwutupian:"",fabuzhanghao:"",lianxidianhua:"",userid:""},renwuleixingOptions:[],renwuleixingIndex:0,dingdanzhuangtaiOptions:[],dingdanzhuangtaiIndex:0,user:{},ro:{dingdanbianhao:!1,renwumingcheng:!1,renwuleixing:!1,renwuneirong:!1,renwuyongjin:!1,fabushijian:!1,songdashixiao:!1,dingdanzhuangtai:!1,renwutupian:!1,fabuzhanghao:!1,lianxidianhua:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var r=this;return u(a.default.mark((function t(){var i,u,o,s;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r.ruleForm.fabushijian=r.$utils.getCurDateTime(),i=n.getStorageSync("nowTable"),t.next=4,r.$api.session(i);case 4:return u=t.sent,r.user=u.data,r.ruleForm.fabuzhanghao=r.user.fabuzhanghao,r.ro.fabuzhanghao=!0,r.ruleForm.lianxidianhua=r.user.lianxidianhua,r.ro.lianxidianhua=!0,t.next=12,r.$api.option("renwuleixing","leixing",{});case 12:if(u=t.sent,r.renwuleixingOptions=u.data,r.dingdanzhuangtaiOptions="已接取,待接取".split(","),r.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(r.ruleForm.refid=e.refid,r.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){t.next=23;break}return r.ruleForm.id=e.id,t.next=21,r.$api.info("daisongrenwu",r.ruleForm.id);case 21:u=t.sent,r.ruleForm=u.data;case 23:if(r.cross=e.cross,!e.cross){t.next=79;break}o=n.getStorageSync("crossObj"),t.t0=a.default.keys(o);case 27:if((t.t1=t.t0()).done){t.next=79;break}if(s=t.t1.value,"dingdanbianhao"!=s){t.next=33;break}return r.ruleForm.dingdanbianhao=o[s],r.ro.dingdanbianhao=!0,t.abrupt("continue",27);case 33:if("renwumingcheng"!=s){t.next=37;break}return r.ruleForm.renwumingcheng=o[s],r.ro.renwumingcheng=!0,t.abrupt("continue",27);case 37:if("renwuleixing"!=s){t.next=41;break}return r.ruleForm.renwuleixing=o[s],r.ro.renwuleixing=!0,t.abrupt("continue",27);case 41:if("renwuneirong"!=s){t.next=45;break}return r.ruleForm.renwuneirong=o[s],r.ro.renwuneirong=!0,t.abrupt("continue",27);case 45:if("renwuyongjin"!=s){t.next=49;break}return r.ruleForm.renwuyongjin=o[s],r.ro.renwuyongjin=!0,t.abrupt("continue",27);case 49:if("fabushijian"!=s){t.next=53;break}return r.ruleForm.fabushijian=o[s],r.ro.fabushijian=!0,t.abrupt("continue",27);case 53:if("songdashixiao"!=s){t.next=57;break}return r.ruleForm.songdashixiao=o[s],r.ro.songdashixiao=!0,t.abrupt("continue",27);case 57:if("dingdanzhuangtai"!=s){t.next=61;break}return r.ruleForm.dingdanzhuangtai=o[s],r.ro.dingdanzhuangtai=!0,t.abrupt("continue",27);case 61:if("renwutupian"!=s){t.next=65;break}return r.ruleForm.renwutupian=o[s],r.ro.renwutupian=!0,t.abrupt("continue",27);case 65:if("fabuzhanghao"!=s){t.next=69;break}return r.ruleForm.fabuzhanghao=o[s],r.ro.fabuzhanghao=!0,t.abrupt("continue",27);case 69:if("lianxidianhua"!=s){t.next=73;break}return r.ruleForm.lianxidianhua=o[s],r.ro.lianxidianhua=!0,t.abrupt("continue",27);case 73:if("userid"!=s){t.next=77;break}return r.ruleForm.userid=o[s],r.ro.userid=!0,t.abrupt("continue",27);case 77:t.next=27;break;case 79:r.styleChange();case 80:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianConfirm:function(n){console.log(n),this.ruleForm.fabushijian=n.result,this.$forceUpdate()},renwuleixingChange:function(n){this.renwuleixingIndex=n.target.value,this.ruleForm.renwuleixing=this.renwuleixingOptions[this.renwuleixingIndex]},dingdanzhuangtaiChange:function(n){this.dingdanzhuangtaiIndex=n.target.value,this.ruleForm.dingdanzhuangtai=this.dingdanzhuangtaiOptions[this.dingdanzhuangtaiIndex]},renwutupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.renwutupian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(a.default.mark((function r(){var t,i,u,o,s,c,d,l,g,f;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!e.ruleForm.renwuyongjin||e.$validate.isNumber(e.ruleForm.renwuyongjin)){r.next=3;break}return e.$utils.msg("任务佣金应输入数字"),r.abrupt("return");case 3:if(!e.ruleForm.lianxidianhua||e.$validate.isMobile(e.ruleForm.lianxidianhua)){r.next=6;break}return e.$utils.msg("联系电话应输入手机格式"),r.abrupt("return");case 6:if(!e.cross){r.next=22;break}if(o=n.getStorageSync("statusColumnName"),s=n.getStorageSync("statusColumnValue"),""==o){r.next=22;break}if(c=n.getStorageSync("crossObj"),o.startsWith("[")){r.next=18;break}for(d in c)d==o&&(c[d]=s);return l=n.getStorageSync("crossTable"),r.next=16,e.$api.update("".concat(l),c);case 16:r.next=22;break;case 18:t=Number(n.getStorageSync("userid")),i=c["id"],u=n.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 22:if(!i||!t){r.next=44;break}return e.ruleForm.crossuserid=t,e.ruleForm.crossrefid=i,g={page:1,limit:10,crossuserid:t,crossrefid:i},r.next=28,e.$api.list("daisongrenwu",g);case 28:if(f=r.sent,!(f.data.total>=u)){r.next=34;break}return e.$utils.msg(n.getStorageSync("tips")),r.abrupt("return",!1);case 34:if(!e.ruleForm.id){r.next=39;break}return r.next=37,e.$api.update("daisongrenwu",e.ruleForm);case 37:r.next=41;break;case 39:return r.next=41,e.$api.add("daisongrenwu",e.ruleForm);case 41:e.$utils.msgBack("提交成功");case 42:r.next=52;break;case 44:if(!e.ruleForm.id){r.next=49;break}return r.next=47,e.$api.update("daisongrenwu",e.ruleForm);case 47:r.next=51;break;case 49:return r.next=51,e.$api.add("daisongrenwu",e.ruleForm);case 51:e.$utils.msgBack("提交成功");case 52:case"end":return r.stop()}}),r)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,r=e.getFullYear(),a=e.getMonth()+1,t=e.getDate();return"start"===n?r-=60:"end"===n&&(r+=2),a=a>9?a:"0"+a,t=t>9?t:"0"+t,"".concat(r,"-").concat(a,"-").concat(t)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,r("543d")["default"])},e96d:function(n,e,r){"use strict";(function(n){r("c65d");a(r("66fd"));var e=a(r("5a40"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,r("543d")["createPage"])}},[["e96d","common/runtime","common/vendor"]]]);