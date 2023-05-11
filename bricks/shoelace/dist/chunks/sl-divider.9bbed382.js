"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[6327],{1868:(t,e,a)=>{a.r(e),a(2924),a(5517)},5517:(t,e,a)=>{a(2969),a(3467);var r=a(4124);function i(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}a(1744),(0,r.t)(a.p),i(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{i(t.detail)}))},738:(t,e,a)=>{a.d(e,{Z:()=>l});var r=a(9601),i=a.n(r),s=a(2609),n=a.n(s)()(i());n.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}",""]);const l=n},1744:(t,e,a)=>{var r=a(6062),i=a.n(r),s=a(4036),n=a.n(s),l=a(6793),o=a.n(l),d=a(7892),c=a.n(d),h=a(1173),p=a.n(h),u=a(2464),v=a.n(u),m=a(738),b={};b.styleTagTransform=v(),b.setAttributes=c(),b.insert=o().bind(null,"head"),b.domAPI=n(),b.insertStyleElement=p(),i()(m.Z,b),m.Z&&m.Z.locals&&m.Z.locals},5710:(t,e,a)=>{a.d(e,{Y:()=>i});var r=a(453);function i(t,e){const a=(0,r.ih)({waitUntilFirstUpdate:!1},e);return(e,r)=>{const{update:i}=e,s=Array.isArray(t)?t:[t];e.update=function(t){s.forEach((e=>{const i=e;if(t.has(i)){const e=t.get(i),s=this[i];e!==s&&(a.waitUntilFirstUpdate&&!this.hasUpdated||this[r](e,s))}})),i.call(this,t)}}}},2924:(t,e,a)=>{var r=a(6281),i=a(5954).i`
  ${r.N}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,s=a(5710),n=a(8424),l=a(453),o=class extends n.P{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};o.styles=i,(0,l.u2)([(0,n.e2)({type:Boolean,reflect:!0})],o.prototype,"vertical",2),(0,l.u2)([(0,s.Y)("vertical")],o.prototype,"handleVerticalChange",1),o=(0,l.u2)([(0,n.e)("sl-divider")],o)}}]);
//# sourceMappingURL=sl-divider.9bbed382.js.map