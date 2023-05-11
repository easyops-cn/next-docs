/*! For license information please see sl-card.15a90e29.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[5967],{7680:(e,t,r)=>{r.r(t),r(4775),r(5517)},5517:(e,t,r)=>{r(2969),r(3467);var a=r(4124);function s(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}r(1744),(0,a.t)(r.p),s(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{s(e.detail)}))},738:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(9601),s=r.n(a),o=r(2609),d=r.n(o)()(s());d.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}",""]);const n=d},1744:(e,t,r)=>{var a=r(6062),s=r.n(a),o=r(4036),d=r.n(o),n=r(6793),i=r.n(n),l=r(7892),h=r.n(l),c=r(1173),u=r.n(c),m=r(2464),p=r.n(m),v=r(738),b={};b.styleTagTransform=p(),b.setAttributes=h(),b.insert=i().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=u(),s()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals},3515:(e,t,r)=>{r.d(t,{F:()=>s,r:()=>a});var a=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}};function s(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach((e=>{e.nodeType===Node.TEXT_NODE&&(r+=e.textContent)})),r}},5381:(e,t,r)=>{r.d(t,{o:()=>o});var a=r(4370),s=r(5954),o=(0,a.e)(class extends a.i{constructor(e){var t;if(super(e),e.type!==a.t.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var r,a;if(void 0===this.nt){this.nt=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(r=this.st)||void 0===r?void 0:r.has(e))&&this.nt.add(e);return this.render(t)}const o=e.element.classList;this.nt.forEach((e=>{e in t||(o.remove(e),this.nt.delete(e))}));for(const e in t){const r=!!t[e];r===this.nt.has(e)||(null===(a=this.st)||void 0===a?void 0:a.has(e))||(r?(o.add(e),this.nt.add(e)):(o.remove(e),this.nt.delete(e)))}return s.x}})},4370:(e,t,r)=>{r.d(t,{e:()=>s,i:()=>o,t:()=>a});var a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=e=>(...t)=>({_$litDirective$:e,values:t}),o=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},4775:(e,t,r)=>{var a=r(6281),s=r(5954),o=s.i`
  ${a.N}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,d=r(3515),n=r(5381),i=r(8424),l=r(453),h=class extends i.P{constructor(){super(...arguments),this.hasSlotController=new d.r(this,"footer","header","image")}render(){return s.y`
      <div
        part="base"
        class=${(0,n.o)({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};h.styles=o,h=(0,l.u2)([(0,i.e)("sl-card")],h),r(4370)}}]);
//# sourceMappingURL=sl-card.15a90e29.js.map