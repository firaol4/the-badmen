import { LitElement, html, css } from "lit";

export class badmenStats extends LitElement {
  static get tag() {
    return "badmen-stats";
  }

  static get properties() {
    return {
      number: { type: String },
      label: { type: String }
    };
  }

  constructor() {
    super();
    this.number = "0";
    this.label = "";
    
  }



  static get styles() {
    return css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 100%;           
      padding: 40px 0;       

      background: #2f2f2f;
      border-radius: 12px;

      color: white;
      text-align: center;

      box-sizing: row;
      }

      .number {
        font-size: 136px;
        font-weight: 250;
        margin-bottom: 4px;
        color: #38f3b1;
      }

      .label {
        font-size: 36px;
        
      }
     
    `;
  }

  render() {
    return html`
    
     <div class="number">${this.number}</div>
      <div class="label">${this.label}</div> 
    `;
  }
}

customElements.define(badmenStats.tag, badmenStats);