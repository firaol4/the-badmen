import { html, fixture, expect } from '@open-wc/testing';
import "../the-badmen.js";

describe("TheBadmen test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <the-badmen
        title="title"
      ></the-badmen>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
