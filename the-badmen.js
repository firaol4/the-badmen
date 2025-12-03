/**
 * Copyright 2025 zdg5063-glitch
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./badmen-navbar.js";
import "./badmen-layout.js";
import "./badmen-signup.js";
import "./badmen-teamname.js";
import "./badman-calender.js";
import "./badmen-joinus.js";
import "./badmen-infoboxes.js";
import "./badmen-datecard.js";
import "./badmen-stats.js";

/**
 * `the-badmen`
 * 
 * @demo index.html
 * @element the-badmen
 */
export class TheBadmen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "the-badmen";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/the-badmen.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }


  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
      }
/*FRONT IMAGE AND BUTTON*******************************************************/
        .overlay-content {
        position: absolute;
        top: 40%;           /* adjust up/down */
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;          /* space between team name + join button */
        z-index: 20;        /* above the image */
      }
      /*KEEPS NAV BAR STICKY*/
      badmen-navbar {
        position: sticky;
        top: 0;
        z-index: 1000; /* keeps it above ALL other content */
      }
        .front-image {
        position: relative;
        display: flex; 
        height: 800px;
        width: 100%;
      }
      .badmen-image {
              width: 100%;
              opacity: 60%;
            }
      /*for the date cards scroll*************************************************/
      .horizontal-scroll { 
        display: flex;
        gap: 16px;
        overflow-x: auto;
        white-space: nowrap;
        padding: 10px 0;
        scrollbar-width: none; /* Firefox */
      }
      .horizontal-scroll::-webkit-scrollbar {
        display: none; /* Chrome/Safari */
      }
/*CSS FOR THE STAT BOXES:****************************************************/
     
      .stats-banner {
  background-color: var(--ddd-theme-default-opportunityGreen);         
  display: flex;                  
  justify-content: center;        
  align-items: center;            
  width: 100%;
  box-sizing: border-box;
}
      



  .who-we-are-heading {
      font-family: var(--ddd-font-navigation);
      font-weight: var(--ddd-font-weight-black);
      font-size: clamp(24px, 6vw, 56px);
      letter-spacing: var(--ddd-spacing-1);
      color: var(--ddd-theme-default-coalyGray);
      padding-left: clamp(16px, 30vw, 24px);
      padding-top: 24px;      
}

  .who-we-are-body {
      font-family: var(--ddd-font-navigation);
      font-weight: 100;
      font-size: clamp(12px, 6vw, 24px);
      color: var(--ddd-theme-default-coalyGray);
      padding-left: 0px;
      padding-bottom: 16px;
      padding-right: clamp(16px, 30vw, 100px);
      padding-left: clamp(16px, 30vw, 24px);
      padding-bottom: 36px;
}

.about-section {
  background-color: var(--ddd-theme-default-keystoneYellow);
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  height: auto; /* adjust if needed */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0px; /* space between image and text */
  padding-right: clamp(8px, 4vw, 32px);
  padding-left: clamp(24px, 4vw, 32px);

}

.about-section img.logo {
  width: 400px; /* adjust size */
  height: 600px;
  flex-shrink: 0;
}

.left-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Responsive: stack on mobile */
@media (max-width: 768px) {
  .about-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: auto;
  }
  .about-section img.logo {
    margin-bottom: 16px;
  }
  .who-we-are-body {
    padding-right: clamp(4px, 1vw, 8px);
  }
}

.info-boxes {
  display: flex;                  /* inline-flex -> flex for better wrapping */
  flex-wrap: wrap;                /* allow boxes to wrap on small screens */
  justify-content: center;        /* center items horizontally */
  gap: 16px;
  padding: 1rem 1rem;             /* relative padding for responsiveness */
  box-sizing: border-box;
}

@media (max-width: 480px) {
  .info-boxes {
    padding: 1rem 0.5rem;
    gap: 12px;
  }
}
















    `];
  }

  // Lit render the HTML
render() {
  return html`
          <badmen-navbar></badmen-navbar>
    
    <div class="front-image">
      <img
        class="badmen-image"
        src="https://static.vecteezy.com/system/resources/thumbnails/065/837/310/small_2x/male-badminton-player-in-mid-air-split-shot-with-racket-and-shuttlecock-photo.jpeg"
      />

      <div class="overlay-content">
        <badmen-teamname></badmen-teamname>
        <badmen-joinus class="join-overlay"></badmen-joinus>
      </div>
    </div>

<div class="horizontal-scroll">
   <badmen-datecard 
      event="Spring Open House"
      date="Saturday May 9, 2026"
      time="1:30 p.m. - 4:00 p.m."
      location="101 Intramural Building Curtin Rd, State College PA"
      ageGroup="All ages are welcome!">
    </badmen-datecard>
    <badmen-datecard 
      event="Summer Skills Clinic"
      date="Tuesday June 16, 2026"
      time="4:00 p.m. - 6:00 p.m."
      location="South Gym, 125 Porter Rd, State College PA"
      ageGroup="Ages 12–17">
</badmen-datecard>

