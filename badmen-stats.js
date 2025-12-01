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
        padding: 72px;
        padding-top: 32px;
        padding-bottom: 32px;
        box-sizing: border-box;
        text-align: center;
      }

    .number {
  font-family: var(--ddd-font-secondary);
  font-weight: var(--ddd-font-weight-black);
  font-size: clamp(36px, 18vw, 164px);
  letter-spacing: var(--ddd-spacing-3);
  color: var(--number-color); 
  margin-bottom: 8px;
  line-height: 1;
}

.label {
  color: var(--ddd-theme-default-shrineMaxLight); /* label stays default color */
  font-family: var(--ddd-font-weight-medium);
  font-weight: var(--ddd-font-weight-black);
  font-size: clamp(24px, 4vw, 36px);
  line-height: 2;
}
.banner {
  background: green;               /* or var(--your-theme-color) */
  height: 100%;                    /* stretch full height of host */
  width: 100%;                     /* fill container */
  padding: 72px;                   /* move padding FROM :host */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

    `;
  }

  render() {
  return html`
      <div class="number">${this.number}</div>
      <div class="label">${this.label}</div>
    </div>
  `;
}
}

customElements.define(badmenStats.tag, badmenStats);
