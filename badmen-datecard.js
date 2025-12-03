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
      time: { type: String }
    };
  }

  constructor() {
    super();
    this.event = "";
    this.date = "";
    this.location = "";
    this.time = "";
  }

static get styles() {
  return css`
    :host {
      display: block;             
      width: 100%;                  
      max-width: 400px;            
      background: var(--ddd-theme-default-roarLight);
      border-radius: 8px;
      padding: 12px 16px;
      box-sizing: border-box;
      margin: 0 auto;             
    }

    .event {
      font-size: clamp(18px, 3vw, 24px);
      font-weight: var(--ddd-font-weight-bold);
      color: var(--ddd-theme-default-coalyGray);
      margin-bottom: 8px;
      font-family: var(--ddd-font-navigation);
    }

    .date {
      font-size: clamp(14px, 1vw, 18px);
      font-weight: var(--ddd-font-weight-regular);
      color: var(--ddd-theme-default-coalyGray);
      margin-bottom: 8px;
      font-family: var(--ddd-font-navigation);
    }

    .location,
    .time,
    .ageGroup {
      font-size: clamp(12px, 3vw, 16px);
      font-weight: var(--ddd-font-weight-light);
      color: var(--ddd-theme-default-coalyGray);
      margin-bottom: 8px;
      font-family: var(--ddd-font-navigation);
    }

    .row {
      margin: 4px 0;
      font-size: clamp(14px, 3vw, 1.8rem);
      color: #444;
    }

    @media (max-width: 480px) {
      :host {
        padding: 8px 12px;
      }

      .event {
        font-size: clamp(16px, 5vw, 22px);
      }

      .date {
        font-size: clamp(13px, 4vw, 16px);
      }

      .location,
      .time,
      .ageGroup {
        font-size: clamp(12px, 4vw, 14px);
      }

      .row {
        font-size: clamp(12px, 4vw, 16px);
      }
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
