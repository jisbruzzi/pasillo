(function(e){function n(n){for(var t,i,c=n[0],u=n[1],l=n[2],s=0,d=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);f&&f(n);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,n=0;n<a.length;n++){for(var r=a[n],t=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(t=!1)}t&&(a.splice(n--,1),e=c(c.s=r[0]))}return e}var t={},o={1:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{2:"c1e9cf8c",3:"20952246",4:"26e16976",5:"9f93382d",6:"1fcf5b79",7:"49082841",8:"95d76867"}[e]+".js"}function c(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var n=[],r=o[e];if(0!==r)if(r)n.push(r[2]);else{var t=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=t);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var l=new Error;a=function(n){u.onerror=u.onload=null,clearTimeout(s);var r=o[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+t+": "+a+")",l.name="ChunkLoadError",l.type=t,l.request=a,r[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=t,c.d=function(e,n,r){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)c.d(r,t,function(n){return e[n]}.bind(null,t));return r},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var f=l;a.push([0,0]),r()})({0:function(e,n,r){e.exports=r("2f39")},"2f39":function(e,n,r){"use strict";r.r(n);var t=r("c973"),o=r.n(t),a=(r("7d6e"),r("e54f"),r("4439"),r("4605"),r("f580"),r("5b2b"),r("8753"),r("2967"),r("7e67"),r("d770"),r("dd82"),r("922c"),r("d7fb"),r("a533"),r("c32e"),r("a151"),r("8bc7"),r("e80f"),r("5fec"),r("e42f"),r("57fc"),r("d67f"),r("880e"),r("1c10"),r("9482"),r("e797"),r("4848"),r("53d0"),r("63b1"),r("e9fd"),r("195c"),r("64e9"),r("33c5"),r("4f62"),r("0dbc"),r("7c38"),r("0756"),r("4953"),r("81db"),r("2e52"),r("2248"),r("7797"),r("12a1"),r("ce96"),r("70ca"),r("2318"),r("24bd"),r("8f27"),r("3064"),r("c9a2"),r("8767"),r("4a8e"),r("b828"),r("3c1c"),r("21cb"),r("c00e"),r("e4a8"),r("e4d3"),r("f4d9"),r("fffd"),r("f645"),r("639e"),r("34ee"),r("b794"),r("af24"),r("7c9c"),r("7bb2"),r("64f7"),r("c382"),r("053c"),r("c48f"),r("f5d1"),r("3cec"),r("c00ee"),r("d450"),r("ca07"),r("14e3"),r("9393"),r("9227"),r("1dba"),r("674a"),r("de26"),r("6721"),r("9cb5"),r("ed9b"),r("fc83"),r("98e5"),r("605a"),r("ba60"),r("df07"),r("7903"),r("e046"),r("58af"),r("7713"),r("0571"),r("3e27"),r("6837"),r("3fc9"),r("0693"),r("bf41"),r("985d"),r("31cd"),r("2b0e")),i=r("1f91"),c=r("42d2"),u=r("b05d");a["a"].use(u["a"],{config:{},lang:i["a"],iconSet:c["a"]});var l=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},s=[],f=r("60a3"),d=function(e,n,r,t){var o,a=arguments.length,i=a<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,r):t;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,n,r,t);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(n,r,i):o(n,r))||i);return a>3&&i&&Object.defineProperty(n,r,i),i};let p=class extends f["c"]{};p=d([f["a"]],p);var b=p,h=b,m=r("2877"),y=Object(m["a"])(h,l,s,!1,null,null,null),v=y.exports,g=r("4bde"),j=r("8c4f");const q=[{path:"/",component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"8b24"))},{path:"juego",component:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"60fa")),props:e=>{var n;const r=(null===(n=e.query.estado)||void 0===n?void 0:n.toString())||"{}";return{nombre:e.query.nombre,forma:e.query.forma,vidaDeOracion:e.query.vidaDeOracion,historial:e.query.historial||[],estado:JSON.parse(r)||{},decisiones:e.query.decisiones||[]}}},{path:"/resumen",component:()=>Promise.all([r.e(0),r.e(8)]).then(r.bind(null,"4d15")),props:e=>({decisiones:e.query.decisiones})},{path:"/lujan",component:()=>Promise.all([r.e(0),r.e(7)]).then(r.bind(null,"a48a")),props:e=>({decisiones:e.query.decisiones,caminando:"true"===e.query.caminando})},{path:"/endgame",component:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"eb08")),props:e=>({decisiones:e.query.decisiones,energia:parseFloat(e.query.energia.toString()),oracion:parseFloat(e.query.oracion.toString()),nombre:e.query.nombre,distanciaLujan:parseFloat(e.query.distanciaLujan.toString()),mostrarTiempo:"true"===e.query.mostrarTiempo,tiempoLlegada:parseFloat(e.query.tiempoLlegada.toString())})}]},{path:"*",component:()=>Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"e51e"))}];var O=q,P=Object(g["route"])((function({Vue:e}){e.use(j["a"]);const n=new j["a"]({scrollBehavior:()=>({x:0,y:0}),routes:O,mode:"hash",base:""});return n})),w=function(){return S.apply(this,arguments)};function S(){return S=o()((function*(){const e="function"===typeof P?yield P({Vue:a["a"]}):P,n={router:e,render:e=>e(v),el:"#q-app"};return{app:n,router:e}})),S.apply(this,arguments)}function x(){return _.apply(this,arguments)}function _(){return _=o()((function*(){const{app:e,router:n}=yield w();new a["a"](e)})),_.apply(this,arguments)}x()},"31cd":function(e,n,r){}});