import { LitElement, html, css } from "lit";

export class badmenStats extends LitElement {
  static get tag() {
    return "badmen-stats";
  }

  static get properties() {
    return {
      number: { type: String },
      label: { type: String },
      color: { type: String }
    };
  }

  constructor() {
    super();
    this.number = "0";
    this.label = "";
    this.color = "";
  }

  updated(changedProps) {
    if (changedProps.has("color") && this.color) {
      this.style.setProperty("--number-color", this.color);
    }
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        flex-direction: column;
        width: auto;
        max-width: 100%;
        box-sizing: border-box;
        text-align: center;
      }

      .banner {
        width: auto;
        background-color: var(--ddd-theme-default-opportunityGreen);
        padding: 4px 72px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: var(--ddd-radius-xl);
      }

      .number {
        font-family: var(--ddd-font-secondary);
        font-weight: var(--ddd-font-weight-black);
        font-size: clamp(18px, 18vw, 172px);
        letter-spacing: var(--ddd-spacing-2);
        color: var(--number-color);
        margin-bottom: 4px;
        padding: 0px 0;
        line-height: 1;
      }

      .label {
        color: var(--ddd-theme-default-roarLight);
        font-family: var(--ddd-font-weight-medium);
        font-weight: var(--ddd-font-weight-black);
        font-size: clamp(12px, 4vw, 24px);
        line-height: 1;
        padding-bottom: 16px;
      }

      @media (max-width: 600px) {
        .banner {
          padding: 16px;
        }
      }
    `;
  }

  firstUpdated() {
    const numberEl = this.shadowRoot.querySelector(".number");
    const finalValue = parseInt(this.number, 10);

    const animateNumber = () => {
      const duration = 2300; 
      const startTime = performance.now();

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        numberEl.textContent = Math.floor(progress * finalValue);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumber();
          } else {
            numberEl.textContent = "0"; // reset when leaving screen
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(this);
  }

  render() {
    return html`
      <div class="banner">
        <div class="number">${this.number}</div>
        <div class="label">${this.label}</div>
      </div>
    `;
  }
}

customElements.define(badmenStats.tag, badmenStats);