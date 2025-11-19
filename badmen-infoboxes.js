import { LitElement, html, css } from "lit";

export class badmenInfoboxes extends LitElement {
  static get tag() {
    return "badmen-infoboxes";
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
     <h1>hello I am the info boxes</h1> 
    `;
  }
}

customElements.define(badmenInfoboxes.tag, badmenInfoboxes);