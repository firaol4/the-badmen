import { LitElement, html, css } from "lit";

export class badmenStats extends LitElement {
  static get tag() {
    return "badmen-stats";
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
     <h1>hello I am the stats</h1> 
    `;
  }
}

customElements.define(badmenStats.tag, badmenStats);