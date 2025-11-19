import { LitElement, html, css } from "lit";

export class badmenCalendar extends LitElement {
  static get tag() {
    return "badmen-calendar";
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
     <h1>hello I am the calendar</h1> 
    `;
  }
}

customElements.define(badmenCalendar.tag, badmenCalendar);