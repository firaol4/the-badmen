import { LitElement, html, css } from "lit";

export class badmenDatecard extends LitElement {
  static get tag() {
    return "badmen-datecard";
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
     <h1>hello I am the date card</h1> 
    `;
  }
}

customElements.define(badmenDatecard.tag, badmenDatecard);