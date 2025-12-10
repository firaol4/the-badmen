import { LitElement, html, css } from "lit";

export class BadmenNavbar extends LitElement {
  static get tag() {
    return "badmen-navbar";
  }

  static get properties() {
    return {
      menu: { type: Array },
      activePage: { type: String },
      openItems: { type: Object },
    };
  }

  constructor() {
    super();

    this.menu = [];
    this.activePage = this.getActivePageFromURL();
    this.openItems = {};

    this.loadMenu();

    // Listen for back/forward browser changes
    window.addEventListener("popstate", () => {
      this.activePage = this.getActivePageFromURL();
      this.notifyRouteChange(this.activePage);
    });
  }

  async loadMenu() {
    try {
      const response = await fetch("/menu.json");
      if (!response.ok) throw new Error("Menu endpoint missing");
  
      this.menu = await response.json();
    } catch (e) {
      console.warn("Using fallback menu:", e);
  
      // FALLBACK MENU
      this.menu = [
        { label: "Home", page: "home" },
        { label: "About Us", page: "about-us" },
        { label: "Schedule", page: "schedule" },
        { label: "Join Us", page: "join-us" }
      ];
    }
  }
  

  getActivePageFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("page") || "home"; // default is home
  }

  navigate(page) {
    const newURL = `?page=${page}`;
    window.history.pushState({}, "", newURL);

    this.activePage = page;
    this.notifyRouteChange(page);
  }

  notifyRouteChange(page) {
    this.dispatchEvent(
      new CustomEvent("route-changed", {
        detail: { page },
        bubbles: true,
        composed: true,
      })
    );
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        background: var(--ddd-theme-default-roarLight);
        color: var(--ddd-theme-default-coalyGray);
        font-family: var(--ddd-font-navigation);
        font-weight: var(--ddd-font-weight-regular);
        letter-spacing: var(--ddd-spacing-1);
        margin: 0 auto;
        padding: 0 16px;
      }

      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: clamp(8px, 2vw, 20px);
        flex-wrap: wrap;
      }

      .logo-wrapper {
        display: flex;
        align-items: center;
        gap: 4px;
        flex-shrink: 0;
      }

      .logo {
        max-height: 100px;
        width: auto;
      }

      .logo-text {
        font-family: var(--ddd-font-navigation);
        font-size: clamp(16px, 3vw, 42px);
        font-weight: var(--ddd-font-weight-black);
        white-space: nowrap;
      }

      ul {
        list-style: none;
        display: flex;
        align-items: center;
        gap: clamp(16px, 4vw, 72px);
        margin: 0;
        padding: 0;
        flex-wrap: wrap;
      }

      li {
        font-size: clamp(16px, 2vw, 24px);
        cursor: pointer;
        transition: transform 0.2s ease;
      }

      li:hover {
        transform: scale(1.2);
        color: var(--ddd-theme-default-opportunityGreen);
      }

      /* ACTIVE PAGE BOLD + HIGHLIGHT */
      .active {
        font-weight: bold;
        border-bottom: 3px solid var(--ddd-theme-default-opportunityGreen);
      }
    `;
  }

  render() {
    return html`
      <nav>
      <div class="logo-wrapper" @click="${() => this.navigate('home')}" style="cursor:pointer;">
      <img
        class="logo"
        src="https://freesvg.org/img/logo_bad_lion_2.png"
        alt="Bad Lion Logo"
      />
      <span class="logo-text">THE BADMEN</span>
    </div>


        <ul>
          ${this.menu.map(
            (item) => html`
              <li
                class="${this.activePage === item.page ? "active" : ""}"
                @click="${() => this.navigate(item.page)}"
              >
                ${item.label}
              </li>
            `
          )}
        </ul>
      </nav>
    `;
  }
}

customElements.define(BadmenNavbar.tag, BadmenNavbar);
