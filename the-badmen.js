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
import "./badmen-calendar.js";
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
      
      /*KEEPS NAV BAR STICKY*/
      badmen-navbar {
        position: sticky;
        top: 0;
        z-index: 1000; /* keeps it above ALL other content */
      }
      .join-overlay {
        position: absolute;
        top: 50%;
        left: 50%;  
        transform: translate(-50%, -50%);
        z-index: 10; /*this makes sure its above the image*/
      }
      .stats-row {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        width: 100%;
        padding: 20px 0;
      }
      .front-image {
        position: relative;
        display: flex; 
        height: 800px;
        width: 100%;
      }
      .badmen-image {
              width: 100%;
              opacity: 80%;
            }
      
      /*for the data cards scroll*/
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


      /*CSS FOR THE STAT BOXES:*/
      .stats-row {
  display: flex;
  flex-wrap: wrap;
  gap: 72px;              /* spacing between stat boxes */
  justify-content: center;
  align-items: flex-start;
  padding: 8px;
  padding-top: 72px;
  box-sizing: border-box;
}

/* Mobile stacking */
@media (max-width: 600px) {
  .stats-row {
    flex-direction: column;
    align-items: center;
  }

  .stats-row > badmen-stats {
    width: 100%;
    max-width: 360px;     /* keeps them from getting too wide */
  }
}

/* Desktop: hug content */
@media (min-width: 601px) {
  .stats-row > badmen-stats {
    width: fit-content;
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
      class=badmen-image 
      src="https://static.vecteezy.com/system/resources/thumbnails/065/837/310/small_2x/male-badminton-player-in-mid-air-split-shot-with-racket-and-shuttlecock-photo.jpeg"
 />
  <badmen-joinus class="join-overlay"></badmen-joinus>      
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
    </div>
         
    <div class="stats-row">
      <badmen-stats number="10" label="Championships" color=var(--ddd-theme-default-shrineMaxLight)></badmen-stats>
<badmen-stats number="450" label="Active Players" color="var(--ddd-theme-default-shrineMaxLight)"></badmen-stats>
<badmen-stats number="34" label="Coaches" color="var(--ddd-theme-default-shrineMaxLight)"></badmen-stats>

      </div>
      


      <h2>Signup Section</h2>
      <badmen-signup></badmen-signup>

      <h2>Layout</h2>
      <badmen-layout></badmen-layout>

      <h2>Team Name</h2>
      <badmen-teamname></badmen-teamname>

      <h2>Calendar</h2>
      <badmen-calendar></badmen-calendar>

      <h2>Signup</h2>
      <badmen-signup></badmen-signup>

      

    

       <h2>Info boxes</h2>
      <badmen-infoboxes></badmen-infoboxes>

       <h2>datecard</h2>
      <badmen-datecard></badmen-datecard>

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