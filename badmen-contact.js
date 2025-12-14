import { LitElement, html, css } from "lit";

export class BadmenContact extends LitElement {
  static get tag() {
    return "badmen-contact";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100vw;
        margin-left: calc(50% - 50vw);
        background-color: var(--ddd-theme-default-coalyGray);
        color: var(--ddd-theme-default-roarLight);
        padding: 16px 20px;
        box-sizing: border-box;
        font-family: var(--ddd-font-navigation);
      }

      .contact-container {
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 24px;
      }

      .contact-item {
        flex: 1 1 16px; /* FIXED: allows even row layout and stacking */
        min-width: 100px;
      }

      .contact-item h2 {
        font-size: clamp(20px, 4vw, 28px);
        margin-bottom: 12px;
      }

      .contact-item p {
        font-size: clamp(14px, 2.5vw, 18px);
        margin: 6px 0;
        line-height: 1.4;
      }

      @media (max-width: 1000px) {
        .contact-container {
          flex-direction: column;
          gap: 16px;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="contact-container">
        <div class="contact-item">
          <h2>Address</h2>
          <p>123 Badminton Ave</p>
          <p>State College, PA 16801</p>
        </div>

        <div class="contact-item">
          <h2>Email</h2>
          <p>info@badmen.org</p>
        </div>

        <div class="contact-item">
          <h2>Phone</h2>
          <p>(123) 456-7890</p>
        </div>

        <div class="contact-item">
          <h2>Follow Us</h2>
          <p>Facebook / Twitter / Instagram</p>
        </div>
      </div>
    `;
  }
}

customElements.define(BadmenContact.tag, BadmenContact);
