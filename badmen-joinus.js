import { LitElement, html, css } from "lit";

export class badmenJoinus extends LitElement {
  static get tag() {
    return "badmen-joinus";
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
     <h1>hello I am the join us</h1> 
    `;
  }
}

customElements.define(badmenJoinus.tag, badmenJoinus);