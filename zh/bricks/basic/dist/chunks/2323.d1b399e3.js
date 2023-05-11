"use strict";(self.webpackChunk_next_bricks_basic=self.webpackChunk_next_bricks_basic||[]).push([[2323,4728],{2323:(e,t,r)=>{r.r(t),r.d(t,{inject:()=>m,transform:()=>D,transformAndInject:()=>A});var a=r(5178),n=r(5637),i=new Map(Array.from(Object.entries(n.q)));function c(e,t){if(0===t.length)return e;var r=e;for(var a of t){var n=i.get(a.identifier);if(!n)return void console.warn("Unknown pipe: ".concat(a.identifier));r=n(r,...a.parameters)}return r}var u=function(e){return e[e.Initial=0]="Initial",e[e.ExpectField=1]="ExpectField",e[e.ExpectOptionalBeginDefault=2]="ExpectOptionalBeginDefault",e[e.ExpectDefaultValue=3]="ExpectDefaultValue",e[e.ExpectOptionalBeginPipe=4]="ExpectOptionalBeginPipe",e[e.ExpectPipeIdentifier=5]="ExpectPipeIdentifier",e[e.ExpectOptionalBeginPipeParameter=6]="ExpectOptionalBeginPipeParameter",e[e.ExpectPipeParameter=7]="ExpectPipeParameter",e[e.ExpectPlaceholderEnd=8]="ExpectPlaceholderEnd",e}({}),s=function(e){return e.Raw="Raw",e.BeginPlaceHolder="BeginPlaceHolder",e.Field="Field",e.BeginDefault="BeginDefault",e.LiteralString="LiteralString",e.BeginPipe="BeginPipe",e.PipeIdentifier="PipeIdentifier",e.BeginPipeParameter="BeginPipeParameter",e.EndPlaceHolder="EndPlaceHolder",e.JsonValue="JsonValue",e}({}),l=function(e){return e[e.Array=0]="Array",e[e.Object=1]="Object",e[e.String=2]="String",e[e.Others=3]="Others",e}({});function o(e){return new RegExp("(".concat([].concat(e).map((e=>(0,a.escapeRegExp)(e))).join("|"),")\\{"))}function p(e){var t,r=y(e),a=null===(t=r.match(e.beginPlaceholder))||void 0===t?void 0:t[0],n=a?r.indexOf(a):-1;if(n>=0&&a&&"{"!==r.charAt(n+a.length)){var i=e.cursor+n;n>0&&e.tokens.push({type:s.Raw,value:r.substring(0,n)}),e.tokens.push({type:s.BeginPlaceHolder,loc:{start:i,end:i+a.length},value:a.substring(0,a.length-1)}),e.cursor+=n+a.length,e.status=u.ExpectField}else e.tokens.push({type:s.Raw,value:r}),e.cursor=e.raw.length}function f(e){e.cursor+=y(e).match(/^[ \r\n\t]*/)[0].length}function d(e){var[t]=y(e).match(/^(?:[\*\x2D\.0-9A-\[\]_a-z\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*/);e.tokens.push({type:s.Field,value:t}),e.cursor+=t.length,e.status=u.ExpectOptionalBeginDefault}function g(e){"="===y(e).charAt(0)?(e.tokens.push({type:s.BeginDefault}),e.cursor+=1,e.status=u.ExpectDefaultValue):e.status=u.ExpectOptionalBeginPipe}function h(e){k(e,u.ExpectOptionalBeginPipe)}function E(e){"|"===y(e).charAt(0)?(e.tokens.push({type:s.BeginPipe}),e.cursor+=1,e.status=u.ExpectPipeIdentifier):e.status=u.ExpectPlaceholderEnd}function P(e){var t=y(e).match(/^[a-zA-Z]\w*/);if(!t)throw new Error("Expected a pipe identifier at index ".concat(e.cursor," near: ").concat(JSON.stringify(e.raw.substring(e.cursor))));var r=t[0];e.tokens.push({type:s.PipeIdentifier,value:r}),e.cursor+=r.length,e.status=u.ExpectOptionalBeginPipeParameter}function v(e){":"===y(e).charAt(0)?(e.tokens.push({type:s.BeginPipeParameter}),e.cursor+=1,e.status=u.ExpectPipeParameter):e.status=u.ExpectOptionalBeginPipe}function F(e){k(e,u.ExpectOptionalBeginPipeParameter)}function b(e){if("}"!==y(e).charAt(0))throw new Error("Expected a placeholder end '}' at index ".concat(e.cursor," near: ").concat(JSON.stringify(e.raw.substring(e.cursor))));e.tokens.push({type:s.EndPlaceHolder,loc:{start:e.cursor,end:e.cursor+1}}),e.cursor+=1,e.status=u.Initial}var x=new Map([["false",!1],["null",null],["true",!0]]);function k(e,t){var r=y(e);if(/[0-9[{"]/.test(r.charAt(0))||/-[0-9]/.test(r.substring(0,2)))!function(e,t){for(var r=y(e),a=r.charAt(0),n="["===a?l.Array:"{"===a?l.Object:'"'===a?l.String:l.Others,i=0,c=0,u=0,o=!1,p=!1,f=!1;i<r.length;){var d=r.charAt(i);if(p)p=!1;else if(o)'"'===d?o=!1:"\\"===d&&(p=!0);else switch(d){case"[":u+=1;break;case"{":c+=1;break;case"]":u-=1;break;case"}":c-=1;break;case'"':o=!0}switch(i+=1,n){case l.Array:f=!u;break;case l.Object:f=!c;break;case l.String:f=!o;break;default:f=i<r.length&&/[^a-z0-9E.+-]/.test(r.charAt(i))}if(f)break}if(!f)throw new Error("Failed to match a JSON value at index ".concat(e.cursor," near: ").concat(JSON.stringify(e.raw.substring(e.cursor))));e.tokens.push({type:s.JsonValue,value:JSON.parse(r.substring(0,i))}),e.cursor+=i,e.status=t}(e,t);else{var[a]=y(e).match(/^(?:[\x2D0-9A-Z_a-z\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*/);x.has(a)?e.tokens.push({type:s.JsonValue,value:x.get(a)}):e.tokens.push({type:s.LiteralString,value:a}),e.cursor+=a.length,e.status=t}}function y(e){return e.raw.substring(e.cursor)}function D(e,t){return B(e,"@",t)}function m(e,t){return B(e,"$",t)}function A(e,t){return B(e,["@","$"],t)}function B(e,t,r){if(!function(e,t){return o(t).test(e)}(e,t))return e;var n,i,l=(n=r.data,function(e){var t=e.field?(0,a.get)(n,e.field):n;return void 0===t&&(t=e.defaultValue),c(t,e.pipes)}),x=function(e,t){return function(r){var n,i,u=r.field.match(/^(?:(QUERY(?:_ARRAY)?|EVENT|query|event|APP|HASH|ANCHOR|SYS|FLAGS|CTX)\.)?(.+)$/);if(!u)return t.substring(r.loc.start,r.loc.end);var s,[,l,o]=u;!l&&/^[A-Z_]+$/.test(o)&&(l=o,o="*");var p={SYS:"sys",FLAGS:"flags"};switch(l){case"QUERY":case"query":s="*"===o?e.query:e.query.has(o)?e.query.get(o):void 0;break;case"QUERY_ARRAY":s=e.query.has(o)?e.query.getAll(o):void 0;break;case"EVENT":case"event":if(void 0===e.event)return t.substring(r.loc.start,r.loc.end);s="*"===o?e.event:(0,a.get)(e.event,o);break;case"APP":s="*"===o?null!==(n=e.overrideApp)&&void 0!==n?n:e.app:(0,a.get)(null!==(i=e.overrideApp)&&void 0!==i?i:e.app,o);break;case"HASH":s=e.location.hash;break;case"SYS":case"FLAGS":s="*"===o?e[p[l]]:(0,a.get)(e[p[l]],o);break;case"ANCHOR":var f=e.location.hash?e.location.hash.substr(1):null;s="*"===o?f:(0,a.get)(f,o);break;case"CTX":var d=t.substring(r.loc.start,r.loc.end);return console.error('CTX is not supported in placeholder any more: "'.concat(d,'"')),d;default:if(!e.match)return t.substring(r.loc.start,r.loc.end);s=e.match.params[o]}return void 0===s&&(s=r.defaultValue),c(s,r.pipes)}}(r,e);return i=function(e,t){return function(e){var t,r={type:"InjectableString",elements:[]};function a(r){return r===e[0].type&&(t=e.shift(),!0)}function n(r){if(t=e.shift(),Array.isArray(r)?!r.includes(t.type):r!==t.type)throw new Error("Expected token: ".concat(r,", received token: ").concat(t.type))}for(;e.length>0;)if(a(s.Raw))r.elements.push({type:"RawString",value:t.value});else{n(s.BeginPlaceHolder);var i=t.loc.start,c=t.value;n(s.Field);var u={type:"Placeholder",symbol:c,field:t.value,defaultValue:void 0,pipes:[],loc:{start:i,end:i}};for(r.elements.push(u),a(s.BeginDefault)&&(n([s.JsonValue,s.LiteralString]),u.defaultValue=t.value);a(s.BeginPipe);){n(s.PipeIdentifier);var l={type:"PipeCall",identifier:t.value,parameters:[]};for(u.pipes.push(l);a(s.BeginPipeParameter);)n([s.JsonValue,s.LiteralString]),l.parameters.push(t.value)}n(s.EndPlaceHolder),u.loc.end=t.loc.end}return r}(function(e,t){for(var r={beginPlaceholder:o(t),raw:e,cursor:0,status:u.Initial,tokens:[]};r.cursor<e.length;)switch(r.status){case u.Initial:p(r);break;case u.ExpectField:f(r),d(r);break;case u.ExpectOptionalBeginDefault:f(r),g(r);break;case u.ExpectDefaultValue:f(r),h(r);break;case u.ExpectOptionalBeginPipe:f(r),E(r);break;case u.ExpectPipeIdentifier:f(r),P(r);break;case u.ExpectOptionalBeginPipeParameter:f(r),v(r);break;case u.ExpectPipeParameter:f(r),F(r);break;case u.ExpectPlaceholderEnd:f(r),b(r)}if(r.status!==u.Initial)throw new Error("Expected a placeholder end '}' at the end");return r.tokens}(e,t))}(e,t).elements.map((e=>"RawString"===e.type?e.value:"$"===e.symbol?x(e):l(e))),1===i.length?i[0]:i.join("")}}}]);
//# sourceMappingURL=2323.d1b399e3.js.map