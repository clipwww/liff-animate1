(window.webpackJsonp=window.webpackJsonp||[]).push([["page-3"],{"4fa3":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=Object(r.Q)("data-v-3565023c");Object(r.C)("data-v-3565023c");var c=Object(r.i)("搜索"),i={class:"text-xs text-gray-500 my-1"},o={class:"text-xs text-gray-500"};Object(r.A)();var u=a((function(e,t,n,u,l,s){var b=Object(r.G)("Button"),j=Object(r.G)("VanSearch"),d=Object(r.G)("Skeleton"),f=Object(r.G)("Cell"),O=Object(r.G)("Image"),p=Object(r.G)("PullRefresh");return Object(r.z)(),Object(r.g)(p,{class:"mt-2",modelValue:e.refreshing,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.refreshing=t}),onRefresh:u.fetchData},{default:a((function(){return[Object(r.j)(j,{modelValue:e.keyword,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.keyword=t}),"show-action":"",placeholder:"請輸入關鍵字",onSearch:u.fetchData},{action:a((function(){return[Object(r.j)(b,{type:"primary",onClick:u.fetchData},{default:a((function(){return[c]})),_:1},8,["onClick"])]})),_:1},8,["modelValue","onSearch"]),e.loading?(Object(r.z)(),Object(r.g)(r.a,{key:0},Object(r.F)(10,(function(e){return Object(r.j)(f,{class:"py-2",key:e},{default:a((function(){return[Object(r.j)(d,{class:"p-0",row:2})]})),_:2},1024)})),64)):(Object(r.z)(!0),Object(r.g)(r.a,{key:1},Object(r.F)(e.list,(function(e){return Object(r.z)(),Object(r.g)(f,{key:e.id,title:e.title,size:"large","is-link":"",center:"",to:{name:"AgefansDetails",params:{id:e.id}}},{icon:a((function(){return[Object(r.j)(O,{src:e.imgUrl,class:"w-16 mr-2"},null,8,["src"])]})),label:a((function(){return[Object(r.j)("div",null,Object(r.K)(e.originName),1),Object(r.j)("div",i,"類型: "+Object(r.K)(e.type),1),Object(r.j)("div",o,"放送日: "+Object(r.K)(e.dateAired),1)]})),_:2},1032,["title","to"])})),128))]})),_:1},8,["modelValue","onRefresh"])})),l=(n("96cf"),n("5530")),s=n("1da1"),b=n("44bf"),j=n("7d5e"),d=n("58e6"),f=n("7744"),O=n("b650"),p=n("d961"),g=(n("0613"),n("08ba")),h={components:{VanSearch:p.a,Button:O.a,Cell:f.b,PullRefresh:d.a,Skeleton:j.a,Image:b.a},setup:function(){var e=Object(r.D)({keyword:"",list:[],refreshing:!1,loading:!1});function t(){return(t=Object(s.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.keyword){t.next=2;break}return t.abrupt("return");case 2:return e.refreshing=!1,e.loading=!0,t.next=6,g.a.getList(e.keyword);case 6:if(n=t.sent,e.loading=!1,n.success){t.next=10;break}return t.abrupt("return");case 10:e.list=n.items;case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.a)(Object(l.a)({},Object(r.L)(e)),{},{fetchData:function(){return t.apply(this,arguments)}})}};h.render=u,h.__scopeId="data-v-3565023c",t.default=h}}]);