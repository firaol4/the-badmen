import { LitElement, html, css } from "lit";

export class badmenTeamname extends LitElement {
  static get tag() {
    return "badmen-teamname";
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
       .team-name {
      display: flex;
      justify-content: center;
      font-family: var(--ddd-font-navigation);
      font-weight: var(--ddd-font-weight-black);
      letter-spacing: var(--ddd-spacing-3);
      font-size: clamp(32px, 4vw, 64px); /* scales between 14px and 24px */
      color: var(--ddd-theme-default-roarMaxlight);
      text-shadow: 0 3px 6px rgba(0,0,0,0.6);
      margin-bottom: -24px;
      width: 1000px;
    }

      .team-name-subheading {
      display: flex;
      justify-content: center;
      font-family: var(--ddd-font-navigation);
      font-weight: var(--ddd-font-weight-regular);
      letter-spacing: var(--ddd-spacing-1);
      font-size: clamp(14px, 2vw, 24px); /* scales between 14px and 24px */
      color: var(--ddd-theme-default-roarMaxlight);
      margin-top: 24px;    
      margin-bottom: 4px;
      text-shadow: 0 2px 4px rgba(0,0,0,0.4);
    }
    `;
  }

  render() {
    return html`
        <div class="team-name">BADMEN BADMINTON</div>
        <div class="team-name-subheading">STATE COLLEGE BADMINTON ASSOCIATION</div>    
       
       `;
       }
}

customElements.define(badmenTeamname.tag, badmenTeamname);