import { LitElement, html, css } from "lit";

export class BadmanCalender extends LitElement {
  static get tag() {
    return "badman-calender";
  }

  static get properties() {
    return {
      monthsToShow: { type: Number }, // Number of months to display
    };
  }

  constructor() {
    super();
    this.monthsToShow = 6; // Default number of months
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 20px;
      }

      .multi-calendar {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
      }

      .calendar {
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 10px;
        font-family: Arial, sans-serif;
      }

      .calendar h3 {
        text-align: center;
        margin-bottom: 10px;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      th,
      td {
        border: 1px solid #ddd;
        text-align: center;
        padding: 5px;
      }
    `;
  }

  // Create one month's HTML
  _renderMonth(year, month) {
    const weeks = [];
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date(year, month, 1);
    const monthName = date.toLocaleString("default", { month: "long" });

    // Start building rows
    let row = new Array(date.getDay()).fill("");

    while (date.getMonth() === month) {
      row.push(date.getDate());
      if (date.getDay() === 6) {
        weeks.push(row);
        row = [];
      }
      date.setDate(date.getDate() + 1);
    }

    if (row.length > 0) weeks.push(row);

    return html`
      <div class="calendar">
        <h3>${monthName} ${year}</h3>
        <table>
          <tr>
            ${daysOfWeek.map((day) => html`<th>${day}</th>`)}
          </tr>

          ${weeks.map(
            (week) => html`
              <tr>
                ${week.map(
                  (day) =>
                    html`<td>${day !== "" ? day : html`&nbsp;`}</td>`
                )}
              </tr>
            `
          )}
        </table>
      </div>
    `;
  }

  // Render multiple months
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

    return html`
      <div class="multi-calender">
        ${calendars}
      </div>
    `;
  }
}

customElements.define(BadmanCalender.tag, BadmanCalender);
