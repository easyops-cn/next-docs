/*! For license information please see general-link.b6528a27.js.LICENSE.txt */
(self.webpackChunk_next_bricks_basic=self.webpackChunk_next_bricks_basic||[]).push([[2177,533],{1422:(t,e,r)=>{"use strict";r.r(e),r.d(e,{Link:()=>S,LinkComponent:()=>Y});var n,i,a,o,s,c,l,u,f,h,d,p,v,g,y,b,w,m,Z,k,x,S,E=r(3395),M=r(381),j=r(687),W=r(5303),T=r(8657),_=r.n(T),A=r(1785),P=r(4949),z=r(7662),C=r(2779),O=r.n(C),D=(r(5254),r(3622)),K=r(4085),I=r(5178),L=(0,P.wrapBrick)("icons.general-icon"),{defineElement:B,property:H}=(0,A.createDecorators)();i=B("basic.general-link",{styleTexts:[z.Z]}),a=H(),s=H(),l=H(),f=H(),d=H(),v=H({type:Boolean}),y=H(),w=H({attribute:!1}),Z=H({attribute:!1});var N=new WeakMap,R=new WeakMap,q=new WeakMap,F=new WeakMap,G=new WeakMap,J=new WeakMap,Q=new WeakMap,U=new WeakMap,V=new WeakMap;class X extends P.ReactNextElement{constructor(){super(...arguments),(0,E.Z)(this,N,{writable:!0,value:(x(this),o(this))}),(0,E.Z)(this,R,{writable:!0,value:c(this)}),(0,E.Z)(this,q,{writable:!0,value:u(this)}),(0,E.Z)(this,F,{writable:!0,value:h(this)}),(0,E.Z)(this,G,{writable:!0,value:p(this)}),(0,E.Z)(this,J,{writable:!0,value:g(this)}),(0,E.Z)(this,Q,{writable:!0,value:b(this)}),(0,E.Z)(this,U,{writable:!0,value:m(this)}),(0,E.Z)(this,V,{writable:!0,value:k(this)})}get type(){return(0,j.Z)(this,N)}set type(t){(0,M.Z)(this,N,t)}get disabled(){return(0,j.Z)(this,R)}set disabled(t){(0,M.Z)(this,R,t)}get href(){return(0,j.Z)(this,q)}set href(t){(0,M.Z)(this,q,t)}get url(){return(0,j.Z)(this,F)}set url(t){(0,M.Z)(this,F,t)}get target(){return(0,j.Z)(this,G)}set target(t){(0,M.Z)(this,G,t)}get underline(){return(0,j.Z)(this,J)}set underline(t){(0,M.Z)(this,J,t)}get replace(){return(0,j.Z)(this,Q)}set replace(t){(0,M.Z)(this,Q,t)}get icon(){return(0,j.Z)(this,U)}set icon(t){(0,M.Z)(this,U,t)}get linkStyle(){return(0,j.Z)(this,V)}set linkStyle(t){(0,M.Z)(this,V,t)}render(){return _().createElement(Y,{type:this.type,disabled:this.disabled,url:this.url,href:this.href,target:this.target,icon:this.icon,underline:this.underline,linkStyle:this.linkStyle,replace:this.replace})}}function Y(t){var{type:e="link",disabled:r,url:n,href:i,target:a,icon:o,underline:s,replace:c,linkStyle:l}=t,u=(0,D.getHistory)(),f=(0,T.useMemo)((()=>{if(i)return i;if(!n)return"";var t=(0,K.createLocation)(n,null,void 0,u.location);return t?u.createHref(t):""}),[u,n,i]);return _().createElement("a",{className:O()({[e]:e,disabled:r,underline:s}),style:l,href:(0,I.isEmpty)(f)?void 0:f,target:a,onClick:t=>{if(r)return t.preventDefault(),void t.stopPropagation();var e;if(!i&&!(t.defaultPrevented||0!==t.button||a&&"_self"!==a||(e=t,e.metaKey||e.altKey||e.ctrlKey||e.shiftKey))){if(t.preventDefault(),!n)return;(c?u.replace:u.push)(f)}}},o&&_().createElement(L,o),_().createElement("slot",null))}({e:[o,c,u,h,p,g,b,m,k,x],c:[S,n]}=(0,W.Z)(X,[[a,1,"type"],[s,1,"disabled"],[l,1,"href"],[f,1,"url"],[d,1,"target"],[v,1,"underline"],[y,1,"replace"],[w,1,"icon"],[Z,1,"linkStyle"]],[i])),n()},2779:(t,e)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)){if(r.length){var o=i.apply(null,r);o&&t.push(o)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){t.push(r.toString());continue}for(var s in r)n.call(r,s)&&r[s]&&t.push(s)}}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(r=function(){return i}.apply(e,[]))||(t.exports=r)}()},7662:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(9601),i=r.n(n),a=r(2609),o=r.n(a)()(i());o.push([t.id,"a{text-decoration:none;color:var(--antd-btn-link-color);cursor:pointer}a:not(.disabled):hover{color:var(--antd-btn-link-hover-color)}a:not(.disabled):active{color:var(--antd-btn-link-active-color)}.disabled{cursor:not-allowed;color:var(--color-disabled-text)}.underline{text-decoration:underline}.text{color:var(--antd-btn-fade-text-color)}.text:hover{color:var(--antd-btn-text-hover-color)}.text:active{color:var(--antd-btn-text-active-color)}",""]);const s=o.toString()},2609:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,i,a){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);n&&o[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},9601:t=>{"use strict";t.exports=function(t){return t[1]}},5303:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(6522);function i(t,e,r){return(i=function(){function t(t,e){return function(n){!function(t,e){if(t.v)throw new Error("attempted to call addInitializer after decoration was finished")}(e),r(n,"An initializer"),t.push(n)}}function e(e,r,n,i,a,o,s,c){var l;switch(a){case 1:l="accessor";break;case 2:l="method";break;case 3:l="getter";break;case 4:l="setter";break;default:l="field"}var u,f,h={kind:l,name:s?"#"+r:r,static:o,private:s},d={v:!1};0!==a&&(h.addInitializer=t(i,d)),0===a?s?(u=n.get,f=n.set):(u=function(){return this[r]},f=function(t){this[r]=t}):2===a?u=function(){return n.value}:(1!==a&&3!==a||(u=function(){return n.get.call(this)}),1!==a&&4!==a||(f=function(t){n.set.call(this,t)})),h.access=u&&f?{get:u,set:f}:u?{get:u}:{set:f};try{return e(c,h)}finally{d.v=!0}}function r(t,e){if("function"!=typeof t)throw new TypeError(e+" must be a function")}function i(t,e){var i=(0,n.Z)(e);if(1===t){if("object"!==i||null===e)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==e.get&&r(e.get,"accessor.get"),void 0!==e.set&&r(e.set,"accessor.set"),void 0!==e.init&&r(e.init,"accessor.init")}else if("function"!==i)throw new TypeError((0===t?"field":10===t?"class":"method")+" decorators must return a function or void 0")}function a(t,r,n,a,o,s,c,l){var u,f,h,d,p,v,g=n[0];if(c?u=0===o||1===o?{get:n[3],set:n[4]}:3===o?{get:n[3]}:4===o?{set:n[3]}:{value:n[3]}:0!==o&&(u=Object.getOwnPropertyDescriptor(r,a)),1===o?h={get:u.get,set:u.set}:2===o?h=u.value:3===o?h=u.get:4===o&&(h=u.set),"function"==typeof g)void 0!==(d=e(g,a,u,l,o,s,c,h))&&(i(o,d),0===o?f=d:1===o?(f=d.init,p=d.get||h.get,v=d.set||h.set,h={get:p,set:v}):h=d);else for(var y=g.length-1;y>=0;y--){var b;void 0!==(d=e(g[y],a,u,l,o,s,c,h))&&(i(o,d),0===o?b=d:1===o?(b=d.init,p=d.get||h.get,v=d.set||h.set,h={get:p,set:v}):h=d,void 0!==b&&(void 0===f?f=b:"function"==typeof f?f=[f,b]:f.push(b)))}if(0===o||1===o){if(void 0===f)f=function(t,e){return e};else if("function"!=typeof f){var w=f;f=function(t,e){for(var r=e,n=0;n<w.length;n++)r=w[n].call(t,r);return r}}else{var m=f;f=function(t,e){return m.call(t,e)}}t.push(f)}0!==o&&(1===o?(u.get=h.get,u.set=h.set):2===o?u.value=h:3===o?u.get=h:4===o&&(u.set=h),c?1===o?(t.push((function(t,e){return h.get.call(t,e)})),t.push((function(t,e){return h.set.call(t,e)}))):2===o?t.push(h):t.push((function(t,e){return h.call(t,e)})):Object.defineProperty(r,a,u))}function o(t,e){for(var r,n,i=[],o=new Map,c=new Map,l=0;l<e.length;l++){var u=e[l];if(Array.isArray(u)){var f,h,d=u[1],p=u[2],v=u.length>3,g=d>=5;if(g?(f=t,0!=(d-=5)&&(h=n=n||[])):(f=t.prototype,0!==d&&(h=r=r||[])),0!==d&&!v){var y=g?c:o,b=y.get(p)||0;if(!0===b||3===b&&4!==d||4===b&&3!==d)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+p);!b&&d>2?y.set(p,d):y.set(p,!0)}a(i,f,u,p,d,g,v,h)}}return s(i,r),s(i,n),i}function s(t,e){e&&t.push((function(t){for(var r=0;r<e.length;r++)e[r].call(t);return t}))}return function(e,r,n){return{e:o(e,r),get c(){return function(e,r){if(r.length>0){for(var n=[],a=e,o=e.name,s=r.length-1;s>=0;s--){var c={v:!1};try{var l=r[s](a,{kind:"class",name:o,addInitializer:t(n,c)})}finally{c.v=!0}void 0!==l&&(i(10,l),a=l)}return[a,function(){for(var t=0;t<n.length;t++)n[t].call(a)}]}}(e,n)}}}}())(t,e,r)}},5863:(t,e,r)=>{"use strict";function n(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}r.d(e,{Z:()=>n})},175:(t,e,r)=>{"use strict";function n(t,e,r){if(!e.has(t))throw new TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}r.d(e,{Z:()=>n})},687:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(175);function i(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,(0,n.Z)(t,e,"get"))}},3395:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(5863);function i(t,e,r){(0,n.Z)(t,e),e.set(t,r)}},381:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(175);function i(t,e,r){return function(t,e,r){if(e.set)e.set.call(t,r);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=r}}(t,(0,n.Z)(t,e,"set"),r),r}},6522:(t,e,r)=>{"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,{Z:()=>n})}}]);
//# sourceMappingURL=general-link.b6528a27.js.map