(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"8b24":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-page",{staticClass:"row items-center justify-evenly q-pa-md"},[t("div",[t("h2",[e._v("Vamos a Luján")]),t("p",[t("i",[e._v("Madre, abrazanos. Queremos seguir caminando.")])]),t("q-form",{ref:"form-datos",staticClass:"q-gutter-md"},[t("q-input",{attrs:{label:"Tu nombre",rules:[function(e){return e&&e.length>0||"Escribí tu nombre"}]},model:{value:e.nombre,callback:function(n){e.nombre=n},expression:"nombre"}}),t("q-select",{attrs:{options:e.opcionesForma,label:"Forma física",rules:[function(e){return e||"Elegí una opción"}]},model:{value:e.forma,callback:function(n){e.forma=n},expression:"forma"}}),t("q-select",{attrs:{options:e.opcionesVidaDeOracion,label:"Vida de oración",rules:[function(e){return e||"Elegí una opción"}]},model:{value:e.vidaDeOracion,callback:function(n){e.vidaDeOracion=n},expression:"vidaDeOracion"}}),t("q-img",{attrs:{src:"/virgen.jpg"}}),t("q-input",{attrs:{label:"Intención",hint:"¿Por qué intención ofrecés la peregrinación?",rules:[function(e){return e&&e.length>0||"No olvides la intención"}]},model:{value:e.intencion,callback:function(n){e.intencion=n},expression:"intencion"}}),t("div",[t("q-btn",{attrs:{label:"empezar",color:"primary"},on:{click:e.empezar}})],1)],1)],1)])},a=[],i=t("60a3"),r=function(e,n,t,o){var a,i=arguments.length,r=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,n,t,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(r=(i<3?a(r):i>3?a(n,t,r):a(n,t))||r);return i>3&&r&&Object.defineProperty(n,t,r),r},l=function(e,n,t,o){function a(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,i){function r(e){try{c(o.next(e))}catch(n){i(n)}}function l(e){try{c(o["throw"](e))}catch(n){i(n)}}function c(e){e.done?t(e.value):a(e.value).then(r,l)}c((o=o.apply(e,n||[])).next())}))};let c=class extends i["c"]{constructor(){super(...arguments),this.intencion=null,this.forma=null,this.vidaDeOracion=null,this.nombre=null}get opcionesForma(){return[{label:"Muy buena forma",value:1},{label:"Camino bastante",value:2},{label:"Cristiano de sillón",value:3}]}get opcionesVidaDeOracion(){return[{label:"Comunión diaria",value:1},{label:"Rezo todos los días",value:2},{label:"Sólo misa",value:3},{label:"Cada tanto rezo",value:4}]}empezar(){var e,n,t,o;return l(this,void 0,void 0,(function*(){const a=yield this.$refs["form-datos"].validate(),i={forma:(null===(n=null===(e=this.forma)||void 0===e?void 0:e.value)||void 0===n?void 0:n.toString())||null,vidaDeOracion:(null===(o=null===(t=this.vidaDeOracion)||void 0===t?void 0:t.value)||void 0===o?void 0:o.toString())||null,nombre:this.nombre};a&&(yield this.$router.push({path:"/juego",query:i}))}))}};c=r([Object(i["a"])({})],c);var u=c,s=u,d=t("2877"),f=t("9989"),v=t("0378"),m=t("27f9"),p=t("ddd8"),b=t("068f"),h=t("9c40"),g=t("eebe"),y=t.n(g),O=Object(d["a"])(s,o,a,!1,null,null,null);n["default"]=O.exports;y()(O,"components",{QPage:f["a"],QForm:v["a"],QInput:m["a"],QSelect:p["a"],QImg:b["a"],QBtn:h["a"]})}}]);