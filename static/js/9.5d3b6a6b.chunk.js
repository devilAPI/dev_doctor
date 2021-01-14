(this["webpackJsonpdev-doctor"]=this["webpackJsonpdev-doctor"]||[]).push([[9],{140:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(131),a=n(132),i=function(){function e(t){Object(r.a)(this,e),this.part=void 0,this.name=void 0,this.description=void 0,this.index=void 0,Object.assign(this,t)}return Object(a.a)(e,[{key:"server",get:function(){return this.part.server}}]),e}()},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(131),a=n(141),i=n(143),c=n(142),s=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).text=void 0,Object.assign(Object(a.a)(i),e),i}return n}(n(140).a)},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(131),a=n(141),i=n(143),c=n(142),s=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).url=void 0,i.source=void 0,Object.assign(Object(a.a)(i),e),i}return n}(n(140).a)},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(132),a=n(131),i=n(141),c=n(143),s=n(142),o=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).questions=void 0,r.time=void 0,r.questions=e.questions.map((function(e,t){return e.quiz=Object(i.a)(r),e.index=t,new u(e)})),r}return n}(n(140).a),u=function(){function e(t){var n=this;Object(a.a)(this,e),this.quiz=void 0,this.title=void 0,this.description=void 0,this.evaluation=void 0,this.answers=void 0,this.index=void 0,Object.assign(this,t),this.answers=this.answers.map((function(e,t){return e.question=n,e.index=t,new l(e)}))}return Object(r.a)(e,[{key:"calculatePoints",value:function(){var e=0;return this.answers.forEach((function(t){e+=t.answered&&t.correct?t.points:0})),e}}]),e}(),l=function e(t){Object(a.a)(this,e),this.index=void 0,this.correct=void 0,this.name=void 0,this.description=void 0,this.question=void 0,this.points=void 0,this.answered=void 0,Object.assign(this,t),this.answered=!1}},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(135),a=n.n(r),i=n(136),c=n(131),s=n(132),o=n(144),u=n.n(o),l=n(147),d=n(148),h=n(149),j=function(){function e(t){var n=this;Object(c.a)(this,e),this.name=void 0,this.description=void 0,this.slug=void 0,this.course=void 0,this.items=void 0,Object.assign(this,t),this.items=this.items.map((function(e,t){var r;switch(e.part=n,e.index=t,null===(r=e.type)||void 0===r?void 0:r.toLowerCase()){case"text":return new l.a(e);case"video":return new d.a(e);case"quiz":return new h.a(e);default:return null}}))}return Object(s.a)(e,[{key:"server",get:function(){return this.course.server}}]),e}(),f=function(){function e(t){Object(c.a)(this,e),this.server=void 0,this.slug=void 0,this.name=void 0,this.description=void 0,this.icon=void 0,this.author=void 0,this.installed=void 0,this.body=void 0,this.lang=void 0,Object.assign(this,t)}return Object(s.a)(e,[{key:"fetchParts",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t,n,r,i=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.server.url,"/").concat(this.slug,"/config.yml"));case 2:return t=e.sent,e.next=5,t.text();case 5:return n=e.sent,r=u.a.parse(n),e.abrupt("return",Promise.all(r.parts.map((function(e,t){return i.fetchPart(e,t)}))));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchPart",value:function(){var e=Object(i.a)(a.a.mark((function e(t,n){var r,i,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.server.url,"/").concat(this.slug,"/").concat(t,"/config.yml"));case 2:return r=e.sent,e.next=5,r.text();case 5:return i=e.sent,(c=u.a.parse(i)).course=this,c.slug=t,c.index=n,e.abrupt("return",new j(c));case 11:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),m=function(){function e(t){Object(c.a)(this,e),this.url=void 0,this.icon=void 0,this.name=void 0,this.support=void 0,this.user=void 0,Object.assign(this,t)}return Object(s.a)(e,[{key:"fetchCourses",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t,n,r,i=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.url,"/config.yml"));case 2:return t=e.sent,e.next=5,t.text();case 5:return n=e.sent,r=u.a.parse(n),e.abrupt("return",Promise.all(r.courses.map((function(e){return i.fetchCourse(e)}))));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchCourse",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var n,r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.url,"/").concat(t,"/config.yml"));case 2:return n=e.sent,e.next=5,n.text();case 5:return r=e.sent,i=u.a.parse(r),e.next=9,caches.has("course-".concat(t));case 9:return i.installed=e.sent,i.slug=t,i.server=this,e.abrupt("return",new f(i));case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),v=function(){function e(t){Object(c.a)(this,e),this.name="",this.urls=["https://backend.dev-doctor.cf"],Object.assign(this,t)}return Object(s.a)(e,[{key:"fetchServers",value:function(){var e=this;return Promise.all(this.urls.map((function(t){return e.fetchServer(t)})))}},{key:"fetchServer",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var n,r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/config.yml"));case 2:return n=e.sent,e.next=5,n.text();case 5:return r=e.sent,(i=u.a.parse(r)).user=this,i.url=t,e.abrupt("return",new m(i));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"save",value:function(){localStorage.setItem("user",JSON.stringify(this))}}],[{key:"load",value:function(){return new e(JSON.parse(localStorage.getItem("user")))}}]),e}()},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var r=n(8),a=n(43),i=n(0),c=n.n(i),s=n(97),o=n(673),u=n(159),l=n.n(u),d=n(177),h=n.n(d),j=n(166),f=n.n(j),m=n(179),v=n.n(m),b=n(180),p=n.n(b),x=n(55),O=n(178),g=n.n(O),C=n(181),y=n.n(C),w=n(674),L=n(675),k=n(676),E=n(42),S=n(677),M=n(648),P=n(681),z=n(683),B=n(684),Z=n(685);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var N=i.createElement("g",{transform:"matrix(1.49716,0,0,1.49716,-111.691,-149.981)"},i.createElement("g",{id:"Logo"})),R=i.createElement("g",{transform:"matrix(-1,0,0,1,413.734,0)"},i.createElement("g",{transform:"matrix(-0.667932,0,0,0.667932,606.304,100.177)"},i.createElement("path",{d:"M690.66,117.1L729.252,117.1C737.1,117.1 745.358,124.145 743.471,131.319L709.649,269.368C707.599,278.404 703.277,283.588 695.429,283.588L630.443,283.588L630.429,308.793L696.295,308.793C710.164,308.793 725.994,300.895 730.012,279.239L765.214,134.707C769.815,112.812 749.804,97.016 734.516,97.334L690.66,97.311L690.66,117.1ZM748.961,104.514C754.291,106.411 760.696,114.681 761.664,119.314C763.134,126.348 753.183,125.131 752.205,120.902C751.338,117.149 750.012,115.503 747.642,114.051C740.944,109.947 745.329,103.221 748.961,104.514Z"})),i.createElement("g",null,i.createElement("g",{transform:"matrix(108.574,0,0,108.574,138.793,202.13)"},i.createElement("path",{d:"M0.028,-0.34C0.053,-0.341 0.073,-0.348 0.089,-0.361C0.105,-0.373 0.115,-0.391 0.121,-0.414C0.126,-0.436 0.129,-0.433 0.129,-0.487C0.129,-0.542 0.134,-0.571 0.142,-0.588C0.15,-0.604 0.16,-0.617 0.172,-0.627C0.183,-0.637 0.198,-0.645 0.216,-0.65C0.229,-0.653 0.249,-0.655 0.277,-0.655L0.304,-0.655L0.304,-0.578L0.289,-0.578C0.255,-0.578 0.233,-0.572 0.222,-0.56C0.211,-0.548 0.206,-0.521 0.205,-0.478C0.206,-0.449 0.204,-0.443 0.201,-0.421C0.192,-0.341 0.151,-0.304 0.121,-0.289C0.089,-0.271 0.053,-0.26 0.028,-0.261L0.028,-0.34Z"})),i.createElement("g",{transform:"matrix(108.574,0,0,-108.574,138.793,141.402)"},i.createElement("path",{d:"M0.028,-0.34C0.053,-0.341 0.073,-0.348 0.089,-0.361C0.105,-0.373 0.115,-0.391 0.121,-0.414C0.126,-0.436 0.129,-0.433 0.129,-0.487C0.129,-0.542 0.134,-0.571 0.142,-0.588C0.15,-0.604 0.16,-0.617 0.172,-0.627C0.183,-0.637 0.198,-0.645 0.216,-0.65C0.229,-0.653 0.249,-0.655 0.277,-0.655L0.304,-0.655L0.304,-0.578L0.289,-0.578C0.255,-0.578 0.233,-0.572 0.222,-0.56C0.211,-0.548 0.206,-0.521 0.205,-0.478C0.206,-0.449 0.204,-0.443 0.201,-0.421C0.192,-0.341 0.151,-0.304 0.121,-0.289C0.089,-0.271 0.053,-0.26 0.028,-0.261L0.028,-0.34Z"})))),J=i.createElement("g",null,i.createElement("g",{transform:"matrix(108.574,0,0,108.574,138.793,202.13)"},i.createElement("path",{d:"M0.028,-0.34C0.053,-0.341 0.073,-0.348 0.089,-0.361C0.105,-0.373 0.115,-0.391 0.121,-0.414C0.126,-0.436 0.129,-0.433 0.129,-0.487C0.129,-0.542 0.134,-0.571 0.142,-0.588C0.15,-0.604 0.16,-0.617 0.172,-0.627C0.183,-0.637 0.198,-0.645 0.216,-0.65C0.229,-0.653 0.249,-0.655 0.277,-0.655L0.304,-0.655L0.304,-0.578L0.289,-0.578C0.255,-0.578 0.233,-0.572 0.222,-0.56C0.211,-0.548 0.206,-0.521 0.205,-0.478C0.206,-0.449 0.204,-0.443 0.201,-0.421C0.192,-0.341 0.151,-0.304 0.121,-0.289C0.089,-0.271 0.053,-0.26 0.028,-0.261L0.028,-0.34Z"})),i.createElement("g",{transform:"matrix(108.574,0,0,-108.574,138.793,141.402)"},i.createElement("path",{d:"M0.028,-0.34C0.053,-0.341 0.073,-0.348 0.089,-0.361C0.105,-0.373 0.115,-0.391 0.121,-0.414C0.126,-0.436 0.129,-0.433 0.129,-0.487C0.129,-0.542 0.134,-0.571 0.142,-0.588C0.15,-0.604 0.16,-0.617 0.172,-0.627C0.183,-0.637 0.198,-0.645 0.216,-0.65C0.229,-0.653 0.249,-0.655 0.277,-0.655L0.304,-0.655L0.304,-0.578L0.289,-0.578C0.255,-0.578 0.233,-0.572 0.222,-0.56C0.211,-0.548 0.206,-0.521 0.205,-0.478C0.206,-0.449 0.204,-0.443 0.201,-0.421C0.192,-0.341 0.151,-0.304 0.121,-0.289C0.089,-0.271 0.053,-0.26 0.028,-0.261L0.028,-0.34Z"}))),T=i.createElement("g",{transform:"matrix(1,0,0,1,42.6842,-0.13639)"},i.createElement("circle",{cx:206.996,cy:275.644,r:6.809})),F=i.createElement("g",{transform:"matrix(0.803658,0,0,0.803658,99.1619,55.3209)"},i.createElement("circle",{cx:206.996,cy:275.644,r:6.809}));function K(e,t){var n=e.title,r=e.titleId,a=I(e,["title","titleId"]);return i.createElement("svg",q({width:"100%",height:"100%",viewBox:"0 0 400 400",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},ref:t,"aria-labelledby":r},a),n?i.createElement("title",{id:r},n):null,i.createElement("g",{id:"Typ1",transform:"matrix(1,0,0,1,-400,0)"},N,i.createElement("g",{transform:"matrix(1.49716,0,0,1.49716,288.309,-149.981)"},i.createElement("g",{id:"Logo1"},R,i.createElement("g",{transform:"matrix(1,0,0,1,2.64279,-2.22045e-16)"},i.createElement("g",{transform:"matrix(1,0,0,1,-47.3694,-61.5699)"},i.createElement("path",{d:"M193.484,239.962L166.584,239.962C161.342,239.962 155.826,244.668 157.086,249.459L179.677,341.667C181.046,347.702 183.933,351.165 189.175,351.165L294.727,351.165L294.736,368L188.596,368C179.333,368 168.76,362.725 166.076,348.26L142.563,251.722C139.49,237.098 152.856,226.548 163.067,226.76L193.484,226.744L193.484,239.962Z",style:{fill:"black"}})),J),i.createElement("g",{transform:"matrix(0.667932,0,0,0.667932,-192.571,100.177)"},i.createElement("path",{d:"M643.284,341.565C632.132,357.385 565.247,358.444 554.105,341.565C549.504,334.596 576.399,319.973 576.399,319.973C591.207,326.322 606.077,325.575 620.989,319.973C620.989,319.973 648.152,334.66 643.284,341.565ZM624.759,341.852L614.658,329.833L621.654,326.103L636.741,336.902C633.636,339.909 629.52,341.372 624.759,341.852Z",style:{fill:"black"}})),T,F,i.createElement("g",{transform:"matrix(1.49213,0,0,1.49213,-72.1048,-212.907)"},i.createElement("text",{x:"172.092px",y:"275.84px",style:{fontFamily:"'OpenSans-ExtraBold', 'Open Sans', sans-serif",fontWeight:800,fontSize:50,fill:"rgb(255,0,0)"}},"#"))))))}var G=i.forwardRef(K),W=(n.p,Object(s.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appBar:{zIndex:e.zIndex.drawer+1}}})));function A(e){var t=e.title,n=e.subtitle,i=Object(o.a)("common"),s=i.t,u=i.i18n,d=c.a.useState(null),j=Object(a.a)(d,2),m=j[0],b=j[1],O=c.a.useState(null),C=Object(a.a)(O,2),q=C[0],I=C[1],N=function(){b(null)},R=W();return Object(r.jsx)(w.a,{position:"fixed",className:R.appBar,children:Object(r.jsxs)(L.a,{children:[Object(r.jsx)(k.a,{component:x.b,edge:"start",className:R.menuButton,color:"inherit","aria-label":"menu",to:"/",children:Object(r.jsx)(E.a,{component:G,viewBox:"0 0 400 400"})}),Object(r.jsxs)("div",{className:R.title,children:[Object(r.jsxs)(S.a,{variant:"h6",children:["0.2.3"," ",t]}),n&&Object(r.jsx)(S.a,{variant:"subtitle1",color:"textSecondary",children:n})]}),Object(r.jsx)(k.a,{"aria-controls":"language-menu","aria-haspopup":"true",onClick:function(e){b(e.currentTarget)},children:Object(r.jsx)(l.a,{})}),Object(r.jsx)(M.a,{id:"language-menu",anchorEl:m,keepMounted:!0,open:Boolean(m),onClose:N,children:u.languages.map((function(e){return Object(r.jsx)(P.a,{onClick:function(){return t=e,u.changeLanguage(t),void N();var t},selected:e===u.language,children:s("language.".concat(e))},e)}))}),Object(r.jsx)(k.a,{"aria-controls":"account-menu","aria-haspopup":"true",onClick:function(e){I(e.currentTarget)},children:Object(r.jsx)(h.a,{})}),Object(r.jsxs)(M.a,{id:"account-menu",anchorEl:q,keepMounted:!0,open:Boolean(q),onClose:function(){I(null)},children:[Object(r.jsxs)(P.a,{children:[Object(r.jsx)(z.a,{children:Object(r.jsx)(f.a,{fontSize:"small"})}),Object(r.jsx)(B.a,{primary:s("profile")})]}),Object(r.jsxs)(P.a,{children:[Object(r.jsx)(z.a,{children:Object(r.jsx)(g.a,{fontSize:"small"})}),Object(r.jsx)(B.a,{primary:s("stats")})]}),Object(r.jsxs)(P.a,{component:x.b,to:"/settings",children:[Object(r.jsx)(z.a,{children:Object(r.jsx)(v.a,{fontSize:"small"})}),Object(r.jsx)(B.a,{primary:s("settings")})]}),Object(r.jsxs)(P.a,{children:[Object(r.jsx)(z.a,{children:Object(r.jsx)(p.a,{fontSize:"small"})}),Object(r.jsx)(B.a,{primary:s("info")})]}),Object(r.jsxs)(P.a,{component:Z.a,href:"https://codedoctor.tk/impress",target:"_blank",color:"inherit",children:[Object(r.jsx)(z.a,{children:Object(r.jsx)(y.a,{fontSize:"small"})}),Object(r.jsx)(B.a,{primary:s("impress")})]})]})]})})}},227:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(97),i=n(675),c=n(232),s=n(677),o=n(686),u=n(127),l=(n(0),n(673)),d=n(290),h=n(55),j=n(155),f=n(153),m=Object(a.a)((function(e){return{heroButtons:{marginTop:e.spacing(8)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(12,0,6)}}}));t.default=function(){var e,t=Object(l.a)("common").t,n=m(),a=f.a.load();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j.a,{title:"Home"}),Object(r.jsx)(i.a,{}),Object(r.jsx)("div",{className:n.heroContent,children:Object(r.jsxs)(c.a,{maxWidth:"sm",children:[Object(r.jsx)(s.a,{align:"center",variant:"h2",component:"h1",children:t("title")}),Object(r.jsx)(s.a,{align:"center",variant:"h5",color:"textSecondary",children:t("subtitle")}),(null===(e=a.name)||void 0===e?void 0:e.trim())&&Object(r.jsx)(s.a,{align:"center",children:Object(r.jsx)(d.a,{t:t,i18nKey:"welcome",values:{name:a.name}})}),Object(r.jsx)("div",{className:n.heroButtons,children:Object(r.jsxs)(o.a,{container:!0,spacing:2,justify:"center",children:[Object(r.jsx)(o.a,{item:!0,children:Object(r.jsx)(u.a,{component:h.b,to:"/courses",variant:"contained",color:"primary",children:t("courses")})}),Object(r.jsx)(o.a,{item:!0,children:Object(r.jsx)(u.a,{href:"https://discord.linwood.tk",variant:"outlined",color:"primary",children:t("discord")})})]})})]})})]})}},711:function(e,t,n){"use strict";n.r(t),n.d(t,"AddServerPage",(function(){return C}));var r=n(8),a=n(135),i=n.n(a),c=n(136),s=n(43),o=n(128),u=n(712),l=n(713),d=n(714),h=n(715),j=n(716),f=n(127),m=n(0),v=n.n(m),b=n(673),p=n(290),x=n(5),O=n(227),g=n(153);function C(e){var t=new URLSearchParams(Object(x.g)().search),n=g.a.load(),a=n.urls,C=t.get("url"),y=function(){e.history.push("/")};!a.find((function(e){return e===C}))&&(null===C||void 0===C?void 0:C.trim())||y();var w=v.a.useState(null),L=Object(s.a)(w,2),k=L[0],E=L[1],S=function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=E,e.next=3,n.fetchServer(C);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(m.useEffect)((function(){S()})),a.push(C);var M=Object(b.a)("settings").t;return null==k?Object(r.jsx)(o.a,{}):Object(r.jsxs)("div",{children:[Object(r.jsxs)(u.a,{open:!0,onClose:y,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(r.jsx)(l.a,{id:"alert-dialog-title",children:Object(r.jsx)(p.a,{t:M,i18nKey:"servers.add.title",values:{name:k.name,url:k.url}})}),Object(r.jsx)(d.a,{children:Object(r.jsx)(h.a,{id:"alert-dialog-description",children:Object(r.jsx)(p.a,{t:M,i18nKey:"servers.add.body",values:{name:k.name,url:k.url}})})}),Object(r.jsxs)(j.a,{children:[Object(r.jsx)(f.a,{onClick:y,color:"primary",children:M("servers.add.disagree")}),Object(r.jsx)(f.a,{onClick:function(){n.urls=a,n.save(),y()},color:"primary",autoFocus:!0,children:M("servers.add.agree")})]})]}),Object(r.jsx)(O.default,{})]})}t.default=Object(x.j)(C)}}]);
//# sourceMappingURL=9.5d3b6a6b.chunk.js.map