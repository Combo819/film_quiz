webpackJsonp([1],{"3lGV":function(t,e){},"4/8t":function(t,e,s){t.exports=s.p+"static/img/qr_code.f4e62ba.jpg"},"7zck":function(t,e){},BbB3:function(t,e){},Dv50:function(t,e){},F5pk:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},a,!1,function(t){s("PzVC")},"data-v-61b6035c",null).exports,n=s("/ocq"),o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o,!1,function(t){s("RyTg")},"data-v-3b884edb",null).exports;var c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"welcome_page"}},[s("v-app",[s("v-content",[s("v-container",{attrs:{fluid:"","fill-height":"","grid-list-xl":""}},[s("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":"",wrap:""}},[s("v-flex",{attrs:{xs11:"",sm10:"",md6:"",lg4:""}},[s("v-card",{attrs:{to:{name:"QuizPage"}}},[s("v-img",{attrs:{"aspect-ratio":"1",src:"./static/cover/sunRise.jpg"}}),t._v(" "),s("v-card-text",{staticClass:"headline text-xs-center text-sm-center text-md-center text-lg-center text-xl-center"},[t._v("游戏")])],1)],1),t._v(" "),s("v-flex",{attrs:{xs11:"",sm10:"",md6:"",lg4:""}},[s("v-card",{attrs:{to:{name:"instrucion"}}},[s("v-img",{attrs:{"aspect-ratio":"1",src:"./static/cover/牯岭街少年.jpg"}}),t._v(" "),s("v-card-text",{staticClass:"headline text-xs-center text-sm-center text-md-center text-lg-center text-xl-center"},[t._v("指示")])],1)],1),t._v(" "),s("v-flex",{attrs:{xs11:"",sm10:"",md6:"",lg4:""}},[s("v-card",{attrs:{to:{name:"scoreboard"}}},[s("v-img",{attrs:{"aspect-ratio":"1",src:"./static/cover/dunkirk.png",position:"center bottom"}}),t._v(" "),s("v-card-text",{staticClass:"headline text-xs-center text-sm-center text-md-center text-lg-center text-xl-center"},[t._v("积分榜")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var l=s("VU/8")({name:"welcomePage",data:function(){return{}},mounted:function(){this.$store.state.getFlag&&this.getMovieList()},methods:{getMovieList:function(){function t(t,e){this.id=t,this.fileName=e,this.movieName=e.substr(0,e.indexOf(".")),this.status=-2}for(var e in this.$store.state.movieJson){var s=new t(this.$store.state.movieJson[e],e);this.$store.commit("addObject",s)}this.$store.commit("setGetFlag")}}},c,!1,function(t){s("ScHT")},"data-v-0cce4cf2",null).exports,v=s("7t+N"),h=s.n(v),d={name:"QuizPage",data:function(){return{peepShow:!0,verifyShow:!0,surrenderShow:!0,inputShow:!0,tipShow:!1,answerShow:!1,greenCorrect:!1,yellowCorrect:!1,redWrong:!1,doubanShow:!1,keyIn:"",standardAnswer:"2001太空漫游",tipMessage:"提示信息",tipLength:0,timer:null,nextShow:!1,peeped:!1,redAlert:!1,cardImgSrc:"",cardDirector:"",cardYear:"",cardTitle:""}},mounted:function(){this.$store.state.getFlag&&this.getMovieList(),this.resetPanel()},methods:{surrenderClick:function(){this.peepShow=!1,this.verifyShow=!1,this.surrenderShow=!1,this.inputShow=!1,this.tipShow=!1,this.answerShow=!0,this.greenCorrect=!1,this.yellowCorrect=!1,this.redWrong=!1,this.doubanShow=!0,this.nextShow=!0,this.redAlert=!0,this.$store.commit("surrenderStatus")},verifyClick:function(){var t=this;this.keyIn===this.standardAnswer?(this.peepShow=!1,this.verifyShow=!1,this.surrenderShow=!1,this.inputShow=!1,this.tipShow=!1,this.answerShow=!0,this.greenCorrect=!0,this.redWrong=!1,this.doubanShow=!0,this.nextShow=!0,this.peeped?(this.yellowCorrect=!0,this.greenCorrect=!1,this.$store.commit("halfRight")):(this.yellowCorrect=!1,this.greenCorrect=!0,this.$store.commit("allRight"))):(this.verifyShow=!0,this.surrenderShow=!0,this.inputShow=!0,this.answerShow=!1,this.greenCorrect=!1,this.yellowCorrect=!1,this.redWrong=!0,this.doubanShow=!1,clearTimeout(this.timer),this.timer=setTimeout(function(){t.redWrong=!1,clearTimeout(t.timer)},1500))},peepClick:function(){this.peepShow=!1,this.verifyShow=!0,this.surrenderShow=!0,this.inputShow=!0,this.tipShow=!0,this.answerShow=!1,this.greenCorrect=!1,this.yellowCorrect=!1,this.redWrong=!1,this.doubanShow=!1,this.nextShow=!1,this.peeped=!0,this.redAlert=!1,this.$store.commit("peepStatus")},resetPanel:function(){var t=this.$store.state.currentQuestion;this.standardAnswer=this.$store.state.movieList[t].movieName,this.keyIn="",this.tipLength=Math.ceil(.25*this.standardAnswer.length),this.tipMessage=this.standardAnswer.substr(0,this.tipLength),this.getInformationCard(),-2==this.$store.state.movieList[t].status?(this.peepShow=!0,this.verifyShow=!0,this.surrenderShow=!0,this.inputShow=!0,this.tipShow=!1,this.answerShow=!1,this.greenCorrect=!1,this.yellowCorrect=!1,this.redWrong=!1,this.doubanShow=!1,this.nextShow=!1,this.peeped=!1,this.redAlert=!1):-1==this.$store.state.movieList[t].status?(this.peepShow=!1,this.verifyShow=!0,this.surrenderShow=!0,this.inputShow=!0,this.tipShow=!0,this.answerShow=!1,this.greenCorrect=!1,this.yellowCorrect=!1,this.redWrong=!1,this.doubanShow=!1,this.nextShow=!1,this.peeped=!0,this.redAlert=!1):0==this.$store.state.movieList[t].status?(this.peepShow=!1,this.verifyShow=!1,this.surrenderShow=!1,this.inputShow=!1,this.tipShow=!1,this.answerShow=!0,this.greenCorrect=!1,this.yellowCorrect=!1,this.redWrong=!1,this.doubanShow=!0,this.nextShow=!0,this.redAlert=!0):1==this.$store.state.movieList[t].status?(this.peepShow=!1,this.verifyShow=!1,this.surrenderShow=!1,this.inputShow=!1,this.tipShow=!1,this.answerShow=!0,this.yellowCorrect=!0,this.greenCorrect=!1,this.redWrong=!1,this.doubanShow=!0,this.nextShow=!0,this.yellowCorrect=!0,this.greenCorrect=!1,this.redAlert=!1):2==this.$store.state.movieList[t].status&&(this.peepShow=!1,this.verifyShow=!1,this.surrenderShow=!1,this.inputShow=!1,this.tipShow=!1,this.answerShow=!0,this.yellowCorrect=!1,this.greenCorrect=!0,this.redWrong=!1,this.doubanShow=!0,this.nextShow=!0,this.yellowCorrect=!1,this.greenCorrect=!0)},getMovieList:function(){function t(t,e){this.id=t,this.fileName=e,this.movieName=e.substr(0,e.indexOf(".")),this.status=-2}for(var e in this.$store.state.movieJson){var s=new t(this.$store.state.movieJson[e],e);this.$store.commit("addObject",s)}this.$store.commit("setGetFlag")},getImgSrc:function(){return"../static/noName/"+this.$store.state.movieList[this.$store.state.currentQuestion].fileName},getOriginImg:function(){return"../static/original/"+this.$store.state.movieList[this.$store.state.currentQuestion].fileName},getInformationCard:function(){var t=this;h.a.ajax({type:"get",async:!1,url:"https://api.douban.com/v2/movie/subject/"+this.$store.state.movieList[this.$store.state.currentQuestion].id,dataType:"jsonp",jsonp:"callback",jsonpCallback:"success_jsonpCallback",success:function(e){t.cardImgSrc=e.images.small,t.cardDirector=e.directors[0].name,t.cardYear=e.year,t.cardTitle=e.title},error:function(t){console.log(t)}})}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"quiz_page"}},[s("v-app",[s("v-toolbar",{attrs:{app:""}},[s("v-btn",{attrs:{color:"blue lighten-2",dark:"",depressed:"",round:""},on:{click:function(e){t.$store.commit("lastQuiz"),t.resetPanel()}}},[s("v-icon",{attrs:{dark:""}},[t._v("arrow_back_ios")]),t._v("上一题\n      ")],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.nextShow,expression:"nextShow"}],attrs:{color:"blue lighten-2",dark:"",depressed:"",round:""},on:{click:function(e){t.$store.commit("nextQuiz"),t.resetPanel()}}},[t._v("\n        下一题 "),s("v-icon",{attrs:{dark:""}},[t._v("arrow_forward_ios")])],1)],1),t._v(" "),s("v-content",[s("v-container",{attrs:{fluid:"","grid-list-md":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("p",{staticClass:"text-xs-center display-1 cyan--text"},[t._v(t._s(this.$store.state.currentQuestion+1)+"/"+t._s(t.$store.state.movieList.length))])]),t._v(" "),s("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg4:""}},[-2==t.$store.state.movieList[this.$store.state.currentQuestion].status||-1==t.$store.state.movieList[this.$store.state.currentQuestion].status?s("v-img",{attrs:{src:t.getImgSrc()}}):s("v-img",{attrs:{src:t.getOriginImg()}})],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg8:""}},[s("v-container",{attrs:{fluid:"","grid-list-lg":""}},[s("v-layout",{attrs:{"align-center":"","justify-space-around":"",column:"","fill-height":""}},[s("transition",{attrs:{name:"fade"}},[s("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.tipShow,expression:"tipShow"}],attrs:{xs6:""}},[s("p",{staticClass:"headline blue-grey--text font-weight-medium"},[t._v("开头"+t._s(t.tipLength)+"个字为："+t._s(t.tipMessage))])])],1),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.answerShow?s("v-flex",{attrs:{xs6:""}},[s("p",{staticClass:"display-1 blue-grey--text font-weight-medium"},[t._v(t._s(t.standardAnswer))])]):t._e()],1),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("v-flex",{attrs:{xs6:""}},[s("v-alert",{attrs:{value:t.greenCorrect,color:"green lighten-2",type:"success",transition:"scale-transition",outline:""}},[t._v("对了！")])],1)],1),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("v-flex",{attrs:{xs6:""}},[s("v-alert",{attrs:{value:t.yellowCorrect,color:"yellow darken-1",type:"success",transition:"scale-transition",outline:""}},[t._v("（偷看后）对了！")])],1)],1),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("v-flex",{attrs:{xs6:""}},[s("v-alert",{attrs:{value:t.redWrong,color:"red darken-1",type:"success",transition:"scale-transition",outline:"",icon:"error"}},[t._v("错误！")])],1)],1),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("v-flex",{attrs:{xs6:""}},[s("v-alert",{attrs:{value:t.redAlert,color:"red darken-1",type:"success",transition:"scale-transition",outline:"",icon:"error"}},[t._v("你未能答出此题！")])],1)],1),t._v(" "),s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.inputShow,expression:"inputShow"}],model:{value:t.keyIn,callback:function(e){t.keyIn=e},expression:"keyIn"}})],1),t._v(" "),s("v-flex",{attrs:{xs6:""}},[s("transition",{attrs:{name:"fade"}},[s("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.verifyShow,expression:"verifyShow"}],staticClass:"title",attrs:{depressed:"",round:"",dark:"",color:"blue lighten-2",large:""},on:{click:t.verifyClick}},[t._v("验证")])],1)],1),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("v-flex",{attrs:{xs6:""}},[s("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.peepShow,expression:"peepShow"}],staticClass:"title",attrs:{depressed:"",round:"",dark:"",color:"orange lighten-2",large:""},on:{click:t.peepClick}},[t._v("偷看")])],1)],1),t._v(" "),s("v-flex",{attrs:{xs6:""}},[s("transition",{attrs:{name:"fade"}},[s("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.surrenderShow,expression:"surrenderShow"}],staticClass:"title",attrs:{depressed:"",round:"",dark:"",color:"red lighten-2",large:""},on:{click:t.surrenderClick}},[t._v("投降")])],1)],1),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",{directives:[{name:"show",rawName:"v-show",value:t.doubanShow,expression:"doubanShow"}],staticClass:"gray--text pa-2",attrs:{color:"grey lighten-4",width:"320px"}},[s("v-layout",[s("v-flex",{attrs:{xs5:""}},[s("v-img",{attrs:{src:t.cardImgSrc,height:"125px",contain:""}})],1),t._v(" "),s("v-flex",{attrs:{xs7:""}},[s("v-card-title",{staticClass:"py0",attrs:{"primary-title":""}},[s("div",[s("div",{staticClass:"headline"},[t._v(t._s(t.cardTitle))]),t._v(" "),s("div",[t._v("导演："+t._s(t.cardDirector))]),t._v(" "),s("div",[t._v("年份："+t._s(t.cardYear))])])])],1)],1),t._v(" "),s("v-divider",{attrs:{light:""}}),t._v(" "),s("v-card-actions",{staticClass:"pa-3"},[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{depressed:"",round:"",dark:"",color:"teal lighten-3",to:{name:"moive"}}},[t._v("展开")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),s("v-footer",{attrs:{app:""}},[s("v-btn",{attrs:{color:"blue lighten-3",dark:"",depressed:"",to:{name:"WelcomePage"}}},[t._v("主页")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{attrs:{color:"blue lighten-3",dark:"",depressed:"",to:{name:"scoreboard"}}},[t._v("积分榜")])],1)],1)],1)},staticRenderFns:[]};var p=s("VU/8")(d,u,!1,function(t){s("Pcvx")},"data-v-1fab2c10",null).exports,g={name:"movie",data:function(){return{movieData:{},postM:""}},mounted:function(){this.getMovie()},methods:{getMovie:function(){var t=this;h.a.ajax({type:"get",async:!1,url:"https://api.douban.com/v2/movie/subject/"+this.$store.state.movieList[this.$store.state.currentQuestion].id,dataType:"jsonp",jsonp:"callback",jsonpCallback:"success_jsonpCallback",success:function(e){t.movieData=e,t.postM=e.images.small.replace(/s_ratio_poster/,"l_ratio_poster")},error:function(t){console.log(t)}})}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"movie"}},[s("v-app",[s("v-toolbar",{attrs:{app:"",fixed:""}},[s("v-btn",{attrs:{color:"blue lighten-2",dark:"",depressed:"",round:"",to:"/QuizPage"}},[s("v-icon",{attrs:{dark:""}},[t._v("arrow_back_ios")]),t._v("返回答题\n      ")],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{attrs:{color:"blue lighten-2",dark:"",depressed:"",round:"",href:t.movieData.alt,target:"_blank"}},[t._v("转到豆瓣\n        "),s("v-icon",{attrs:{dark:""}},[t._v("arrow_forward_ios")])],1)],1),t._v(" "),s("v-content",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",md6:""}},[s("v-img",{attrs:{src:this.postM}})],1),t._v(" "),s("v-flex",{attrs:{xs12:"",md6:"","fill-height":""}},[s("v-card",{staticClass:"pl-3"},[s("v-card-text",{staticClass:"display-1"},[t._v("\n                "+t._s(t.movieData.title)+"\n              ")]),t._v(" "),s("v-card-text",[t._v("\n                导演: "),t._l(t.movieData.directors,function(e){return s("span",{key:e},[t._v(t._s(e.name)+" ")])})],2),t._v(" "),s("v-card-text",[t._v("\n                豆瓣评分: "+t._s(t.movieData.rating.average)+"/10\n              ")]),t._v(" "),s("v-card-text",[t._v("\n                类型: "),t._l(t.movieData.genres,function(e){return s("span",{key:e},[t._v(t._s(e)+" ")])})],2),t._v(" "),s("v-card-text",[t._v("\n                制片国家/地区： "),t._l(t.movieData.countries,function(e){return s("span",{key:e},[t._v(t._s(e)+" ")])})],2),t._v(" "),s("v-card-text",[t._v("\n                年份： "+t._s(t.movieData.year)+"\n              ")])],1),t._v(" "),s("v-card",{staticClass:"mt-3",attrs:{xs12:"",md6:""}},[s("v-card-text",{staticClass:"display-1"},[t._v("\n                剧情简介:\n              ")]),t._v(" "),s("v-card-text",{staticClass:"subheading"},[t._v("\n                "+t._s(t.movieData.summary)+"\n              ")])],1)],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[s("v-layout",{attrs:{row:"",wrap:""}},t._l(t.movieData.casts,function(e,r){return s("v-flex",{key:r,attrs:{xs12:"",sm6:"",md6:"",lg4:"",xl3:""}},[s("v-card",[s("v-img",{attrs:{src:e.avatars.small}}),t._v(" "),s("v-card-text",{staticClass:"headline text-xs-center text-sm-center text-md-center text-lg-center text-xl-center"},[t._v(t._s(e.name))])],1)],1)}))],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var _=s("VU/8")(g,m,!1,function(t){s("F5pk")},"data-v-503b3cfe",null).exports,f={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"instruction"}},[r("v-app",[r("v-toolbar",{attrs:{app:"",fixed:""}},[r("v-btn",{attrs:{color:"blue lighten-2",dark:"",depressed:"",round:"",to:{name:"WelcomePage"}}},[r("v-icon",{attrs:{dark:""}},[t._v("arrow_back_ios")]),t._v("返回主页\n      ")],1)],1),t._v(" "),r("v-content",[r("v-container",{attrs:{"grid-list-xl":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",[r("v-card",{staticClass:"px-2"},[r("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v("\n                游戏说明\n              ")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",[t._v("\n                请在答题页面的输入框内输入电影的中文名，仅输入正题，切勿输入代数以及副标题。比如《王的男人2：秘密服务》只需要填写王的男人。"),r("br"),t._v("点击偷看按钮可偷看部分答案，但是最终得分会减半。"),r("br"),t._v("再想不出点击投降查看完整答案。\n                "),r("br"),t._v("电影的详细资料来自于豆瓣的api，包括答题时底下的卡片和展开的网页。豆瓣的api经常抽风（也可能是访问过于频繁所致），底下的卡片不显示内容时，请勿点击，否则会白屏，这时手动按手机返回键（iPhone就自求多福了）\n              ")])],1)],1),t._v(" "),r("v-flex",[r("v-card",{staticClass:"px-2"},[r("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v("\n                图片说明\n              ")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",[t._v("\n                本网页中的大部分图片来自网络搜索。少部分来自B站影视区UP主“电影最TOP”的淘宝店（有水印）。极少部分GV画质的原图被我手动照着重画了。"),r("br"),t._v("图片只作交流学习，不涉及商用。若有侵权请联系删除。\n              ")])],1)],1),t._v(" "),r("v-flex",[r("v-card",{staticClass:"px-2"},[r("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v("\n                此网页与作者\n              ")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",[t._v("\n                因为新学了vue框架，平时也喜欢看电影，所以弄个网页来练练手。此网页用框架vuetify作为UI美化，外加vue-router,vuex和axios等全家桶。查看源码请点击下面github。\n                "),r("br"),t._v("码代码之外我还喜欢摄影，其他社交网站也求一波关注，有我的摄影作品。\n                "),r("br"),t._v("下面的卡片是我上一个前端项目，用原生js写的图片博客，也欢迎点进去参观。\n              ")]),t._v(" "),r("transition",{attrs:{name:"fade"}},[r("img",{directives:[{name:"show",rawName:"v-show",value:t.wechatShow,expression:"wechatShow"}],attrs:{src:s("4/8t")}})]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-layout",{staticClass:"py-3",attrs:{"align-center":"","justify-space-around":"",row:""}},[r("v-btn",{attrs:{color:"blue lighten-3",dark:"",depressed:"",href:"https://github.com/Combo819/film_quiz",target:"_blank"}},[t._v("github")]),t._v(" "),r("v-btn",{attrs:{color:"blue lighten-3",dark:"",depressed:"",href:"https://weibo.com/1957307977",target:"_blank"}},[t._v("weibo")]),t._v(" "),r("v-btn",{attrs:{color:"blue lighten-3",dark:"",depressed:""},on:{click:function(e){t.wechatShow=!t.wechatShow}}},[t._v("微信")])],1)],1)],1)],1),t._v(" "),r("v-flex",[r("v-card",{attrs:{href:"https://combo819.github.io/myPhotoBlog/index.html",target:"_blank"}},[r("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v("\n                早前作品\n              ")]),t._v(" "),r("v-img",{attrs:{"aspect-ratio":"1",src:"./static/cover/previousWork.png"}})],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var x=s("VU/8")({name:"instruction",data:function(){return{wechatShow:!1}}},f,!1,function(t){s("3lGV")},"data-v-2017643a",null).exports,w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"scoreboard"}},[s("v-app",[s("v-toolbar",{attrs:{app:"",fixed:""}},[s("v-btn",{attrs:{color:"blue lighten-2",dark:"",depressed:"",round:"",to:{name:"WelcomePage"}}},[s("v-icon",{attrs:{dark:""}},[t._v("arrow_back_ios")]),t._v("返回主页\n      ")],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{attrs:{color:"blue lighten-2",dark:"",depressed:"",round:"",to:{name:"QuizPage"}}},[t._v("返回答题\n        "),s("v-icon",{attrs:{dark:""}},[t._v("arrow_forward_ios")])],1)],1),t._v(" "),s("v-content",[s("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[s("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",[s("v-card-text",{staticClass:"display-1"},[t._v("\n                积分榜\n              ")])],1)],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-card",[s("v-card-text",{staticClass:"display-1"},[t._v("\n                当前积分:"+t._s(t.allScoreSum)+"\n              ")])],1)],1),t._v(" "),t.checkallAnswered?s("v-flex",{attrs:{xs12:""}},[s("v-card",{attrs:{to:{name:"egg"}}},[s("v-img",{attrs:{"aspect-ratio":"1",src:"./static/cover/egg.jpg",position:"center bottom"}}),t._v(" "),s("v-card-text",{staticClass:"headline text-xs-center text-sm-center text-md-center text-lg-center text-xl-center"},[t._v("彩蛋")])],1)],1):t._e()],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":"",wrap:""}},t._l(t.$store.state.movieList,function(e,r){return s("v-flex",{key:r,attrs:{xs2:""}},[s("v-card",{attrs:{color:t.scoreColor(r)}},[e.status>=0?s("v-card-text",[t._v("\n                  "+t._s(r+1)),s("br"),t._v(t._s(e.movieName)+"\n                ")]):s("v-card-text",[t._v("\n                  "+t._s(r+1)+"\n                ")])],1)],1)}))],1)],1)],1)],1)],1)},staticRenderFns:[]};var b=s("VU/8")({name:"scoreboard",data:function(){return{scoreColor:function(t){return this.$store.state.movieList[t].status<0?null:0==this.$store.state.movieList[t].status?"red":1==this.$store.state.movieList[t].status?"orange":2==this.$store.state.movieList[t].status?"green":void 0}}},mounted:function(){this.$store.state.getFlag&&this.getMovieList()},methods:{getMovieList:function(){function t(t,e){this.id=t,this.fileName=e,this.movieName=e.substr(0,e.indexOf(".")),this.status=-2}for(var e in this.$store.state.movieJson){var s=new t(this.$store.state.movieJson[e],e);this.$store.commit("addObject",s)}this.$store.commit("setGetFlag")}},computed:{allScoreSum:function(){return this.$store.getters.scoreSum},checkallAnswered:function(){return this.$store.getters.checkallAnswer}}},w,!1,function(t){s("Dv50")},"data-v-347ba37b",null).exports,y={name:"egg",data:function(){return{redWrong1:!1,prize1:!1,typeinBar1:!0,verifyShow1:!0,keyIn1:"",redWrong2:!1,prize2:!1,typeinBar2:!0,verifyShow2:!0,keyIn2:""}},mounted:function(){},methods:{verifyClick1:function(){var t=this;"the man who changed china"===this.keyIn1.toLowerCase()?(this.prize1=!0,this.typeinBar1=!1,this.verifyShow1=!1):(clearTimeout(this.timer),this.redWrong1=!0,this.timer=setTimeout(function(){t.redWrong1=!1,clearTimeout(t.timer)},1500))},verifyClick2:function(){var t=this;"高佬"===this.keyIn2.toLowerCase()?(this.prize2=!0,this.typeinBar2=!1,this.verifyShow2=!1):(clearTimeout(this.timer),this.redWrong2=!0,this.timer=setTimeout(function(){t.redWrong2=!1,clearTimeout(t.timer)},1500))}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"egg"}},[s("v-app",[s("v-toolbar",{attrs:{app:""}},[s("v-btn",{attrs:{color:"blue lighten-2",dark:"",depressed:"",round:"",to:{name:"scoreboard"}}},[s("v-icon",{attrs:{dark:""}},[t._v("arrow_back_ios")]),t._v("积分榜\n      ")],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{attrs:{color:"blue lighten-2",dark:"",depressed:"",round:"",to:{name:"WelcomePage"}}},[t._v("\n        主页 "),s("v-icon",{attrs:{dark:""}},[t._v("arrow_forward_ios")])],1)],1),t._v(" "),s("v-content",[s("v-container",{attrs:{fluid:"","grid-list-md":""}},[s("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-space-around":""}},[s("v-flex",{attrs:{xs12:""}},[s("p",{staticClass:"text-xs-center display-1 cyan--text"},[t._v("彩蛋（二选一）")])]),t._v(" "),s("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl6:""}},[s("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg4:""}},[s("v-img",{attrs:{src:"./static/cover/eggImg.png"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("p",{staticClass:"text-xs-left headline grey--text"},[t._v("请输入这本书的英文名")])]),t._v(" "),s("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg8:""}},[s("v-container",{attrs:{fluid:"","grid-list-lg":""}},[s("v-layout",{attrs:{"align-center":"","justify-space-around":"",column:"","fill-height":""}},[s("transition",{attrs:{name:"fade"}},[s("v-flex",{attrs:{xs6:""}},[s("v-alert",{attrs:{color:"green lighten-2",type:"success",transition:"scale-transition",value:t.prize1,outline:""}},[t._v("彩蛋打开！")])],1)],1),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("v-flex",{attrs:{xs6:""}},[s("v-alert",{attrs:{color:"red darken-1",type:"success",transition:"scale-transition",value:t.redWrong1,outline:"",icon:"error"}},[t._v("错误！")])],1)],1),t._v(" "),t.typeinBar1?s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{model:{value:t.keyIn1,callback:function(e){t.keyIn1=e},expression:"keyIn1"}})],1):t._e(),t._v(" "),s("v-flex",{attrs:{xs6:""}},[s("transition",{attrs:{name:"fade"}},[t.verifyShow1?s("v-btn",{staticClass:"title",attrs:{depressed:"",round:"",dark:"",color:"blue lighten-2",large:""},on:{click:t.verifyClick1}},[t._v("验证")]):t._e()],1)],1)],1)],1)],1)],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl6:""}},[s("v-layout",{attrs:{"align-center":"","justify-space-around":"",column:"","fill-height":""}}),t._v(" "),s("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg4:""}},[s("v-img",{attrs:{src:"./static/cover/xixi.png"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("p",{staticClass:"text-xs-left headline grey--text"},[t._v("这个男人来自新疆，请问他的外号")])]),t._v(" "),s("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg8:""}},[s("v-container",{attrs:{fluid:"","grid-list-lg":""}},[s("v-layout",{attrs:{"align-center":"","justify-space-around":"",column:"","fill-height":""}},[s("transition",{attrs:{name:"fade"}},[s("v-flex",{attrs:{xs6:""}},[s("v-alert",{attrs:{color:"green lighten-2",type:"success",transition:"scale-transition",value:t.prize2,outline:""}},[t._v("彩蛋打开！")])],1)],1),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("v-flex",{attrs:{xs6:""}},[s("v-alert",{attrs:{color:"red darken-1",type:"success",transition:"scale-transition",value:t.redWrong2,outline:"",icon:"error"}},[t._v("错误！")])],1)],1),t._v(" "),t.typeinBar2?s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{model:{value:t.keyIn2,callback:function(e){t.keyIn2=e},expression:"keyIn2"}})],1):t._e(),t._v(" "),s("v-flex",{attrs:{xs6:""}},[s("transition",{attrs:{name:"fade"}},[t.verifyShow2?s("v-btn",{staticClass:"title",attrs:{depressed:"",round:"",dark:"",color:"blue lighten-2",large:""},on:{click:t.verifyClick2}},[t._v("验证")]):t._e()],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var k=s("VU/8")(y,S,!1,function(t){s("BbB3")},"data-v-81a9cae6",null).exports;r.default.use(n.a);var j=new n.a({routes:[{path:"/moive",name:"moive",component:_},{path:"/QuizPage",name:"QuizPage",component:p},{path:"/",name:"WelcomePage",component:l},{path:"/instruction",name:"instrucion",component:x},{path:"/scoreboard",name:"scoreboard",component:b},{path:"/egg",name:"egg",component:k}]}),C=(s("7zck"),s("3EgV")),$=s.n(C),L=s("mtWM"),W=s.n(L),I=s("NYxO");r.default.use(I.a);var Q=new I.a.Store({state:{currentQuestion:0,movieLength:0,movieList:[],getFlag:!0,sum:0,allAnswered:null,movieJson:{"2001太空漫游.jpg":1292226,"V字仇杀队.jpg":1309046,"三傻大闹宝莱坞.jpg":3793023,"两杆大烟枪.jpg":1293350,"侏罗纪公园.jpg":1292523,"冰川时代.jpg":1291578,"剪刀手爱德华.jpg":1292370,"千钧一发.jpg":1300117,"华尔街之狼.png":2997076,"发条橙.jpg":1292233,"回到未来.jpg":1300555,"国王的演讲.png":4023638,"地心引力.jpg":3793783,"壮志凌云.jpg":1293799,"大白鲨.jpg":1294941,"大话西游.jpg":1299398,"天使爱美丽.jpg":1292215,"她.jpg":6722879,"少年派的奇幻漂流.jpg":1929463,"异形.jpg":11803087,"德州电锯杀人狂.jpg":1300392,"心灵捕手.png":1292656,"情书.png":1292220,"我是传奇.jpg":1820156,"我，机器人.jpg":1308843,"教父.jpg":1291841,"星球大战.jpg":1293838,"星际穿越.jpg":1889243,"杀死比尔.png":1291580,"沉默的羔羊.jpg":1293544,"泰坦尼克号.jpg":1292722,"消失的爱人.jpg":21318488,"火星救援.jpg":25864085,"爱乐之城.jpg":25934014,"独立日.png":1293013,"狮子王.jpg":1301753,"王牌特工.jpg":24405378,"现代启示录.jpg":1292260,"机器人总动员.jpg":2131459,"疯狂麦克斯.jpg":1295670,"盗梦空间.jpg":3541415,"碟中谍.jpg":1292484,"禁闭岛.jpg":2334904,"穿普拉达的女王.jpg":1482072,"第九区.jpg":3006772,"终结者.jpg":1300656,"美丽人生.jpg":1292063,"美国狙击手.png":21263666,"美女与野兽.jpg":25900945,"肖申克的救赎.jpg":1292052,"花样年华.jpg":1291557,"荒野猎人.jpg":5327268,"菲利普船长.jpg":4116480,"蝙蝠侠大战超人.jpg":24750534,"超能陆战队.jpg":11026735,"辛德勒的名单.jpg":1295124,"这个杀手不太冷.jpg":1295644,"速度与激情.jpg":1304899,"金刚.jpg":1309043,"钢铁巨人.jpg":1293863,"闪灵.jpg":1292225,"间谍之桥.jpg":25908051,"阿凡达.jpg":1652587,"阿波罗13号.jpg":1293785,"降临.jpg":21324900,"飞屋环游记.jpg":2129039,"鸟人.jpg":20438962,"黄金三镖客.jpg":1401118,"黑天鹅.jpg":1978709,"黑客帝国.jpg":1291843,"黑衣人.jpg":1301445,"楚门的世界.jpg":1292064,"舌尖上的中国.jpg":10606004}},mutations:{addObject:function(t,e){t.movieList.push(e)},setGetFlag:function(t){t.getFlag=!1},lastQuiz:function(t){if(!(t.currentQuestion>0))return!1;t.currentQuestion--},nextQuiz:function(t){if(!(t.currentQuestion<t.movieList.length-1))return!1;t.currentQuestion++},allRight:function(t){t.movieList[t.currentQuestion].status=2},halfRight:function(t){t.movieList[t.currentQuestion].status=1},peepStatus:function(t){t.movieList[t.currentQuestion].status=-1},surrenderStatus:function(t){t.movieList[t.currentQuestion].status=0}},getters:{scoreSum:function(t){t.sum=0;for(var e=0;e<t.movieList.length;e++)t.movieList[e].status>0&&(t.sum+=t.movieList[e].status);return t.sum},checkallAnswer:function(t){for(var e=0;e<t.movieList.length;e++)t.movieList[e].status>=0?t.allAnswered=!0:t.allAnswered=!1;return t.allAnswered}}});r.default.use($.a),r.default.config.productionTip=!1,r.default.prototype.$axios=W.a,new r.default({el:"#app",router:j,store:Q,components:{App:i},template:"<App/>"})},Pcvx:function(t,e){},PzVC:function(t,e){},RyTg:function(t,e){},ScHT:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ad32dc53b53456e020c5.js.map