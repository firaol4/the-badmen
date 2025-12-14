import { LitElement, html, css } from "lit";

export class badmenJoinuspage extends LitElement {
  static get tag() {
    return "badmen-joinuspage";
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: var(--ddd-theme-default-keystoneYellow);
        box-sizing: border-box;
      }

      .content {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .join-wrapper {
        max-width: 700px;
        background: var(--ddd-theme-default-roarLight);
        padding: var(--ddd-spacing-2) var(--ddd-spacing-16);
        font-family: var(--ddd-font-navigation);
      }

      h1 {
        font-size: clamp(36px, 5vw, 64px);
        font-weight: var(--ddd-font-weight-black);
        color: var(--ddd-theme-default-opportunityGreen);
        padding-bottom: 24px;
        text-align: center;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      label {
        font-size: clamp(18px, 5vw, 32px);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-coalyGray);
      }

      input,
      select {
        padding: var(--ddd-spacing-2);
        font-size: 16px;
        border-radius: var(--ddd-radius-xs);
        font-family: var(--ddd-font-primary);
        background-color: var(--ddd-theme-default-keystoneYellow);
        color: var(--ddd-theme-default-coalyGray);
      }

      input:focus,
      select:focus {
        outline: none;
        border-color: var(--ddd-theme-default-opportunityGreen);
      }

      .submit-button {
        width: 350px;
        margin-top: var(--ddd-spacing-8);
        margin-bottom: var(--ddd-spacing-8);
        background: var(--ddd-theme-default-opportunityGreen);
        color: var(--ddd-theme-default-roarLight);
        font-size: clamp(14px, 3vw, 20px);
        font-weight: var(--ddd-font-weight-bold);
        padding: var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-rounded);
        cursor: pointer;
        transition: all 0 ease-in-out;
        text-transform: uppercase;
      }

      .submit-button:hover {
        background: var(--ddd-theme-default-keystoneYellow);
        color: var(--ddd-theme-default-coalyGray);
        transform: translateY(-1px);
      }

      @media (max-width: 480px) {
        .join-wrapper {
          padding: 24px 16px;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="content">
        <div class="join-wrapper">
          <h1>Join the Badmen!</h1>

          <form>
            <label>
              Full Name:
              <input type="text" placeholder="Your name" required />
            </label>

            <label>
              Email Address:
              <input type="email" placeholder="you@example.com" required />
            </label>

            <label>
              Phone Number:
              <input type="tel" placeholder="(123) 456-7890" />
            </label>

            <label>
              Age Group:
              <select>
                <option value="">Select age group</option>
                <option>Under 12</option>
                <option>13–17</option>
                <option>18–29</option>
                <option>30–49</option>
                <option>50+</option>
              </select>
            </label>

            <label>
              Experience Level:
              <select>
                <option value="">Select level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </label>

            <button type="submit" class="submit-button">
              Become a Badman
            </button>
          </form>
        </div>
      </div>

      <badmen-footer></badmen-footer>
    `;
  }
}

customElements.define(badmenJoinuspage.tag, badmenJoinuspage);
