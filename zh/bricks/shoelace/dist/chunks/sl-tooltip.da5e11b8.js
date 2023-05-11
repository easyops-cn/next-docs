/*! For license information please see sl-tooltip.da5e11b8.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[7443],{402:(t,e,o)=>{o.r(e),o(828),o(5517)},5517:(t,e,o)=>{o(2969),o(3467);var i=o(4124);function s(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}o(1744),(0,i.t)(o.p),s(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{s(t.detail)}))},738:(t,e,o)=>{o.d(e,{Z:()=>a});var i=o(9601),s=o.n(i),n=o(2609),r=o.n(n)()(s());r.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}",""]);const a=r},1744:(t,e,o)=>{var i=o(6062),s=o.n(i),n=o(4036),r=o.n(n),a=o(6793),l=o.n(a),h=o(7892),d=o.n(h),p=o(1173),c=o.n(p),u=o(2464),m=o.n(u),g=o(738),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=c(),s()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals},1862:(t,e,o)=>{o.d(e,{P:()=>h,V:()=>p});var i,s=new Set,n=new MutationObserver(d),r=new Map,a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function h(...t){t.map((t=>{const e=t.$code.toLowerCase();r.has(e)?r.set(e,Object.assign(Object.assign({},r.get(e)),t)):r.set(e,t),i||(i=t)})),d()}function d(){a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...s.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}n.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var p=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){s.add(this.host)}hostDisconnected(){s.delete(this.host)}dir(){return`${this.host.dir||a}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(t){var e,o;const i=new Intl.Locale(t),s=null==i?void 0:i.language.toLowerCase(),n=null!==(o=null===(e=null==i?void 0:i.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==o?o:"";return{locale:i,language:s,region:n,primary:r.get(`${s}-${n}`),secondary:r.get(s)}}exists(t,e){var o;const{primary:s,secondary:n}=this.getTranslationData(null!==(o=e.lang)&&void 0!==o?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(s&&s[t]||n&&n[t]||e.includeFallback&&i&&i[t])}term(t,...e){const{primary:o,secondary:s}=this.getTranslationData(this.lang());let n;if(o&&o[t])n=o[t];else if(s&&s[t])n=s[t];else{if(!i||!i[t])return console.error(`No translation found for: ${String(t)}`),String(t);n=i[t]}return"function"==typeof n?n(...e):n}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}}},8379:(t,e,o)=>{o.d(e,{V:()=>s});var i=o(1862),s=class extends i.V{};(0,i.P)({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"})},5381:(t,e,o)=>{o.d(e,{o:()=>n});var i=o(4370),s=o(5954),n=(0,i.e)(class extends i.i{constructor(t){var e;if(super(t),t.type!==i.t.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var o,i;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(o=this.st)||void 0===o?void 0:o.has(t))&&this.nt.add(t);return this.render(e)}const n=t.element.classList;this.nt.forEach((t=>{t in e||(n.remove(t),this.nt.delete(t))}));for(const t in e){const o=!!e[t];o===this.nt.has(t)||(null===(i=this.st)||void 0===i?void 0:i.has(t))||(o?(n.add(t),this.nt.add(t)):(n.remove(t),this.nt.delete(t)))}return s.x}})},4370:(t,e,o)=>{o.d(e,{e:()=>s,i:()=>n,t:()=>i});var i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=t=>(...e)=>({_$litDirective$:t,values:e}),n=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},5710:(t,e,o)=>{o.d(e,{Y:()=>s});var i=o(453);function s(t,e){const o=(0,i.ih)({waitUntilFirstUpdate:!1},e);return(e,i)=>{const{update:s}=e,n=Array.isArray(t)?t:[t];e.update=function(t){n.forEach((e=>{const s=e;if(t.has(s)){const e=t.get(s),n=this[s];e!==n&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](e,n))}})),s.call(this,t)}}}},828:(t,e,o)=>{var i=o(6281),s=o(5954),n=s.i`
  ${i.N}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
  }
`,r=o(2486),a=o(4867),l=o(9745),h=o(8379),d=o(5710),p=o(5381),c=o(8424),u=o(453),m=class extends c.P{constructor(){super(...arguments),this.localize=new h.V(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.updateComplete.then((()=>{this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}))}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",this.handleBlur,!0),this.removeEventListener("focus",this.handleFocus,!0),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut)}handleBlur(){this.hasTrigger("focus")&&this.hide()}handleClick(){this.hasTrigger("click")&&(this.open?this.hide():this.show())}handleFocus(){this.hasTrigger("focus")&&this.show()}handleKeyDown(t){this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide())}handleMouseOver(){if(this.hasTrigger("hover")){const t=(0,l.RA)(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),t)}}handleMouseOut(){if(this.hasTrigger("hover")){const t=(0,l.RA)(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),t)}}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await(0,l.U_)(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=(0,r.O8)(this,"tooltip.show",{dir:this.localize.dir()});await(0,l.nv)(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),await(0,l.U_)(this.body);const{keyframes:t,options:e}=(0,r.O8)(this,"tooltip.hide",{dir:this.localize.dir()});await(0,l.nv)(this.popup.popup,t,e),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,(0,a.m)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,a.m)(this,"sl-after-hide")}render(){return s.y`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${(0,p.o)({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        <slot
          name="content"
          part="body"
          id="tooltip"
          class="tooltip__body"
          role="tooltip"
          aria-live=${this.open?"polite":"off"}
        >
          ${this.content}
        </slot>
      </sl-popup>
    `}};m.styles=n,(0,u.u2)([(0,c.i)("slot:not([name])")],m.prototype,"defaultSlot",2),(0,u.u2)([(0,c.i)(".tooltip__body")],m.prototype,"body",2),(0,u.u2)([(0,c.i)("sl-popup")],m.prototype,"popup",2),(0,u.u2)([(0,c.e2)()],m.prototype,"content",2),(0,u.u2)([(0,c.e2)()],m.prototype,"placement",2),(0,u.u2)([(0,c.e2)({type:Boolean,reflect:!0})],m.prototype,"disabled",2),(0,u.u2)([(0,c.e2)({type:Number})],m.prototype,"distance",2),(0,u.u2)([(0,c.e2)({type:Boolean,reflect:!0})],m.prototype,"open",2),(0,u.u2)([(0,c.e2)({type:Number})],m.prototype,"skidding",2),(0,u.u2)([(0,c.e2)()],m.prototype,"trigger",2),(0,u.u2)([(0,c.e2)({type:Boolean})],m.prototype,"hoist",2),(0,u.u2)([(0,d.Y)("open",{waitUntilFirstUpdate:!0})],m.prototype,"handleOpenChange",1),(0,u.u2)([(0,d.Y)(["content","distance","hoist","placement","skidding"])],m.prototype,"handleOptionsChange",1),(0,u.u2)([(0,d.Y)("disabled")],m.prototype,"handleDisabledChange",1),m=(0,u.u2)([(0,c.e)("sl-tooltip")],m),(0,r.jx)("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),(0,r.jx)("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),o(6789),o(1732),o(1862),o(4370)}}]);
//# sourceMappingURL=sl-tooltip.da5e11b8.js.map