(window.webpackJsonp=window.webpackJsonp||[]).push([["page-3"],{"08ba":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={};r.r(n),r.d(n,"getList",(function(){return u})),r.d(n,"getDetails",(function(){return o})),r("96cf");var a=r("1da1"),c=r("deed"),i="https://mechakucha-api.herokuapp.com/agefans";function u(){return s.apply(this,arguments)}function s(){return(s=Object(a.a)(regeneratorRuntime.mark((function e(){var t,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.abrupt("return",c.a.get(i,{params:{keyword:t}}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return b.apply(this,arguments)}function b(){return(b=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.get("".concat(i,"/").concat(t)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},"10ca":function(e,t,r){},"4deb":function(e,t,r){"use strict";r("10ca")},"4fa3":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a=Object(n.N)("data-v-21f09c71");Object(n.v)("data-v-21f09c71");var c={class:"w-full"},i={class:"flex items-center border-b border-b-2 border-teal-500"},u={class:"px-2"},s={class:"font-bold text-base"},o={class:"mb-1 text-xs"},b={class:"mb-1 text-xs"},l={class:"mb-1 text-xs"};Object(n.t)();var d=a((function(e,t,r,d,p,f){var j=Object(n.z)("router-link");return Object(n.s)(),Object(n.f)("div",null,[Object(n.i)("div",c,[Object(n.i)("div",i,[Object(n.L)(Object(n.i)("input",{class:"appearance-none bg-transparent border-none w-full text-gray-100 mr-3 px-2 text-xl leading-tight focus:outline-none",type:"text",placeholder:"請輸入關鍵字","onUpdate:modelValue":t[1]||(t[1]=function(e){return d.keyword=e}),onKeyup:t[2]||(t[2]=Object(n.M)((function(){return d.searchAnime.apply(d,arguments)}),["enter"]))},null,544),[[n.G,d.keyword,void 0,{trim:!0}]]),Object(n.i)("button",{class:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white my-2 py-1 px-2 rounded",type:"button",onClick:t[3]||(t[3]=function(){return d.searchAnime.apply(d,arguments)})},"搜尋")])]),Object(n.L)(Object(n.i)("div",null,"Loading...",512),[[n.H,d.isLoading]]),Object(n.L)(Object(n.i)("div",null,[(Object(n.s)(!0),Object(n.f)(n.a,null,Object(n.y)(d.animeList,(function(e){return Object(n.s)(),Object(n.f)(j,{key:e.id,to:{name:"AgefansDetails",params:{id:e.id}},class:"flex items-start my-2 p-2 border-b"},{default:a((function(){return[Object(n.i)("img",{class:"w-1/4",src:e.imgUrl,alt:""},null,8,["src"]),Object(n.i)("div",u,[Object(n.i)("div",s,Object(n.C)(e.title),1),Object(n.i)("div",o,Object(n.C)(e.originName),1),Object(n.i)("div",b,"類型: "+Object(n.C)(e.type),1),Object(n.i)("div",l,"放送日: "+Object(n.C)(e.dateAired),1)])]})),_:2},1032,["to"])})),128))],512),[[n.H,!d.isLoading]])])})),p=(r("96cf"),r("1da1")),f=(r("0613"),r("08ba")),j={setup:function(){var e=Object(n.x)(""),t=Object(n.x)([]),r=Object(n.x)(!1);function a(){return(a=Object(p.a)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return r.value=!0,n.next=5,f.a.getList(e.value);case 5:if(a=n.sent,r.value=!1,a.success){n.next=9;break}return n.abrupt("return");case 9:t.value=a.items;case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return{keyword:e,animeList:t,isLoading:r,searchAnime:function(){return a.apply(this,arguments)}}}};r("4deb"),j.render=d,j.__scopeId="data-v-21f09c71",t.default=j}}]);