import { LitElement, html, css } from "lit";

export class badmenTeamname extends LitElement {
  static get tag() {
    return "badmen-teamname";
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
     <h1>hello I am the team name</h1> 
    `;
  }
}

customElements.define(badmenTeamname.tag, badmenTeamname);