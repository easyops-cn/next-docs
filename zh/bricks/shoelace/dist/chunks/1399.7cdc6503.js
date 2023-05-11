/*! For license information please see 1399.7cdc6503.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[1399],{9940:(t,e,n)=>{var o,s=n(9191),r=n(1939),i=n(5710),l=n(8424),a=n(453),c=Symbol(),d=Symbol(),h=new Map,u=class extends l.P{constructor(){super(...arguments),this.svg=null,this.label="",this.library="default"}static async resolveIcon(t){var e;let n;try{if(n=await fetch(t,{mode:"cors"}),!n.ok)return 410===n.status?c:d}catch(t){return d}try{const t=document.createElement("div");t.innerHTML=await n.text();const s=t.firstElementChild;if("svg"!==(null==(e=null==s?void 0:s.tagName)?void 0:e.toLowerCase()))return c;o||(o=new DOMParser);const r=o.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return r?(r.part.add("svg"),document.adoptNode(r)):c}catch(t){return c}}connectedCallback(){super.connectedCallback(),(0,s.E4)(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),(0,s.Sw)(this)}getUrl(){const t=(0,s.Tb)(this.library);return this.name&&t?t.resolver(this.name):this.src}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const e=(0,s.Tb)(this.library),n=this.getUrl();if(!n)return void(this.svg=null);let o=h.get(n);o||(o=u.resolveIcon(n),h.set(n,o));const r=await o;if(r===d&&h.delete(n),n===this.getUrl())switch(r){case d:case c:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),null==(t=null==e?void 0:e.mutator)||t.call(e,this.svg),this.emit("sl-load")}}render(){return this.svg}};u.styles=r.W,(0,a.u2)([(0,l.t)()],u.prototype,"svg",2),(0,a.u2)([(0,l.e2)({reflect:!0})],u.prototype,"name",2),(0,a.u2)([(0,l.e2)()],u.prototype,"src",2),(0,a.u2)([(0,l.e2)()],u.prototype,"label",2),(0,a.u2)([(0,l.e2)({reflect:!0})],u.prototype,"library",2),(0,a.u2)([(0,i.Y)("label")],u.prototype,"handleLabelChange",1),(0,a.u2)([(0,i.Y)(["name","src","library"])],u.prototype,"setIcon",1),u=(0,a.u2)([(0,l.e)("sl-icon")],u)},1939:(t,e,n)=>{n.d(e,{W:()=>s});var o=n(6281),s=n(5954).i`
  ${o.N}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`},2759:(t,e,n)=>{n.d(e,{J:()=>s});var o={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},s={name:"system",resolver:t=>t in o?`data:image/svg+xml,${encodeURIComponent(o[t])}`:""}},3251:(t,e,n)=>{n.d(e,{i:()=>i,n:()=>c});var o=n(5954),s=Symbol.for(""),r=t=>{if((null==t?void 0:t.r)===s)return null==t?void 0:t._$litStatic$},i=(t,...e)=>({_$litStatic$:e.reduce(((e,n,o)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[o+1]),t[0]),r:s}),l=new Map,a=t=>(e,...n)=>{const o=n.length;let s,i;const a=[],c=[];let d,h=0,u=!1;for(;h<o;){for(d=e[h];h<o&&void 0!==(i=n[h],s=r(i));)d+=s+e[++h],u=!0;c.push(i),a.push(d),h++}if(h===o&&a.push(e[o]),u){const t=a.join("$$lit$$");void 0===(e=l.get(t))&&(a.raw=a,l.set(t,e=a)),n=c}return t(e,...n)},c=a(o.y);a(o.w)},3149:(t,e,n)=>{var o=n(4073),s=n(3251),r=n(8734),i=n(5381),l=n(8424),a=n(453),c=class extends l.P{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?s.i`a`:s.i`button`;return s.n`
      <${e}
        part="base"
        class=${(0,i.o)({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${(0,r.l)(t?void 0:this.disabled)}
        type=${(0,r.l)(t?void 0:"button")}
        href=${(0,r.l)(t?this.href:void 0)}
        target=${(0,r.l)(t?this.target:void 0)}
        download=${(0,r.l)(t?this.download:void 0)}
        rel=${(0,r.l)(t&&this.target?"noreferrer noopener":void 0)}
        role=${(0,r.l)(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${(0,r.l)(this.name)}
          library=${(0,r.l)(this.library)}
          src=${(0,r.l)(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};c.styles=o.Z,(0,a.u2)([(0,l.i)(".icon-button")],c.prototype,"button",2),(0,a.u2)([(0,l.t)()],c.prototype,"hasFocus",2),(0,a.u2)([(0,l.e2)()],c.prototype,"name",2),(0,a.u2)([(0,l.e2)()],c.prototype,"library",2),(0,a.u2)([(0,l.e2)()],c.prototype,"src",2),(0,a.u2)([(0,l.e2)()],c.prototype,"href",2),(0,a.u2)([(0,l.e2)()],c.prototype,"target",2),(0,a.u2)([(0,l.e2)()],c.prototype,"download",2),(0,a.u2)([(0,l.e2)()],c.prototype,"label",2),(0,a.u2)([(0,l.e2)({type:Boolean,reflect:!0})],c.prototype,"disabled",2),c=(0,a.u2)([(0,l.e)("sl-icon-button")],c)},1862:(t,e,n)=>{n.d(e,{P:()=>c,V:()=>h});var o,s=new Set,r=new MutationObserver(d),i=new Map,l=document.documentElement.dir||"ltr",a=document.documentElement.lang||navigator.language;function c(...t){t.map((t=>{const e=t.$code.toLowerCase();i.has(e)?i.set(e,Object.assign(Object.assign({},i.get(e)),t)):i.set(e,t),o||(o=t)})),d()}function d(){l=document.documentElement.dir||"ltr",a=document.documentElement.lang||navigator.language,[...s.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}r.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var h=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){s.add(this.host)}hostDisconnected(){s.delete(this.host)}dir(){return`${this.host.dir||l}`.toLowerCase()}lang(){return`${this.host.lang||a}`.toLowerCase()}getTranslationData(t){var e,n;const o=new Intl.Locale(t),s=null==o?void 0:o.language.toLowerCase(),r=null!==(n=null===(e=null==o?void 0:o.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==n?n:"";return{locale:o,language:s,region:r,primary:i.get(`${s}-${r}`),secondary:i.get(s)}}exists(t,e){var n;const{primary:s,secondary:r}=this.getTranslationData(null!==(n=e.lang)&&void 0!==n?n:this.lang());return e=Object.assign({includeFallback:!1},e),!!(s&&s[t]||r&&r[t]||e.includeFallback&&o&&o[t])}term(t,...e){const{primary:n,secondary:s}=this.getTranslationData(this.lang());let r;if(n&&n[t])r=n[t];else if(s&&s[t])r=s[t];else{if(!o||!o[t])return console.error(`No translation found for: ${String(t)}`),String(t);r=o[t]}return"function"==typeof r?r(...e):r}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(t,e)}}},8379:(t,e,n)=>{n.d(e,{V:()=>s});var o=n(1862),s=class extends o.V{};(0,o.P)({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"})},5381:(t,e,n)=>{n.d(e,{o:()=>r});var o=n(4370),s=n(5954),r=(0,o.e)(class extends o.i{constructor(t){var e;if(super(t),t.type!==o.t.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var n,o;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(n=this.st)||void 0===n?void 0:n.has(t))&&this.nt.add(t);return this.render(e)}const r=t.element.classList;this.nt.forEach((t=>{t in e||(r.remove(t),this.nt.delete(t))}));for(const t in e){const n=!!e[t];n===this.nt.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(n?(r.add(t),this.nt.add(t)):(r.remove(t),this.nt.delete(t)))}return s.x}})},836:(t,e,n)=>{n.d(e,{Z:()=>s});var o=n(9264),s={name:"default",resolver:t=>(0,o.b)(`assets/icons/${t}.svg`)}},4073:(t,e,n)=>{n.d(e,{Z:()=>s});var o=n(6281),s=n(5954).i`
  ${o.N}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`},4370:(t,e,n)=>{n.d(e,{e:()=>s,i:()=>r,t:()=>o});var o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=t=>(...e)=>({_$litDirective$:t,values:e}),r=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},8734:(t,e,n)=>{n.d(e,{l:()=>s});var o=n(5954),s=t=>null!=t?t:o.b},9191:(t,e,n)=>{n.d(e,{E4:()=>l,Sw:()=>a,Tb:()=>c});var o=n(836),s=n(2759),r=[o.Z,s.J],i=[];function l(t){i.push(t)}function a(t){i=i.filter((e=>e!==t))}function c(t){return r.find((e=>e.name===t))}},5710:(t,e,n)=>{n.d(e,{Y:()=>s});var o=n(453);function s(t,e){const n=(0,o.ih)({waitUntilFirstUpdate:!1},e);return(e,o)=>{const{update:s}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach((e=>{const s=e;if(t.has(s)){const e=t.get(s),r=this[s];e!==r&&(n.waitUntilFirstUpdate&&!this.hasUpdated||this[o](e,r))}})),s.call(this,t)}}}}}]);
//# sourceMappingURL=1399.7cdc6503.js.map