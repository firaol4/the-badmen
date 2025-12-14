import { LitElement, html, css } from "lit";

export class BadmenSponsors extends LitElement {
  static get tag() {
    return "badmen-sponsors";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100vw;
        margin-left: calc(50% - 50vw);
        background-color: var(--ddd-theme-default-keystoneYellow);
        padding: 4px;
        box-sizing: border-box;
      }

      .sponsor-row {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        flex-wrap: wrap;
        padding: 4px;
      }

      .sponsor-row img {
        width: clamp(400px, 18vw, 220px);
        height: 200px;
        object-fit: contain;
      }

      @media (max-width: 800px) {
        .sponsor-row {
          flex-direction: column;
          gap: 20px;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="sponsor-row">
        <img
          src="https://usabadminton.org/wp-content/uploads/2021/03/yonex-removebg-preview.png"
          alt="Yonex"
        />
      </div>
    `;
  }
}

customElements.define(BadmenSponsors.tag, BadmenSponsors);
