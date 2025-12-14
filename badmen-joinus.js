import { LitElement, html, css } from "lit";

export class badmenJoinus extends LitElement {
  static get tag() {
    return "badmen-joinus";
  }

  static get properties() {
    return {
      
    };
  }

  constructor() {
    super();
    
  }



  static get styles() {
    return css`
.join-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px; /* ensures some spacing on mobile */
}

.join-button {
  white-space: nowrap;
  background: var(--ddd-theme-default-roarLight);
  color: var(--ddd-theme-default-coalyGray);
  font-family: var(--ddd-font-navigation);
  font-weight: var(--ddd-font-weight-regular);
  letter-spacing: var(--ddd-spacing-1);
  font-size: clamp(14px, 3vw, 24px); /* scales between 14px and 24px */
  padding: clamp(8px, 2vw, 16px);   /* scales padding on small screens */
  border-radius: var(--ddd-radius-rounded);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  width: 100%;
  max-width: 700px; /* keeps it reasonable on large screens */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.9);
}

.join-button:hover {
  transform: scale(1.01);
  background: var(--ddd-theme-default-keystoneYellow);
}    
    `;
  }

  render() {
    return html`
     <div class="join-wrapper">
        <button class="join-button" @click="${() => window.BadmenRouter.go('join-us')}">
          Become a Badman Today!
        </button>
       
      </div> 
    `;
  }
}

customElements.define(badmenJoinus.tag, badmenJoinus);