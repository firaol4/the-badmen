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
      <h1>Schedule</h1>
      <p>Here is our practice, tournament, and event schedule.</p>

      <badman-calender></badman-calender>
    `;
  }
}

customElements.define(BadmenSchedule.tag, BadmenSchedule);