<badmen-datecard 
      event="Beginner Badminton Workshop"
      date="Saturday July 11, 2026"
      time="10:00 a.m. - 12:00 p.m."
      location="Central Recreation Center, 400 Park Ave, State College PA"
      ageGroup="Ages 8–14">
</badmen-datecard>

<badmen-datecard 
      event="Community Open Play Night"
      date="Friday August 7, 2026"
      time="6:30 p.m. - 9:00 p.m."
      location="Rec Hall Court 3, 15 North Atherton St, State College PA"
      ageGroup="All ages welcome">
</badmen-datecard>

<badmen-datecard 
      event="Fall Warm-Up Tournament"
      date="Sunday September 20, 2026"
      time="9:00 a.m. - 2:00 p.m."
      location="North Gym Complex, 216 Park Forest Ave, State College PA"
      ageGroup="Ages 13–18">
</badmen-datecard>

<badmen-datecard 
      event="Doubles Strategy Session"
      date="Wednesday October 14, 2026"
      time="5:00 p.m. - 7:00 p.m."
      location="IM Building Court 7, Curtin Rd, State College PA"
      ageGroup="Ages 15+">
</badmen-datecard>

<badmen-datecard 
      event="Holiday Break Badminton Bash"
      date="Monday December 28, 2026"
      time="2:00 p.m. - 5:00 p.m."
      location="South Annex Gym, 145 College Ave, State College PA"
      ageGroup="All ages welcome">
</badmen-datecard>

<badmen-datecard 
      event="Winter Training Session"
      date="Saturday January 10, 2027"
      time="11:00 a.m. - 1:30 p.m."
      location="Oakwood Athletic Center, 50 Oakwood Dr, State College PA"
      ageGroup="Ages 10–16">
</badmen-datecard>

<badmen-datecard 
      event="High School Prep Camp"
      date="Thursday March 5, 2027"
      time="4:30 p.m. - 7:00 p.m."
      location="Panorama Courts, 82 Valley Vista Dr, State College PA"
      ageGroup="Ages 14–18">
</badmen-datecard>

<badmen-datecard 
      event="Advanced Footwork Intensive"
      date="Sunday April 19, 2027"
      time="1:00 p.m. - 3:30 p.m."
      location="University Fitness Center, 200 Hastings Rd, State College PA"
      ageGroup="Experienced players (ages 13+)">
</badmen-datecard>

<badmen-datecard 
      event="Summer Kickoff Smash Night"
      date="Friday May 22, 2027"
      time="6:00 p.m. - 9:00 p.m."
      location="Westside Community Gym, 300 Blue Course Dr, State College PA"
      ageGroup="All ages welcome">
</badmen-datecard>
</div>

<div class="about-section">
<img class="logo" src="https://freesvg.org/img/logo_bad_lion_2.png" alt="Bad Lion Logo" />   <div class="left-section">
<div class ="who-we-are-heading">Who are the BADMEN?</div>
<div class ="who-we-are-body">The Badmen are a premier badminton organization based in State College, Pennsylvania, known for their competitive spirit and strong community presence. With eight championship titles, the team has built a reputation for excellence across local and regional leagues. The club boasts a thriving membership of over 125 active players, ranging from beginners to advanced competitors. Supported by 17 dedicated coaches, the Badmen focus on skill development, sportsmanship, and year-round training opportunities. Their program includes a robust U-18 youth division, where young athletes receive structured coaching and competitive play. In addition, the Badmen run a vibrant adult league, welcoming players of all ages looking to improve or compete. The organization regularly hosts tournaments, workshops, and community events to promote the sport. Together, the Badmen continue to grow badminton’s presence in State College while cultivating a strong and supportive athletic community.</div>
</div>
</div>
</div>
 
<div class="stats-banner">
<badmen-stats number="8" label="CHAMPIONSHIPS" color=var(--ddd-theme-default-shrineMaxLight)></badmen-stats>
<badmen-stats number="125+" label="ACTIVE PLAYERS" color="var(--ddd-theme-default-shrineMaxLight)"></badmen-stats>
<badmen-stats number="17" label="COACHES" color="var(--ddd-theme-default-shrineMaxLight)"></badmen-stats>
</div>

<div class="info-boxes">
      <badmen-infoboxes 
      message="SUPPORT THE BADMEN!"
      submessage="Donate Here">
    </badmen-infoboxes>
     <badmen-infoboxes 
      message="CONTACT THE BADMEN!"
      submessage="Here">
    </badmen-infoboxes>
     <badmen-infoboxes 
      message="JOIN THE BADMEN!"
      submessage="Join">
    </badmen-infoboxes>
</div>



















      
      <h2>Signup Section</h2>
      <badmen-signup></badmen-signup>

      <h2>Layout</h2>
      <badmen-layout></badmen-layout>

      <h2>Calender</h2>
      <badman-calender></badman-calender>

      <h2>Signup</h2>
      <badmen-signup></badmen-signup>

    

     

    </div>
  `;
}


  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(TheBadmen.tag, TheBadmen);