import { LitElement, html, css } from "lit";

export class BadmenFooter extends LitElement {
  static get tag() {
    return "badmen-footer";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        background: var(--ddd-theme-default-opportunityGreen);
        color: var(--ddd-theme-default-roarLight);
        font-family: var(--ddd-font-navigation);
        font-weight: var(--ddd-font-weight-regular);
        letter-spacing: var(--ddd-spacing-1);
        padding: 20px 16px;
        box-sizing: border-box;
      }

      .banner {
        position: relative;
        width: 100%;
        height: 200px;
        overflow: hidden;
        margin-bottom: 20px;
      }

      .logo {
        width: 200px;
        height: 200px;
        object-fit: cover;
      }

      .overlay {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      .contact-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
      }

      .contact-item {
        flex: 1 1 16px;
        min-width: 180px;
      }

      .contact-item h3 {
        margin: 0 0 8px 0;
        font-size: clamp(16px, 3vw, 20px);
      }

      .contact-item p {
        margin: 4px 0;
        font-size: clamp(14px, 2.5vw, 16px);
      }

      @media (max-width: 720px) {
        .contact-container {
          flex-direction: column;
          gap: 10px;
        }
      }
    `;
  }

  render() {
    return html`
      <!-- Existing logo/banner -->
      <div class="banner">
        <img
          class="logo"
          src="https://freesvg.org/img/logo_bad_lion_2.png"
          alt="Bad Lion Logo"
        />

        <div class="overlay">
          <h1>THE BADMEN</h1>
          <p>Building community through badminton</p>
        </div>
      </div>

      <!-- Contact info added -->
      <div class="contact-container">
        <div class="contact-item">
          <h3>Address</h3>
          <p>123 Badminton Ave</p>
          <p>State College, PA 16801</p>
        </div>

        <div class="contact-item">
          <h3>Email</h3>
          <p>info@badmen.org</p>
        </div>

        <div class="contact-item">
          <h3>Phone</h3>
          <p>(123) 456-7890</p>
        </div>

        <div class="contact-item">
          <h3>Follow Us</h3>
          <p>Facebook / Twitter / Instagram</p>
        </div>
      </div>
    `;
  }
}

customElements.define(BadmenFooter.tag, BadmenFooter);
