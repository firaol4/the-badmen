import { LitElement, html, css } from "lit";

export class badmenNavbar extends LitElement {
  static get tag() {
    return "badmen-navbar";
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
     <h1>hello I am the navbar</h1> 
    `;
  }
}

customElements.define(badmenNavbar.tag, badmenNavbar);