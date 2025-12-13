import { LitElement, html, css } from "lit";

export class BadmenSchedule extends LitElement {
  static get tag() { return "badmen-schedule"; }

  static get styles() {
    return css`
      :host { display: block; padding: 20px; }
      h1 { font-size: 48px; }
    `;
  }

  render() {
    return html`

    <badmen-calender></badmen-calender>
    <badmen-footer></badmen-footer>
    `;
  }
}

customElements.define(BadmenSchedule.tag, BadmenSchedule);
