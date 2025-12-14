import { LitElement, html, css } from "lit";

export class badmenInfoboxes extends LitElement {
  static get tag() {
    return "badmen-infoboxes";
  }

  static get properties() {
    return {
      message: {type: String},
      submessage: {type: String},
      route: { type: String }
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
      display: flex;              
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;                
      max-width: 400px;              
      min-height: 200px;            
      background: var(--ddd-theme-default-roarLight);
      border-radius: 12px;
      padding: 16px;
      box-sizing: border-box;
      margin: 0 auto;              
    }

    .message {
      font-size: clamp(32px, 8vw, 64px);
      font-weight: var(--ddd-font-weight-regular);
      color: var(--ddd-theme-default-opportunityGreen);
      font-family: var(--ddd-font-navigation);
      text-align: center;
      padding: 2px 0 3px 0;
      line-height: 1.2;
    }

    .submessage {
      font-size: clamp(18px, 4vw, 36px);
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
  _handleClick() {
    if (this.route) {
      window.BadmenRouter.go(this.route);
    }
  }

  render() {
    return html`
      <div class="message">${this.message}</div>
      
      <button
        class="submessage"
        @click="${this._handleClick}"
      >
        ${this.submessage}
      </button>

    `;
  }
}

customElements.define(badmenInfoboxes.tag, badmenInfoboxes);