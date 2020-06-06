(function(t){function e(e){for(var n,r,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"2c34":function(t,e,a){},"30b8":function(t,e,a){"use strict";var n=a("c8a1"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("RouterView"),a("Footer")],1)},i=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"jumbotron"},[a("h1",{staticClass:"display-4",attrs:{id:"tittle"}},[t._v(" Have you visited every state?")])])])}],c={name:"Header"},u=c,l=(a("30b8"),a("2877")),d=Object(l["a"])(u,r,o,!1,null,"03a4550b",null),f=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"m-2"},[a("span",{staticClass:"p-3"},[a("router-link",{attrs:{to:"/"}},[t._v("H-O-M-E")])],1),a("span",{staticClass:"p-3"},[a("router-link",{attrs:{to:"/about"}},[t._v("A-B-O-U-T")])],1)]),t._m(0)])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-right p-2"},[t._v("Header Image By "),a("a",{attrs:{href:"https://unsplash.com/photos/WZh1QZFB4kc"}},[t._v("Simone Busatto via Unsplash.")]),a("br"),a("a",{attrs:{href:"https://icons8.com/icon/QaHIbDj74XXB/map"}},[t._v("Map icon by Icons8")])])}],h={name:"Footer"},m=h,b=Object(l["a"])(m,p,v,!1,null,"8b72164e",null),_=b.exports,y={name:"App",components:{Header:f,Footer:_}},g=y,O=(a("034f"),Object(l["a"])(g,s,i,!1,null,null,null)),j=O.exports,S=a("bc3a"),x=a.n(S),V={getAll:function(){return x.a.get("/api/states/").then((function(t){return t.data}))},setVisited:function(t,e){return x.a.patch("/api/state/"+t,{visited:e}).then((function(t){return t.data}))},getOne:function(t){return x.a.get("/api/states/"+t).then((function(t){return t.data}))}},$=a("5f5b"),A=a("8c4f"),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"state-list"}},[a("Summary",{attrs:{total:t.totalVisited,visitedAll:t.visitedAll}}),a("div",{staticClass:"d-flex flex-wrap justify-content-around"},t._l(t.states,(function(e){return a("div",{key:e.name,staticClass:"p-2"},[a("State",{attrs:{state:e},on:{isVisited:t.updateVisited}})],1)})),0)],1)},w=[],k=(a("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"state-summary p-2 rounded"},[n("span",{staticClass:"m-2"},[t._v(t._s(t.state.name))]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.stateVisited,expression:"stateVisited"}],staticClass:"m-2",attrs:{id:"visited",type:"checkbox"},domProps:{checked:Array.isArray(t.stateVisited)?t._i(t.stateVisited,null)>-1:t.stateVisited},on:{change:[function(e){var a=t.stateVisited,n=e.target,s=!!n.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);n.checked?r<0&&(t.stateVisited=a.concat([i])):r>-1&&(t.stateVisited=a.slice(0,r).concat(a.slice(r+1)))}else t.stateVisited=s},function(e){return t.$emit("isVisited",t.stateName,t.stateVisited)}]}})]),n("p",[n("router-link",{attrs:{to:{name:"detail",params:{state:t.stateName}}}},[n("img",{staticClass:"map-icon",attrs:{src:a("596e")}})])],1)])}),E=[],M=(a("b0c0"),{name:"State",props:{state:Object},data:function(){return{stateName:this.state.name,stateVisited:this.state.visited}}}),P=M,z=(a("a510"),Object(l["a"])(P,k,E,!1,null,"725735e6",null)),H=z.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"summary"},[a("h3",[t._v("You have visited "+t._s(t.total)+" "+t._s(t.statesPlural))]),t.visitedAll?a("p",{attrs:{id:"visited-all"}},[t._v(" You have visited all 50 states and the District of Columbia! ")]):t._e()])},B=[],D=(a("a9e3"),{name:"Summary",props:{total:Number,visitedAll:Boolean},computed:{statesPlural:function(){return 1===this.total?"state":"states"}}}),N=D,F=(a("b268"),Object(l["a"])(N,T,B,!1,null,"e1dc1aa0",null)),L=F.exports,Y={name:"StateList",components:{State:H,Summary:L},data:function(){return{states:[]}},mounted:function(){this.getAll()},methods:{getAll:function(){var t=this;this.$stateService.getAll().then((function(e){t.states=e}))},updateVisited:function(t,e){var a=this;this.$stateService.setVisited(t,e).then((function(t){return a.getAll()}))}},computed:{totalVisited:function(){var t=this.states.filter((function(t){return t.visited}));return t.length},visitedAll:function(){var t=this.states.filter((function(t){return t.visited}));return t.length==this.states.length}}},I=Y,Q=Object(l["a"])(I,C,w,!1,null,"caf5e502",null),U=Q.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h2",[t._v("Where have you taveled to so far?")]),a("p",[t._v("Use this site to keep track of how many states you have visited")]),a("p",[t._v("A Vue.js site by Qian.")])])}],X={name:"About"},Z=X,R=Object(l["a"])(Z,J,W,!1,null,"5c085730",null),q=R.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"state-detail p-2"},[a("h2",[t._v("The State of "+t._s(t.state.name))]),t.state.visited?a("p",[t._v("You have visited this state")]):a("p",[t._v("You have not visited this state")]),a("div",{attrs:{id:"map-container"}},[a("l-map",{ref:"stateMap",staticStyle:{height:"100%",width:"100%"},attrs:{zoom:t.zoom,center:t.center}},[a("l-tile-layer",{attrs:{url:t.url}})],1)],1)])},K=[],tt=a("2699"),et=a("a40a"),at={name:"StateDetail",components:{LMap:tt["a"],LTileLayer:et["a"]},data:function(){return{state:{name:""},url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",zoom:2,center:[44,-103],bounds:null}},mounted:function(){this.state.name=this.$route.params.state,this.$refs.stateMap.mapObject.dragging.disable(),this.fetchStateData()},methods:{fetchStateData:function(){var t=this;this.$stateService.getOne(this.state.name).then((function(e){t.state=e,t.zoom=e.zoom,t.center=[e.lat,e.lon],console.log(t.center),t.$refs.stateMap.mapObject.flyTo(t.center,t.zoom)})).catch((function(t){return console.error(t)}))}}},nt=at,st=(a("fcd1"),Object(l["a"])(nt,G,K,!1,null,"26cec1fa",null)),it=st.exports,rt=new A["a"]({routes:[{path:"/",component:U},{path:"/about",component:q},{path:"/detail/:state",name:"detail",component:it}]});a("f9e3"),a("2dd8"),a("6cc5");n["default"].use(A["a"]),n["default"].use($["a"]),n["default"].prototype.$stateService=V,n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(j)},router:rt}).$mount("#app")},"596e":function(t,e,a){t.exports=a.p+"img/icons8-map.a1384b82.png"},"85ec":function(t,e,a){},a510:function(t,e,a){"use strict";var n=a("c73d"),s=a.n(n);s.a},b268:function(t,e,a){"use strict";var n=a("2c34"),s=a.n(n);s.a},c73d:function(t,e,a){},c8a1:function(t,e,a){},f3ec:function(t,e,a){},fcd1:function(t,e,a){"use strict";var n=a("f3ec"),s=a.n(n);s.a}});
//# sourceMappingURL=app.af74ea06.js.map