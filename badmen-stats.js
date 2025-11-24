import { LitElement, html, css } from "lit";

export class badmenStats extends LitElement {
  static get tag() {
    return "badmen-stats";
  }

  static get properties() {
    return {
      number: { type: String },
      label: { type: String },
      color: { type: String }
    };
  }

  constructor() {
    super();
    this.number = "0";
    this.label = "";
    this.color = "";
  }

  // ✅ Handles color attribute
  updated(changedProps) {
    if (changedProps.has("color") && this.color) {
      this.style.setProperty("--number-color", this.color);
    }
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: fit-content;
        max-width: 100%;
        padding: 16px;
        border-radius: var(--ddd-radius-sm);
        border: .1px solid white;
        box-sizing: border-box;
        text-align: center;
      }

    .number {
  font-family: var(--ddd-font-secondary);
  font-weight: var(--ddd-font-weight-black);
  font-size: clamp(36px, 18vw, 250px);
  letter-spacing: var(--ddd-spacing-3);
  color: var(--number-color); 
  margin-bottom: 8px;
  line-height: 1;
}

.label {
  color: var(--ddd-theme-default-shrineMaxLight); /* label stays default color */
  font-family: var(--ddd-font-secondary);
  font-weight: var(--ddd-font-weight-regular);
  font-size: clamp(16px, 4vw, 24px);
  line-height: 1.2;
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
