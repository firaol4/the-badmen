import { LitElement, html, css } from "lit";

export class badmenNavbar extends LitElement {
  static get tag() {
    return "badmen-navbar";
  }

  static get properties() {
    return {
      
      
    };
    return {};
  }

  

  constructor() {
    super();
   
    
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
  /* remove max-height and overflow to prevent cutting content */
  margin: 0 auto;
  padding: 0 16px; /* horizontal padding */
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(8px, 2vw, 20px);
  flex-wrap: wrap; /* allows menu to wrap on very small screens */
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;          /* tight space between logo and text */
  flex-shrink: 0;    /* prevents shrinking */
}

.logo {
  max-height: 100px;  /* adjust as needed */
  height: auto;
  width: auto;
  display: block;
}

.logo-text {
  font-family: var(--ddd-font-navigation);
  font-size: clamp(16px, 3vw, 42px); /* scales but stays on one line */
  font-weight: var(--ddd-font-weight-black);
  white-space: nowrap;
  color: var(--ddd-theme-default-coalyGray);

}

ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: clamp(16px, 4vw, 72px);
  margin: 0;
  padding: 0;
  flex-wrap: wrap;  /* allows wrapping instead of pushing off screen */
}

li:hover {
  transform: scale(1.2);
  color: var(--ddd-theme-default-opportunityGreen);
  cursor: pointer;
}

li {
  font-size: clamp(16px, 2vw, 24px);
  display: flex;
  align-items: center;
}
`;
  }

 
render() {
  return html`
    <nav>
      <div class="logo-wrapper">
        <img class="logo" src="https://freesvg.org/img/logo_bad_lion_2.png" alt="Bad Lion Logo">
        <span class="logo-text">THE BADMEN</span>
      </div>
      <ul>
        <li>About Us</li>
        <li>Schedule</li>
        <li>Join Us</li>
      </ul>
    </nav>
  `;
}
}

customElements.define(badmenNavbar.tag, badmenNavbar);
