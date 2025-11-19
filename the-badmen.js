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
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--the-badmen-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
render() {
  return html`
    <div class="wrapper">

      <h2>Navigation Bar</h2>
      <badmen-navbar></badmen-navbar>

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

      <h2>Stats</h2>
      <badmen-stats></badmen-stats>

       <h2>Join Us</h2>
      <badmen-joinus></badmen-joinus>

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