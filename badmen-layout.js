import { LitElement, html, css } from "lit";

export class badmenLayout extends LitElement {
  static get tag() {
    return "badmen-layout";
  }

  static get properties() {
    return {
      
    };
  }

  constructor() {
    super();
    
  }



  static get styles() {
    return css`
     
    `;
  }

  render() {
    return html`
     <h1>hello I am the layout</h1> 
    `;
  }
}

customElements.define(badmenLayout.tag, badmenLayout);