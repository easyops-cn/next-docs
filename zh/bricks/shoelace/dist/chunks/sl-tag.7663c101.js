"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[400],{265:(r,a,e)=>{e.r(a),e(1025),e(5517)},5517:(r,a,e)=>{e(2969),e(3467);var l=e(4124);function t(r){document.documentElement.classList["dark"===r||"dark-v2"===r?"add":"remove"]("sl-theme-dark")}e(1744),(0,l.t)(e.p),t(document.documentElement.dataset.theme),window.addEventListener("theme.change",(r=>{t(r.detail)}))},738:(r,a,e)=>{e.d(a,{Z:()=>i});var l=e(9601),t=e.n(l),o=e(2609),s=e.n(o)()(t());s.push([r.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}",""]);const i=s},1744:(r,a,e)=>{var l=e(6062),t=e.n(l),o=e(4036),s=e.n(o),i=e(6793),n=e.n(i),c=e(7892),d=e.n(c),g=e(1173),u=e.n(g),v=e(2464),m=e.n(v),h=e(738),p={};p.styleTagTransform=m(),p.setAttributes=d(),p.insert=n().bind(null,"head"),p.domAPI=s(),p.insertStyleElement=u(),t()(h.Z,p),h.Z&&h.Z.locals&&h.Z.locals},8595:(r,a,e)=>{e.d(a,{l:()=>t});var l=e(6281),t=e(5954).i`
  ${l.N}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`},5013:(r,a,e)=>{var l=e(8595),t=e(8379),o=e(5381),s=e(8424),i=e(5954),n=e(453),c=class extends s.P{constructor(){super(...arguments),this.localize=new t.V(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return i.y`
      <span
        part="base"
        class=${(0,o.o)({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?i.y`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};c.styles=l.l,(0,n.u2)([(0,s.e2)({reflect:!0})],c.prototype,"variant",2),(0,n.u2)([(0,s.e2)({reflect:!0})],c.prototype,"size",2),(0,n.u2)([(0,s.e2)({type:Boolean,reflect:!0})],c.prototype,"pill",2),(0,n.u2)([(0,s.e2)({type:Boolean})],c.prototype,"removable",2),c=(0,n.u2)([(0,s.e)("sl-tag")],c)},1025:(r,a,e)=>{e(5013),e(8595),e(3149),e(4073),e(3251),e(8734),e(8379),e(1862),e(9940),e(9191),e(836),e(2759),e(1939),e(5710),e(5381),e(4370),e(8424),e(6281),e(5954),e(453)}}]);
//# sourceMappingURL=sl-tag.7663c101.js.map