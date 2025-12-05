import { LitElement, html, css } from "lit";

export class BadmenAbout extends LitElement {
  static get tag() { return "badmen-about"; }

  static get styles() {
    return css`
      :host { display: block; padding: 20px; }
      h1 { font-size: 48px; }
    `;
  }

  render() {
    return html`
      <h1>About the Badmen</h1>
      <p>
        We are a premier badminton community focused on developing players
        of all ages through competition, coaching, and community.
      </p>
      <badmen-about></badmen-about>
    `;
  }
}

customElements.define(BadmenAbout.tag, BadmenAbout);
