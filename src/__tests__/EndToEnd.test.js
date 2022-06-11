//Note - with end-to-end testing, the browser will render my components (so no need to import Enzyme or any other components here)

import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {

  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event'); //waitForSelector is an API method that will wait for the Event component to be loaded first
  });

  //Scenario 1
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .show-more-details');// note - 'page.$(selector)' will return the first CSS selector found with the given name
    expect(eventDetails).toBeNull();
  });

  //Scenario 2
  test('User can expand an event to see its details', async () => {
    await page.click('.event .more-details-button');
    const eventDetails = await page.$('.event .show-more-details');
    expect(eventDetails).toBeDefined();// check if the .show-more-details className exists (i.e. that more details are indeed showing)
  });

  afterAll(() => {
    browser.close();
  });

});//end describe