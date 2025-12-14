import { LitElement, html, css } from "lit";

export class BadmenAboutus extends LitElement {
  static get tag() { return "badmen-aboutus"; }

  static get styles() {
    return css`
      :host { display: block; padding: 0; }

      .about-section {
        background-color: var(--ddd-theme-default-keystoneYellow);
        width: 100vw;
        margin-left: calc(50% - 50vw);
        padding: 40px clamp(16px, 6vw, 60px);
        box-sizing: border-box;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
      }

      .text-column {
        max-width: 100%;
      }

      .who-we-are-heading {
        font-family: var(--ddd-font-navigation);
        font-weight: var(--ddd-font-weight-black);
        font-size: clamp(24px, 6vw, 56px);
        letter-spacing: var(--ddd-spacing-1);
        color: var(--ddd-theme-default-coalyGray);
        margin: 0;
      }

      .who-we-are-body {
        font-family: var(--ddd-font-navigation);
        font-weight: 100;
        font-size: clamp(12px, 6vw, 24px);
        color: var(--ddd-theme-default-coalyGray);
        margin-top: 16px;
      }

      .stats-banner {
        background-color: var(--ddd-theme-default-opportunityGreen);         
        display: flex;                  
        justify-content: center;        
        align-items: center;            
        width: 100%;
        box-sizing: border-box;
        gap: 32px;
        padding: 16px 0;
      }

      /* NEW: image row below stats banner */
      .image-row {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
        padding: 24px clamp(16px, 6vw, 60px);
        background-color: var(--ddd-theme-default-coalyGray);
      }

      .image-row img {
        width: clamp(400px, 20vw, 150px);
        height: clamp(300px, 20vw, 100px);
        object-fit: cover;
      }

      @media (max-width: px) {
        .image-row {
          flex-direction: column;
          gap: 16px;
        }
      }
    `;
  }

  constructor() {
    super();
    this.images = [
      "https://recreation.uic.edu/wp-content/uploads/sites/377/2022/01/F2200046_REC_Badminton-9205-1-1090x727.jpg",
      "https://campusrec.fsu.edu/wp-content/uploads/2023/11/FIND-WHAT-M-VES-YOU.png",
      "https://snworksceo.imgix.net/tdg/4fb07850-d9b7-4754-bd72-fcd1869be9cc.sized-1000x1000.jpg?w=1000",
      "https://snworksceo.imgix.net/tdg/8425f0a7-4ee7-44ea-a918-ecd77515a29a.sized-1000x1000.jpg?w=1000&dpr=2"
    ];
  }

  render() {
    return html`
      <div class="about-section">
        <div class="text-column">
          <div class="who-we-are-heading">Who are the BADMEN?</div>

          <div class="who-we-are-body">
            The Badmen are a premier badminton organization based in State College,
            Pennsylvania, known for their competitive spirit and strong community presence.
            With eight championship titles, the team has built a reputation for excellence
            across local and regional leagues. The club boasts a thriving membership of over
            125 active players, ranging from beginners to advanced competitors. Supported by
            17 dedicated coaches, the Badmen focus on skill development, sportsmanship, and
            year-round training opportunities. Their program includes a robust U-18 youth
            division, where young athletes receive structured coaching and competitive play.
            In addition, the Badmen run a vibrant adult league, welcoming players of all ages
            looking to improve or compete. The organization regularly hosts tournaments,
            workshops, and community events to promote the sport. Together, the Badmen
            continue to grow badminton’s presence in State College while cultivating a strong
            and supportive athletic community.
          </div>
        </div>
      </div>

      <div class="stats-banner">
        <badmen-stats number="8" label="CHAMPIONSHIPS" color="var(--ddd-theme-default-shrineMaxLight)"></badmen-stats>
        <badmen-stats number="125+" label="ACTIVE PLAYERS" color="var(--ddd-theme-default-shrineMaxLight)"></badmen-stats>
        <badmen-stats number="17" label="COACHES" color="var(--ddd-theme-default-shrineMaxLight)"></badmen-stats>
      </div>

      <!-- IMAGE ROW BELOW STATS BANNER -->
      <div class="image-row">
        ${this.images.map(
          (img) => html`<img src="${img}" alt="Organization Image" />`
        )}
      </div>

      <badmen-contact></badmen-contact>
      <badmen-sponsors></badmen-sponsors>
      <badmen-footer></badmen-footer>
    `;
  }
}

customElements.define(BadmenAboutus.tag, BadmenAboutus);
