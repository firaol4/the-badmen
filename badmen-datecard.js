import { LitElement, html, css } from "lit";

export class badmenDatecard extends LitElement {
  static get tag() {
    return "badmen-datecard";
  }

//EVENT, DATE, LOCATION, TIME, AGE GROUP ON A CARD

  static get properties() {
    return {
      event: {type: String},
      date: { type: String },
      location: { type: String },
      time: { type: String },
      ageGroup: { type: String }
    };
  }

  constructor() {
    super();
    this.event = "";
    this.date = "";
    this.location = "";
    this.time = "";
    this.ageGroup = "";
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        max-width: 350px;
        background: var(--ddd-theme-default-roarLight);
        border-radius: 4px;
        padding: 8px;
      }

      .event {
        font-size: 24px;
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-coalyGray);
        margin-bottom: 8px;
        font-family: var(--ddd-font-navigation);
      }

      .date {
        font-size: 18px;
        font-weight: var(--ddd-font-weight-regular);
        color: var(--ddd-theme-default-coalyGray);
        margin-bottom: 8px;
        font-family: var(--ddd-font-navigation);

      }
       .location {
        font-size: 16px;
        font-weight: var(--ddd-font-weight-light);
        color: var(--ddd-theme-default-coalyGray);
        margin-bottom: 8px;
        font-family: var(--ddd-font-navigation);

      }
       .time {
        font-size: 16px;
        font-weight: var(--ddd-font-weight-light);
        color: var(--ddd-theme-default-coalyGray);
        margin-bottom: 8px;
        font-family: var(--ddd-font-navigation);

      }
       .ageGroup {
        font-size: 16px;
        font-weight: var(--ddd-font-weight-light);
        color: var(--ddd-theme-default-coalyGray);
        margin-bottom: 8px;
        font-family: var(--ddd-font-navigation);

      }
      .row {
        margin: 4px 0;
        font-size: 1.8rem;
        color: #444;
      }
    `;
  }

  render() {
    return html`
      <div class="event">${this.event}</div>
      <div class="date">${this.date}</div>
      <div class="time">${this.time}</div>
      <div class="location">${this.location}</div>
      <div class="ageGroup">${this.ageGroup}</div>
    `;
  }
}

customElements.define(badmenDatecard.tag, badmenDatecard);
