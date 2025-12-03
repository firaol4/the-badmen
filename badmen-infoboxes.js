import { LitElement, html, css } from "lit";

export class badmenInfoboxes extends LitElement {
  static get tag() {
    return "badmen-infoboxes";
  }

  static get properties() {
    return {
      message: {type: String},
      submessage: {type: String}
    };
  }

  constructor() {
    super();
    this.message = "";
    this.submessage = "";
  }



static get styles() {
  return css`
    :host {
      display: flex;                 /* flex instead of inline-block */
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;                   /* fills parent container */
      max-width: 500px;              
      min-height: 200px;             /* flexible height */
      background: var(--ddd-theme-default-roarLight);
      border-radius: 12px;
      padding: 16px;
      box-sizing: border-box;
      margin: 0 auto;                /* center in container */
    }

    .message {
      font-size: clamp(48px, 8vw, 72px);
      font-weight: var(--ddd-font-weight-regular);
      color: var(--ddd-theme-default-opportunityGreen);
      font-family: var(--ddd-font-navigation);
      text-align: center;
      padding: 24px 0 36px 0;
      line-height: 1.2;
    }

    .submessage {
      font-size: clamp(24px, 4vw, 48px);
      font-weight: var(--ddd-font-weight-bold);
      color: var(--ddd-theme-default-coalyGray);
      margin: 0;
      font-family: var(--ddd-font-navigation);
      text-align: center;
      background-color: var(--ddd-theme-default-keystoneYellow);
      border-radius: 50px;
      padding: 8px 16px;
      word-break: break-word;
    }

    @media (max-width: 480px) {
      :host {
        padding: 12px;
      }

      .message {
        font-size: clamp(20px, 8vw, 48px);
        padding: 12px 0 32px 0;
      }

      .submessage {
        font-size: clamp(16px, 6vw, 36px);
        padding: 6px 12px;
      }
    }
  `;
}

  render() {
    return html`
      <div class="message">${this.message}</div>
      <div class="submessage">${this.submessage}</div>

    `;
  }
}

customElements.define(badmenInfoboxes.tag, badmenInfoboxes);