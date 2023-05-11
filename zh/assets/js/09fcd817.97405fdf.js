"use strict";(self.webpackChunknext_docs=self.webpackChunknext_docs||[]).push([[5158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96507:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294);const a={ringContainer:"ringContainer_Jl9i",ring:"ring_UfU1"};function l(){return r.createElement("div",{className:a.ringContainer},r.createElement("div",{className:a.ring},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null)))}},94981:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(96507);const l=r.lazy((()=>Promise.all([n.e(532),n.e(6678)]).then(n.bind(n,26678)))),o=r.lazy((()=>Promise.all([n.e(532),n.e(8416),n.e(6297)]).then(n.bind(n,26297)))),i=(0,r.forwardRef)((function(e,t){let{files:n,currentFile:i,theme:c,className:s,typingEffectReady:p,onChange:d}=e;const u=!!navigator.maxTouchPoints;return(0,r.useEffect)((()=>{if(u&&d){const e=n.find((e=>e.name===i));e.codeSlides&&d(e.code,i)}}),[i,n,u,d]),r.createElement(r.Suspense,{fallback:r.createElement(a.Z,null)},u?r.createElement(l,{files:n,currentFile:i,className:s}):r.createElement(o,{files:n,currentFile:i,theme:c,className:s,typingEffectReady:p,onChange:d,ref:t}))}))},63800:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(67294),a=n(73935),l=n(79524),o=n(9200),i=n(51048);function c(e){let{children:t,fallback:n}=e;return(0,i.Z)()?r.createElement(r.Fragment,null,t?.()):n??null}var s=n(86010);var p,d=n(33788);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}const m=e=>{let{title:t,titleId:n,...a}=e;return r.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-chevron-up",viewBox:"0 0 16 16","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,p||(p=r.createElement("path",{fillRule:"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"})))};var f;function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}const b=e=>{let{title:t,titleId:n,...a}=e;return r.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-chevron-down",viewBox:"0 0 16 16","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,f||(f=r.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})))};var h=n(96507);const g={example:"example_UmKM",editorColumn:"editorColumn_AL_t",previewColumn:"previewColumn_FsuT",editorContainer:"editorContainer_sUW3",preview:"preview_bwr6",ready:"ready_dhJq",expanded:"expanded_o_pT",collapsed:"collapsed_aDj8",tabs:"tabs_yDjk",tab:"tab_uskj",active:"active_KoUc",codeTextarea:"codeTextarea_M1nH",codePre:"codePre_isv5",lineNumber:"lineNumber_uSTo",buttonToggleShowMore:"buttonToggleShowMore_A68N",expandable:"expandable_arS4",condensed:"condensed_ytqo"};function v(e){let{files:t,styleText:i,condensed:p,className:u}=e;const f=(0,r.useRef)(),k=(0,r.useRef)(),{colorMode:v}=(0,o.I)(),C=(0,l.Z)("/preview/"),E=(0,r.useRef)(),[w,T]=(0,r.useState)(d.cP),[O,S]=(0,r.useState)(!1),[_,P]=(0,r.useState)((()=>(t.find((e=>e.defaultActive))??t[0]).name)),[j,M]=(0,r.useState)((()=>N(t,_))),[z,Z]=(0,r.useState)((()=>y(j,w))),[A,I]=(0,r.useState)(!1),F=(0,r.useCallback)((()=>{const e=()=>{E.current?.contentWindow?._preview_only_render?S(!0):setTimeout(e,100)};e()}),[]),[B,L]=(0,r.useState)((()=>Object.fromEntries(t.map((e=>[e.name,e.codeSlides?.[0]??e.code]))))),R=function(e,t){void 0===t&&(t=200);const[n,a]=(0,r.useState)(e);return(0,r.useEffect)((()=>{const n=setTimeout((()=>{a(e)}),t);return()=>{clearTimeout(n)}}),[e,t]),n}(B);(0,r.useEffect)((()=>{if(!O)return;const e=E.current?.contentWindow?._preview_only_render;if(!e)return;const{Bricks:t,Context:n,Functions:r,Templates:a,I18N:l,templatesAreArrayOfYaml:o}=function(e){const t={},n=[],r=[];for(const[a,l]of Object.entries(e))if(a.startsWith("Functions/")){const[e,t]=a.split("/")[1].split(".");n.push({name:e,source:l,typescript:"ts"===t})}else a.startsWith("tpl-")?r.push({name:a,yaml:l}):t[a]=l;n.length>0&&(t.Functions=n);r.length>0&&(t.Templates=r,t.templatesAreArrayOfYaml=!0);return t}(R);e("yaml",{yaml:t},{theme:v,context:n,functions:r,templates:a,i18n:l,styleText:i,templatesAreArrayOfYaml:o})}),[O,v,R,i]),(0,r.useEffect)((()=>{if(!O)return;const e=new ResizeObserver((e=>{for(const t of e)T(Math.max(d.cP,t.borderBoxSize?.[0]?.blockSize??t.contentRect.height))}));return e.observe(E.current.contentDocument.body,{box:"border-box"}),()=>{e.disconnect()}}),[O]);const q=(0,r.useCallback)(((e,n)=>{L((t=>({...t,[n]:e})));x(t,n).minLines||M(e.split("\n").length)}),[t]);(0,r.useEffect)((()=>{M(N(t,_))}),[t,_]),(0,r.useEffect)((()=>{Z(y(j,w))}),[j,w]);const D=(0,r.useCallback)((()=>{const e=!A;(0,a.flushSync)((()=>{I(e)})),e||(k.current?.resetScrollTop(),f.current.scrollIntoViewIfNeeded?f.current.scrollIntoViewIfNeeded():f.current.scrollIntoView({block:"nearest",inline:"nearest"}))}),[A]),H=z>d.qH,W={height:H&&!A?d.qH:Math.max(z,d.lV)};return r.createElement("div",{className:(0,s.Z)(g.example,u,{[g.expandable]:H,[g.condensed]:p}),ref:f},r.createElement("div",{className:g.tabs},t.map((e=>r.createElement("button",{className:(0,s.Z)(g.tab,{[g.active]:e.name===_}),key:e.name,onClick:()=>{P(e.name)}},"Bricks"===e.name?"Storyboard":e.name)))),r.createElement("div",{className:g.editorColumn,style:W},r.createElement(c,{fallback:r.createElement(h.Z,null)},(()=>{const e=n(94981).Z;return r.createElement(e,{files:t,currentFile:_,theme:"dark"===v?"vs-dark":"vs",className:g.editorContainer,typingEffectReady:O,onChange:q,ref:k})}))),r.createElement("div",{className:(0,s.Z)(g.previewColumn,A?g.expanded:g.collapsed),style:{maxHeight:H&&!A?d.qH:"unset",padding:d.$P}},r.createElement("div",{className:(0,s.Z)(g.preview,{[g.ready]:O})},r.createElement("iframe",{ref:E,src:C,loading:"lazy",onLoad:F,style:{height:w}})),!O&&r.createElement(h.Z,null)),H&&r.createElement("button",{className:g.buttonToggleShowMore,role:"button",onClick:D},A?r.createElement(m,null):r.createElement(b,null),r.createElement("span",null,A?"Show less":"Show more")))}function y(e,t){const n=t+2*d.$P,r=e*d.CZ+d.sE+d.z5;return Math.max(n,r)}function x(e,t){return e.find((e=>e.name===t))}function N(e,t){const n=x(e,t);return n.minLines??n.code.split("\n").length}},33788:(e,t,n)=>{n.d(t,{$P:()=>l,CZ:()=>r,cP:()=>a,lV:()=>s,qH:()=>c,sE:()=>o,z5:()=>i});const r=22,a=32,l=20,o=12,i=12,c=18*r+i+o,s=6*r+i+o},40173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),l=n(63800);const o={title:"\u5feb\u901f\u5f00\u59cb"},i=void 0,c={unversionedId:"learn/quick-start",id:"learn/quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"\u6b22\u8fce\u4f7f\u7528 Brick Next \u6587\u6863\uff01\u672c\u6587\u5c06\u5411\u60a8\u4ecb\u7ecd\u8986\u76d6 80% \u65e5\u5e38\u573a\u666f\u4f1a\u7528\u5230\u7684 Brick Next \u76f8\u5173\u6982\u5ff5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/learn/quick-start.mdx",sourceDirName:"learn",slug:"/learn/quick-start",permalink:"/next-docs/zh/docs/learn/quick-start",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb"},sidebar:"docsSidebar",next:{title:"\u6784\u4ef6\u751f\u547d\u5468\u671f",permalink:"/next-docs/zh/docs/concepts/brick-life-cycle"}},s={},p=[{value:"\u6784\u4ef6\u5d4c\u5957",id:"nesting-bricks",level:2},{value:"\u4e8b\u4ef6\u54cd\u5e94",id:"responding-to-events",level:2},{value:"\u6570\u636e\u5c55\u793a",id:"displaying-data",level:2},{value:"\u6761\u4ef6\u6e32\u67d3",id:"conditional-rendering",level:2},{value:"\u5217\u8868\u6e32\u67d3",id:"rendering-lists",level:2},{value:"\u6a21\u677f\u5236\u4f5c",id:"making-templates",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6b22\u8fce\u4f7f\u7528 Brick Next \u6587\u6863\uff01\u672c\u6587\u5c06\u5411\u60a8\u4ecb\u7ecd\u8986\u76d6 80% \u65e5\u5e38\u573a\u666f\u4f1a\u7528\u5230\u7684 Brick Next \u76f8\u5173\u6982\u5ff5\u3002"),(0,a.kt)("h2",{id:"nesting-bricks"},"\u6784\u4ef6\u5d4c\u5957"),(0,a.kt)("p",null,"Storyboards \u7531",(0,a.kt)("em",{parentName:"p"},"\u6784\u4ef6"),"\u7ec4\u6210\uff0c\u6784\u4ef6\u5c31\u662f HTML \u5143\u7d20\uff0c\u4e5f\u5305\u62ec",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components"},"\u81ea\u5b9a\u4e49\u5143\u7d20"),"\u3002\u5b9a\u4e49\u6784\u4ef6\u53ca\u5176\u5c5e\u6027\uff0c\u5e76\u901a\u8fc7\u5d4c\u5957\u7ec4\u6210\u4e00\u4e2a\u6811\u72b6\u7684\u7ed3\u6784\u3002"),(0,a.kt)("p",null,"Storyboards \u88ab\u5b9a\u4e49\u4e3a\u58f0\u660e\u5f0f\u7684\u7ed3\u6784\u5316\u6570\u636e\u3002\u5728\u6211\u4eec\u7684\u6587\u6863\u4e2d\u7684\u5927\u591a\u6570\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/YAML"},"YAML")," \u6765\u5b9a\u4e49 Storyboards\uff0c\u56e0\u4e3a\u5b83\u4e0e JSON \u6216\u5176\u4ed6\u8bed\u8a00\u76f8\u6bd4\uff0c\u8bed\u6cd5\u66f4\u7b80\u5355\uff0c\u540c\u65f6\u66f4\u5bb9\u6613\u9605\u8bfb\u3002\u4f46\u8bf7\u8bb0\u4f4f\uff0c\u5b83\u4eec\u53ea\u662f\u7ed3\u6784\u5316\u7684\u6570\u636e\u3002"),(0,a.kt)(l.Z,{files:[{name:"Bricks",code:"brick: div\nchildren:\n- brick: h1\n  properties:\n    textContent: Welcome to my app\n- brick: button\n  properties:\n    textContent: I'm a button"}],mdxType:"NextExample"}),(0,a.kt)("p",null,"\u5728\u4e0a\u8ff0\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7b49\u540c\u4e8e\u4ee5\u4e0b HTML \u7ed3\u6784\u7684 Storyboard\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<div>\n  <h1>Welcome to my app</h1>\n  <button>I'm a button</button>\n</div>\n")),(0,a.kt)("p",null,"\u5728\u672c\u6587\u793a\u4f8b\u4e2d\uff0c\u4e3a\u7b80\u5355\u8d77\u89c1\uff0c\u6211\u4eec\u90fd\u5c06\u4f7f\u7528\u539f\u751f HTML \u5143\u7d20\u4f5c\u4e3a\u6784\u4ef6\u3002\u4f46\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u5185\u7f6e\u7684\u6784\u4ef6\u5e93\uff0c\u5305\u542b\u8bb8\u591a\u5f00\u7bb1\u5373\u7528\u7684\u3001\u5e26\u6709\u826f\u597d\u8bbe\u8ba1\u7684\u81ea\u5b9a\u4e49\u5143\u7d20\u3002"),(0,a.kt)("h2",{id:"responding-to-events"},"\u4e8b\u4ef6\u54cd\u5e94"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u58f0\u660e",(0,a.kt)("a",{parentName:"p",href:"/next-docs/zh/docs/concepts/events"},(0,a.kt)("em",{parentName:"a"},"\u4e8b\u4ef6\u5904\u7406\u5668")),"\u6765\u54cd\u5e94\u4e8b\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"brick: button\nproperties:\n  textContent: Click me\n// highlight-start\nevents:\n  click:\n    action: console.log\n    args:\n    - You clicked me\n// highlight-end\n")),(0,a.kt)("h2",{id:"displaying-data"},"\u6570\u636e\u5c55\u793a"),(0,a.kt)("p",null,"\u5d4c\u5165 JavaScript ",(0,a.kt)("a",{parentName:"p",href:"/next-docs/zh/docs/concepts/expressions"},(0,a.kt)("em",{parentName:"a"},"\u8868\u8fbe\u5f0f"))," \u6765\u5c55\u793a\u52a8\u6001\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"brick: div\nproperties:\n// highlight-next-line\n  textContent: <% CTX.user.name %>\n")),(0,a.kt)("p",null,"\u6ce8\u610f\u5728\u6211\u4eec\u7684\u6587\u6863\u4e2d\uff0c\u8868\u8fbe\u5f0f\u6709\u81ea\u5df1\u7684\u8bed\u6cd5\u9ad8\u4eae\uff0c\u4f46\u5176\u5b9e\u5b83\u4eec\u53ea\u662f\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("p",null,"\u901a\u5e38\u60a8\u5e94\u8be5\u901a\u8fc7\u5b9a\u4e49 ",(0,a.kt)("a",{parentName:"p",href:"/next-docs/zh/docs/concepts/context"},(0,a.kt)("em",{parentName:"a"},"context"))," \u6765\u7ba1\u7406\u9875\u9762\u72b6\u6001\uff0c\u5e76\u4f7f\u7528\u8868\u8fbe\u5f0f\u5c06\u72b6\u6001\u7ed1\u5b9a\u5230\u6784\u4ef6\u5c5e\u6027\u3002\u60a8\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u5f53\u53d1\u751f\u7279\u5b9a\u4e8b\u4ef6\u65f6\u66f4\u65b0\u8fd9\u4e9b\u72b6\u6001\uff0c\u4e00\u65e6\u72b6\u6001\u66f4\u6539\uff0c\u7ed1\u5b9a\u7684\u5c5e\u6027\u5c06\u81ea\u52a8\u66f4\u65b0\u3002"),(0,a.kt)(l.Z,{files:[{name:"Bricks",code:"brick: button\nproperties:\n  textContent: <%= `Clicked ${CTX.count} times` %>\nevents:\n  click:\n    action: context.replace\n    args:\n    - count\n    - <% CTX.count + 1 %>"},{name:"Context",code:"- name: count\n  value: 0"}],mdxType:"NextExample"}),(0,a.kt)("p",null,"\u6ce8\u610f\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"<%= %>")," \u66ff\u4ee3 ",(0,a.kt)("inlineCode",{parentName:"p"},"<% %>")," \u6765\u6fc0\u6d3b\u7ed1\u5b9a\u6a21\u5f0f\u3002"),(0,a.kt)("h2",{id:"conditional-rendering"},"\u6761\u4ef6\u6e32\u67d3"),(0,a.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u5f0f\u6765\u5b9e\u73b0",(0,a.kt)("a",{parentName:"p",href:"/next-docs/zh/docs/concepts/conditional-rendering"},"\u6309\u6761\u4ef6\u6e32\u67d3\u6784\u4ef6"),"\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e00\u79cd\u65b9\u5f0f\u662f\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," \u5b57\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- if: <% CTX.isAdmin %>\n  brick: admin-panel\n- if: <% !CTX.isAdmin %>\n  brick: user-panel\n")),(0,a.kt)("p",null,"\u7b2c\u4e8c\u79cd\u662f\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"/next-docs/zh/docs/concepts/control-nodes"},(0,a.kt)("em",{parentName:"a"},"\u63a7\u5236\u8282\u70b9"))," ",(0,a.kt)("inlineCode",{parentName:"p"},":if"),"\u3002\u5982\u679c\u60a8\u7684\u6761\u4ef6\u5224\u65ad\u5f88\u590d\u6742\u6216\u8005\u6709\u591a\u4e2a\u6784\u4ef6\u9700\u8981\u6e32\u67d3\uff0c\u8fd9\u79cd\u65b9\u5f0f\u66f4\u65b9\u4fbf\u3002"),(0,a.kt)("p",null,"\u5b9a\u4e49\u6761\u4ef6\u5b57\u6bb5 ",(0,a.kt)("inlineCode",{parentName:"p"},"dataSource"),"\uff08\u901a\u5e38\u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff09\uff0c\u5e76\u5b9a\u4e49\u8981\u6e32\u67d3\u7684\u6784\u4ef6\u5217\u8868 ",(0,a.kt)("inlineCode",{parentName:"p"},"children"),"\u3002\u5982\u679c\u6761\u4ef6\u6ee1\u8db3\uff0c\u90a3\u4e9b\u6ca1\u6709\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"slot")," \u7684\u6784\u4ef6\u5c06\u88ab\u6e32\u67d3\uff0c\u5426\u5219 ",(0,a.kt)("inlineCode",{parentName:"p"},"slot")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," \u7684\u6784\u4ef6\u5c06\u88ab\u6e32\u67d3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"brick: ':if'\ndataSource: <% FN.check('my', 'complex', 'expression') %>\nchildren:\n- brick: admin-panel-a\n- brick: admin-panel-b\n- brick: user-panel-x\n  slot: else\n- brick: user-panel-y\n  slot: else\n")),(0,a.kt)("h2",{id:"rendering-lists"},"\u5217\u8868\u6e32\u67d3"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"/next-docs/zh/docs/concepts/control-nodes"},(0,a.kt)("em",{parentName:"a"},"\u63a7\u5236\u8282\u70b9"))," ",(0,a.kt)("inlineCode",{parentName:"p"},":forEach")," \u6765\u6e32\u67d3\u6784\u4ef6\u5217\u8868\u3002"),(0,a.kt)("p",null,"\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},":if")," \u8282\u70b9\u7c7b\u4f3c\uff0c\u60a8\u9700\u8981\u58f0\u660e\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"dataSource")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"children"),"\u3002\u5bf9\u4e8e\u5217\u8868\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"children")," \u5c06\u88ab\u6e32\u67d3\u4e00\u6b21\u3002\u60a8\u53ef\u4ee5\u5728\u8868\u8fbe\u5f0f\u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ITEM")," \u6765\u8bbf\u95ee\u5f53\u524d\u5faa\u73af\u7684\u6570\u636e\u9879\u3002"),(0,a.kt)(l.Z,{files:[{name:"Bricks",code:"brick: ul\nchildren:\n- brick: ':forEach'\n  dataSource: <% CTX.products %>\n  children:\n  - brick: li\n    properties:\n      textContent: <% ITEM.title %>\n      style:\n        color: |\n          <%\n            ITEM.isFruit ? 'magenta' : 'green'\n          %>"},{name:"Context",code:"- name: products\n  value:\n  - title: Cabbage\n    isFruit: false\n    id: 1\n  - title: Garlic\n    isFruit: false\n    id: 2\n  - title: Apple\n    isFruit: true\n    id: 3"}],mdxType:"NextExample"}),(0,a.kt)("h2",{id:"making-templates"},"\u6a21\u677f\u5236\u4f5c"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u521b\u5efa",(0,a.kt)("a",{parentName:"p",href:"/next-docs/zh/docs/concepts/custom-templates"},(0,a.kt)("em",{parentName:"a"},"\u6a21\u677f")),"\u6765\u5c01\u88c5\u90e8\u5206 UI\uff0c\u5e76\u4e14\u50cf\u5176\u5b83\u6784\u4ef6\u90a3\u6837\u590d\u7528\u5b83\u4eec\u3002"),(0,a.kt)("p",null,"\u6a21\u677f\u53ef\u4ee5\u6709\u81ea\u5df1\u7684\u9650\u5b9a\u4f5c\u7528\u57df\u7684\u3001\u548c context \u7c7b\u4f3c\u7684\u72b6\u6001\u6570\u636e\u3002\u8fd9\u4e9b\u6570\u636e\u53ef\u4ee5\u662f\u5185\u90e8\u7684\u72b6\u6001\uff0c\u4e5f\u53ef\u4ee5\u5bf9\u5916\u66b4\u9732\u4f5c\u4e3a\u8be5\u6a21\u677f\u7684\u5c5e\u6027\u3002"),(0,a.kt)(l.Z,{files:[{name:"Bricks",code:"- brick: tpl-description\n  properties:\n    label: Name\n    content: Harry Potter\n- brick: tpl-description\n  properties:\n    label: Gender\n    content: Male\n- brick: tpl-description\n  properties:\n    label: Age\n    content: 17"},{name:"tpl-description",defaultActive:!0,code:"state:\n- name: label\n  expose: true\n- name: content\n  expose: true\nbricks:\n- brick: strong\n  properties:\n    textContent: <%= STATE.label %>\n- brick: p\n  properties:\n    textContent: <%= STATE.content %>\n  "}],mdxType:"NextExample"}))}m.isMDXComponent=!0}}]);