import { LitElement, html, css } from "lit";

export class BadmenCalender extends LitElement {
  static get tag() {
    return "badmen-calender";
  }

  static get properties() {
    return {
      monthsToShow: { type: Number },
    };
  }

  constructor() {
    super();
    this.monthsToShow = 12;

    // Sample events (design reference matches badmen-datecard)
    this.sampleEvents = [
      {
        event: "Open Play Night",
        time: "6:00 PM – 9:00 PM",
        location: "Rec Hall Court 3",
      },
      {
        event: "Youth Skills Clinic",
        time: "4:30 PM – 6:00 PM",
        location: "IM Building",
      },
      {
        event: "Doubles Strategy Session",
        time: "5:00 PM – 7:00 PM",
        location: "South Gym",
      },
      {
        event: "Weekend Tournament",
        time: "9:00 AM – 2:00 PM",
        location: "North Gym",
      },
    ];
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: var(--ddd-spacing-12);
        background-color: var(--ddd-theme-default-keystoneYellow);
        font-family: var(--ddd-font-navigation);
      }

      .multi-calendar {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: var(--ddd-spacing-18);
      }

      .calendar {
        background: var(--ddd-theme-default-roarLight);
        border-radius: var(--ddd-radius-xs);
        padding: var(--ddd-spacing-8);
        box-shadow: var(--ddd-boxShadow-xl);
      }

      .calendar h3 {
        text-align: center;
        margin-bottom: var(--ddd-spacing-1);
        font-size: 1.5rem;
        color: var(--ddd-theme-default-coalyGray);
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      th {
        padding: var(--ddd-spacing-2);
        font-size: 0.75rem;
        color: var(--ddd-theme-default-coalyGray);
        text-align: center;
      }

      td {
        position: relative;
        height: 40px;
        text-align: center;
        border-radius: var(--ddd-spacing-2);
        cursor: default;
        font-size: 1rem;
        color: var(--ddd-theme-default-coalyGray);
      }

      .event-day {
        background-color: var(--ddd-theme-default-opportunityGreen);
        color: var(--ddd-theme-default-shrineMaxLight);
        font-weight: bold;
        font-size: 24px;
        cursor: pointer;
      }

      .tooltip {
        display: none;
        position: absolute;
        bottom: 110%;
        left: 50%;
        transform: translateX(-50%);
        background: var(--ddd-theme-default-roarLight);
        color: var(--ddd-theme-default-coalyGray);
        padding: var(--ddd-spacing-2);
        width: 220px;
        border-radius: var(--ddd-radius-xs);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        z-index: 10;
        text-align: left;
      }

      .event-day:hover .tooltip {
        display: block;
      }

      .tooltip .event {
        font-weight: bold;
        margin-bottom: 4px;
      }

      .tooltip .date,
      .tooltip .time,
      .tooltip .location {
        font-size: 0.85rem;
        margin-bottom: var(--ddd-spacing-2);
      }

      @media (max-width: 600px) {
        .tooltip {
          width: 180px;
        }
      }
    `;
  }

  _renderMonth(year, month) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date(year, month, 1);
    const monthName = date.toLocaleString("default", { month: "long" });

    // Random event days
    const eventDays = new Map();
    for (let i = 0; i < 3; i++) {
      const day = Math.floor(Math.random() * 28) + 1;
      const event =
        this.sampleEvents[
          Math.floor(Math.random() * this.sampleEvents.length)
        ];
      eventDays.set(day, event);
    }

    const weeks = [];

    // START ROW (empty cells before first day)
    let row = Array.from({ length: date.getDay() }, () => html`<td></td>`);

    while (date.getMonth() === month) {
      const dayNum = date.getDate();
      const event = eventDays.get(dayNum);

      row.push(
        event
          ? html`
              <td class="event-day">
                ${dayNum}
                <div class="tooltip">
                  <div class="event">${event.event}</div>
                  <div class="date">${monthName} ${dayNum}, ${year}</div>
                  <div class="time">${event.time}</div>
                  <div class="location">${event.location}</div>
                </div>
              </td>
            `
          : html`<td>${dayNum}</td>`
      );

      if (date.getDay() === 6) {
        weeks.push(row);
        row = [];
      }

      date.setDate(dayNum + 1);
    }

    // END ROW padding
    if (row.length) {
      while (row.length < 7) {
        row.push(html`<td></td>`);
      }
      weeks.push(row);
    }

    return html`
      <div class="calendar">
        <h3>${monthName} ${year}</h3>
        <table>
          <tr>
            ${daysOfWeek.map((d) => html`<th>${d}</th>`)}
          </tr>
          ${weeks.map((week) => html`<tr>${week}</tr>`)}
        </table>
      </div>
    `;
  }

  render() {
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();

    const calendars = [];

    for (let i = 0; i < this.monthsToShow; i++) {
      calendars.push(this._renderMonth(year, month));
      month++;
      if (month > 11) {
        month = 0;
        year++;
      }
    }

    return html`<div class="multi-calendar">${calendars}</div>`;
  }
}

customElements.define(BadmenCalender.tag, BadmenCalender);
