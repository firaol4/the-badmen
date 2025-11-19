import { LitElement, html, css } from "lit";

export class badmenSignup extends LitElement {
  static get tag() {
    return "badmen-signup";
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
     <h1>hello I am the signup</h1> 
    `;
  }
}

customElements.define(badmenSignup.tag, badmenSignup);