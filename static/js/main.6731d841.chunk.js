(this.webpackJsonphaerbin=this.webpackJsonphaerbin||[]).push([[0],{36:function(e,t,r){},56:function(e,t,r){},63:function(e,t,r){},64:function(e,t,r){},65:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(28),i=r.n(c),s=(r(35),r(36),r(2)),u=r(30),l=r(5),o=r.n(l),p=r(9),d=r(11),m=r(13),f=r.n(m);f.a.defaults.baseURL="https://api.chenggang.win/api",f.a.defaults.headers.post["Content-Type"]="application/json",f.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),f.a.interceptors.response.use((function(e){var t=e.status,r=e.data;if(200===t){var a=r.code,n=r.message,c=r.data;return 0===a?c:Promise.reject(n)}return Promise.reject("error")}));var b=f.a;function j(){return h.apply(this,arguments)}function h(){return(h=Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.get("/news"));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.post("/news/detail",{id:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=r(12),x=(r(56),r(1));function y(e){var t=e.id,r=e.cover,a=e.title,n=e.date;return Object(x.jsxs)(O.b,{to:"/detail/".concat(t),className:"article-wrap",children:[Object(x.jsx)("div",{className:"cover-wrap",children:Object(x.jsx)("img",{src:r,alt:a})}),Object(x.jsx)("p",{className:"text",children:n}),Object(x.jsx)("p",{className:"text title",title:a,children:a})]})}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var N=a.createElement("circle",{cx:30,cy:50,fill:"#e90c59",r:20},a.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",keyTimes:"0;0.5;1",values:"30;70;30",begin:"-0.5s"})),k=a.createElement("circle",{cx:70,cy:50,fill:"#46dff0",r:20},a.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",keyTimes:"0;0.5;1",values:"30;70;30",begin:"0s"})),q=a.createElement("circle",{cx:30,cy:50,fill:"#e90c59",r:20},a.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",keyTimes:"0;0.5;1",values:"30;70;30",begin:"-0.5s"}),a.createElement("animate",{attributeName:"fill-opacity",values:"0;0;1;1",calcMode:"discrete",keyTimes:"0;0.499;0.5;1",dur:"1s",repeatCount:"indefinite"}));function P(e,t){var r=e.title,n=e.titleId,c=E(e,["title","titleId"]);return a.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"#fff",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,N,k,q)}var S=a.forwardRef(P),T=(r.p,{display:"flex",height:400});function A(){return Object(x.jsx)("div",{style:T,children:Object(x.jsx)(S,{})})}r(63);function C(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)([]),i=Object(d.a)(c,2),s=i[0],l=i[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(p.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,r=t.list,l(r),n(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n(!0),e()}),[]),r?Object(x.jsx)(A,{}):Object(x.jsx)("ul",{className:"home",children:s.map((function(e){return Object(x.jsx)("li",{className:"article-wrap",children:Object(x.jsx)(y,Object(u.a)({},e))},e.id)}))})}var I={lt:"",gt:"",amp:"&",quot:'"',apos:"'",Agrave:"\xc0",Aacute:"\xc1",Acirc:"\xc2",Atilde:"\xc3",Auml:"\xc4",Aring:"\xc5",AElig:"\xc6",Ccedil:"\xc7",Egrave:"\xc8",Eacute:"\xc9",Ecirc:"\xca",Euml:"\xcb",Igrave:"\xcc",Iacute:"\xcd",Icirc:"\xce",Iuml:"\xcf",ETH:"\xd0",Ntilde:"\xd1",Ograve:"\xd2",Oacute:"\xd3",Ocirc:"\xd4",Otilde:"\xd5",Ouml:"\xd6",Oslash:"\xd8",Ugrave:"\xd9",Uacute:"\xda",Ucirc:"\xdb",Uuml:"\xdc",Yacute:"\xdd",THORN:"\xde",szlig:"\xdf",agrave:"\xe0",aacute:"\xe1",acirc:"\xe2",atilde:"\xe3",auml:"\xe4",aring:"\xe5",aelig:"\xe6",ccedil:"\xe7",egrave:"\xe8",eacute:"\xe9",ecirc:"\xea",euml:"\xeb",igrave:"\xec",iacute:"\xed",icirc:"\xee",iuml:"\xef",eth:"\xf0",ntilde:"\xf1",ograve:"\xf2",oacute:"\xf3",ocirc:"\xf4",otilde:"\xf5",ouml:"\xf6",oslash:"\xf8",ugrave:"\xf9",uacute:"\xfa",ucirc:"\xfb",uuml:"\xfc",yacute:"\xfd",thorn:"\xfe",yuml:"\xff",nbsp:" ",iexcl:"\xa1",cent:"\xa2",pound:"\xa3",curren:"\xa4",yen:"\xa5",brvbar:"\xa6",sect:"\xa7",uml:"\xa8",copy:"\xa9",ordf:"\xaa",laquo:"\xab",not:"\xac",shy:"\xad\xad",reg:"\xae",macr:"\xaf",deg:"\xb0",plusmn:"\xb1",sup2:"\xb2",sup3:"\xb3",acute:"\xb4",micro:"\xb5",para:"\xb6",middot:"\xb7",cedil:"\xb8",sup1:"\xb9",ordm:"\xba",raquo:"\xbb",frac14:"\xbc",frac12:"\xbd",frac34:"\xbe",iquest:"\xbf",times:"\xd7",divide:"\xf7",forall:"\u2200",part:"\u2202",exist:"\u2203",empty:"\u2205",nabla:"\u2207",isin:"\u2208",notin:"\u2209",ni:"\u220b",prod:"\u220f",sum:"\u2211",minus:"\u2212",lowast:"\u2217",radic:"\u221a",prop:"\u221d",infin:"\u221e",ang:"\u2220",and:"\u2227",or:"\u2228",cap:"\u2229",cup:"\u222a",int:"\u222b",there4:"\u2234",sim:"\u223c",cong:"\u2245",asymp:"\u2248",ne:"\u2260",equiv:"\u2261",le:"\u2264",ge:"\u2265",sub:"\u2282",sup:"\u2283",nsub:"\u2284",sube:"\u2286",supe:"\u2287",oplus:"\u2295",otimes:"\u2297",perp:"\u22a5",sdot:"\u22c5",Alpha:"\u0391",Beta:"\u0392",Gamma:"\u0393",Delta:"\u0394",Epsilon:"\u0395",Zeta:"\u0396",Eta:"\u0397",Theta:"\u0398",Iota:"\u0399",Kappa:"\u039a",Lambda:"\u039b",Mu:"\u039c",Nu:"\u039d",Xi:"\u039e",Omicron:"\u039f",Pi:"\u03a0",Rho:"\u03a1",Sigma:"\u03a3",Tau:"\u03a4",Upsilon:"\u03a5",Phi:"\u03a6",Chi:"\u03a7",Psi:"\u03a8",Omega:"\u03a9",alpha:"\u03b1",beta:"\u03b2",gamma:"\u03b3",delta:"\u03b4",epsilon:"\u03b5",zeta:"\u03b6",eta:"\u03b7",theta:"\u03b8",iota:"\u03b9",kappa:"\u03ba",lambda:"\u03bb",mu:"\u03bc",nu:"\u03bd",xi:"\u03be",omicron:"\u03bf",pi:"\u03c0",rho:"\u03c1",sigmaf:"\u03c2",sigma:"\u03c3",tau:"\u03c4",upsilon:"\u03c5",phi:"\u03c6",chi:"\u03c7",psi:"\u03c8",omega:"\u03c9",thetasym:"\u03d1",upsih:"\u03d2",piv:"\u03d6",OElig:"\u0152",oelig:"\u0153",Scaron:"\u0160",scaron:"\u0161",Yuml:"\u0178",fnof:"\u0192",circ:"\u02c6",tilde:"\u02dc",ensp:"\u2002",emsp:"\u2003",thinsp:"\u2009",zwnj:"\u200c",zwj:"\u200d",lrm:"\u200e",rlm:"\u200f",ndash:"\u2013",mdash:"\u2014",lsquo:"\u2018",rsquo:"\u2019",sbquo:"\u201a",ldquo:"\u201c",rdquo:"\u201d",bdquo:"\u201e",dagger:"\u2020",Dagger:"\u2021",bull:"\u2022",hellip:"\u2026",permil:"\u2030",prime:"\u2032",Prime:"\u2033",lsaquo:"\u2039",rsaquo:"\u203a",oline:"\u203e",euro:"\u20ac",trade:"\u2122",larr:"\u2190",uarr:"\u2191",rarr:"\u2192",darr:"\u2193",harr:"\u2194",crarr:"\u21b5",lceil:"\u2308",rceil:"\u2309",lfloor:"\u230a",rfloor:"\u230b",loz:"\u25ca",spades:"\u2660",clubs:"\u2663",hearts:"\u2665",diams:"\u2666","#8226":"\u2022","#8212":"\u2014"};function R(e){var t=e.replace(/(\r\n|\n|\r)/gm,"");for(var r in I){var a=new RegExp("&"+r+";","g");t=t.replace(a,I[r])}var n=t.match(/<p[^>]*>(.*?)<\/p>/gm);return n?n.map((function(e,t){if(e.includes("</strong>")){return{idx:t,type:"title",value:e.replace(/<p><strong[^>]*>(.*?)<\/strong><\/p>/g,"$1")}}return{idx:t,type:"text",value:e.replace(/<p[^>]*>(.*?)<\/p>/g,"$1")}})):[]}r(64);function U(){var e=Object(s.f)().id,t=Object(a.useState)(!1),r=Object(d.a)(t,2),n=r[0],c=r[1],i=Object(a.useState)(),u=Object(d.a)(i,2),l=u[0],m=u[1],f=Object(a.useState)([]),b=Object(d.a)(f,2),j=b[0],h=b[1];return Object(a.useEffect)((function(){var t=function(){var t=Object(p.a)(o.a.mark((function t(){var r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:r=t.sent,m(r),a=R(r.transcript),h(a),c(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();c(!0),t()}),[e]),n?Object(x.jsx)(A,{}):Object(x.jsxs)("div",{className:"detail",children:[Object(x.jsx)("div",{children:j.map((function(e){var t=e.idx,r=e.type,a=e.value;return Object(x.jsx)("p",{className:r,children:a},t)}))}),(null===l||void 0===l?void 0:l.source)&&Object(x.jsx)("audio",{controls:!0,src:l.src,className:"audio"})]})}var z=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(s.c,{children:[Object(x.jsx)(s.a,{exact:!0,path:"/",children:Object(x.jsx)(C,{})}),Object(x.jsx)(s.a,{path:"/detail/:id",children:Object(x.jsx)(U,{})})]})})},M=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,66)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),a(e),n(e),c(e),i(e)}))};i.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(O.a,{children:Object(x.jsx)(z,{})})}),document.getElementById("root")),M(console.log)}},[[65,1,2]]]);
//# sourceMappingURL=main.6731d841.chunk.js.map