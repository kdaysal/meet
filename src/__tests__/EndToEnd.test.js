//Note - with end-to-end testing, the browser will render my components (so no need to import Enzyme or any other components here)

import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {

  beforeAll(async () => {
    jest.setTimeout(30000);
  });

  test('An event element is collapsed by default', async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.event');//waitForSelector is an API method that will wait for the Event component to be loaded first

    const eventDetails = await page.$('.event .event__Details');// note - 'page.$(selector)' will return the first CSS selector found with the given name
    expect(eventDetails).toBeNull();
    browser.close();
  });


});//end describe