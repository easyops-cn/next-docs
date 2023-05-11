/*! For license information please see sl-dropdown.4534b658.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[600],{4495:(e,t,n)=>{n.r(t),n(3387),n(5517)},5517:(e,t,n)=>{n(2969),n(3467);var o=n(4124);function s(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}n(1744),(0,o.t)(n.p),s(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{s(e.detail)}))},738:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(9601),s=n.n(o),i=n(2609),a=n.n(i)()(s());a.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}",""]);const r=a},1744:(e,t,n)=>{var o=n(6062),s=n.n(o),i=n(4036),a=n.n(i),r=n(6793),l=n.n(r),d=n(7892),h=n.n(d),p=n(1173),c=n.n(p),u=n(2464),m=n.n(u),g=n(738),w={};w.styleTagTransform=m(),w.setAttributes=h(),w.insert=l().bind(null,"head"),w.domAPI=a(),w.insertStyleElement=c(),s()(g.Z,w),g.Z&&g.Z.locals&&g.Z.locals},8977:(e,t,n)=>{n.d(t,{y:()=>s});var o=n(6281),s=n(5954).i`
  ${o.N}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`},9157:(e,t,n)=>{var o=n(8977),s=n(1199),i=n(2486),a=n(4867),r=n(9745),l=n(8379),d=n(5710),h=n(5381),p=n(8424),c=n(5954),u=n(453),m=class extends p.P{constructor(){super(...arguments),this.localize=new l.V(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==e?void 0:e.focus)&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find((e=>"sl-menu"===e.tagName.toLowerCase()))}handleKeyDown(e){this.open&&"Escape"===e.key&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())}handleDocumentKeyDown(e){var t;if("Escape"===e.key&&this.open)return e.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===e.key){if(this.open&&"sl-menu-item"===(null==(t=document.activeElement)?void 0:t.tagName.toLowerCase()))return e.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var e,t,n;const o=(null==(e=this.containingElement)?void 0:e.getRootNode())instanceof ShadowRoot?null==(n=null==(t=document.activeElement)?void 0:t.shadowRoot)?void 0:n.activeElement:document.activeElement;this.containingElement&&(null==o?void 0:o.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}}handleDocumentMouseDown(e){const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}handlePanelSelect(e){const t=e.target;this.stayOpenOnSelect||"sl-menu"!==t.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key))return e.preventDefault(),void this.handleTriggerClick();const t=this.getMenu();if(t){const n=t.getAllItems(),o=n[0],s=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||this.show(),n.length>0&&this.updateComplete.then((()=>{"ArrowDown"!==e.key&&"Home"!==e.key||(t.setCurrentItem(o),o.focus()),"ArrowUp"!==e.key&&"End"!==e.key||(t.setCurrentItem(s),s.focus())})))}}handleTriggerKeyUp(e){" "===e.key&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find((e=>(0,s.C)(e).start));let t;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":t=e.button;break;default:t=e}t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,(0,a.m)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,a.m)(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await(0,r.U_)(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=(0,i.O8)(this,"dropdown.show",{dir:this.localize.dir()});await(0,r.nv)(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await(0,r.U_)(this);const{keyframes:e,options:t}=(0,i.O8)(this,"dropdown.hide",{dir:this.localize.dir()});await(0,r.nv)(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return c.y`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${(0,h.o)({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <slot
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open?"false":"true"}
          aria-labelledby="dropdown"
        ></slot>
      </sl-popup>
    `}};m.styles=o.y,(0,u.u2)([(0,p.i)(".dropdown")],m.prototype,"popup",2),(0,u.u2)([(0,p.i)(".dropdown__trigger")],m.prototype,"trigger",2),(0,u.u2)([(0,p.i)(".dropdown__panel")],m.prototype,"panel",2),(0,u.u2)([(0,p.e2)({type:Boolean,reflect:!0})],m.prototype,"open",2),(0,u.u2)([(0,p.e2)({reflect:!0})],m.prototype,"placement",2),(0,u.u2)([(0,p.e2)({type:Boolean,reflect:!0})],m.prototype,"disabled",2),(0,u.u2)([(0,p.e2)({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],m.prototype,"stayOpenOnSelect",2),(0,u.u2)([(0,p.e2)({attribute:!1})],m.prototype,"containingElement",2),(0,u.u2)([(0,p.e2)({type:Number})],m.prototype,"distance",2),(0,u.u2)([(0,p.e2)({type:Number})],m.prototype,"skidding",2),(0,u.u2)([(0,p.e2)({type:Boolean})],m.prototype,"hoist",2),(0,u.u2)([(0,d.Y)("open",{waitUntilFirstUpdate:!0})],m.prototype,"handleOpenChange",1),m=(0,u.u2)([(0,p.e)("sl-dropdown")],m),(0,i.jx)("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),(0,i.jx)("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}})},1199:(e,t,n)=>{function o(e){const t=e.tagName.toLowerCase();return"-1"!==e.getAttribute("tabindex")&&!e.hasAttribute("disabled")&&(!e.hasAttribute("aria-disabled")||"false"===e.getAttribute("aria-disabled"))&&!("input"===t&&"radio"===e.getAttribute("type")&&!e.hasAttribute("checked"))&&null!==e.offsetParent&&"hidden"!==window.getComputedStyle(e).visibility&&(!("audio"!==t&&"video"!==t||!e.hasAttribute("controls"))||!!e.hasAttribute("tabindex")||!(!e.hasAttribute("contenteditable")||"false"===e.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(t))}function s(e){var t,n;const s=[];return function e(t){t instanceof HTMLElement&&(s.push(t),null!==t.shadowRoot&&"open"===t.shadowRoot.mode&&e(t.shadowRoot)),[...t.children].forEach((t=>e(t)))}(e),{start:null!=(t=s.find((e=>o(e))))?t:null,end:null!=(n=s.reverse().find((e=>o(e))))?n:null}}n.d(t,{C:()=>s})},1862:(e,t,n)=>{n.d(t,{P:()=>d,V:()=>p});var o,s=new Set,i=new MutationObserver(h),a=new Map,r=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function d(...e){e.map((e=>{const t=e.$code.toLowerCase();a.has(t)?a.set(t,Object.assign(Object.assign({},a.get(t)),e)):a.set(t,e),o||(o=e)})),h()}function h(){r=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...s.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}i.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var p=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){s.add(this.host)}hostDisconnected(){s.delete(this.host)}dir(){return`${this.host.dir||r}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(e){var t,n;const o=new Intl.Locale(e),s=null==o?void 0:o.language.toLowerCase(),i=null!==(n=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==n?n:"";return{locale:o,language:s,region:i,primary:a.get(`${s}-${i}`),secondary:a.get(s)}}exists(e,t){var n;const{primary:s,secondary:i}=this.getTranslationData(null!==(n=t.lang)&&void 0!==n?n:this.lang());return t=Object.assign({includeFallback:!1},t),!!(s&&s[e]||i&&i[e]||t.includeFallback&&o&&o[e])}term(e,...t){const{primary:n,secondary:s}=this.getTranslationData(this.lang());let i;if(n&&n[e])i=n[e];else if(s&&s[e])i=s[e];else{if(!o||!o[e])return console.error(`No translation found for: ${String(e)}`),String(e);i=o[e]}return"function"==typeof i?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}}},8379:(e,t,n)=>{n.d(t,{V:()=>s});var o=n(1862),s=class extends o.V{};(0,o.P)({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"})},5381:(e,t,n)=>{n.d(t,{o:()=>i});var o=n(4370),s=n(5954),i=(0,o.e)(class extends o.i{constructor(e){var t;if(super(e),e.type!==o.t.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var n,o;if(void 0===this.nt){this.nt=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(n=this.st)||void 0===n?void 0:n.has(e))&&this.nt.add(e);return this.render(t)}const i=e.element.classList;this.nt.forEach((e=>{e in t||(i.remove(e),this.nt.delete(e))}));for(const e in t){const n=!!t[e];n===this.nt.has(e)||(null===(o=this.st)||void 0===o?void 0:o.has(e))||(n?(i.add(e),this.nt.add(e)):(i.remove(e),this.nt.delete(e)))}return s.x}})},4370:(e,t,n)=>{n.d(t,{e:()=>s,i:()=>i,t:()=>o});var o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=e=>(...t)=>({_$litDirective$:e,values:t}),i=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},5710:(e,t,n)=>{n.d(t,{Y:()=>s});var o=n(453);function s(e,t){const n=(0,o.ih)({waitUntilFirstUpdate:!1},t);return(t,o)=>{const{update:s}=t,i=Array.isArray(e)?e:[e];t.update=function(e){i.forEach((t=>{const s=t;if(e.has(s)){const t=e.get(s),i=this[s];t!==i&&(n.waitUntilFirstUpdate&&!this.hasUpdated||this[o](t,i))}})),s.call(this,e)}}}},3387:(e,t,n)=>{n(9157),n(6789),n(1732),n(8977),n(2486),n(9745),n(8379),n(1862),n(5710),n(5381),n(4370),n(8424),n(6281),n(5954),n(453)}}]);
//# sourceMappingURL=sl-dropdown.4534b658.js.map