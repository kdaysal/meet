//Note - with end-to-end testing, the browser will render my components (so no need to import Enzyme or any other components here)

import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {

  let browser;
  let page;
  jest.setTimeout(60000);
  beforeAll(async () => {

    browser = await puppeteer.launch();

    //To turn headless mode off and visually see the testing suites in action (but much slower!), comment-out the 'browser' assignment line above and uncomment the one below
    /* ************************************ */
    // browser = await puppeteer.launch({
    //   headless: false,
    //   slowMo: 250, // slow down by 250ms
    //   ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
    // });
    /* ************************************ */

    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event'); //waitForSelector is an API method that will wait for the Event component to be loaded first
  });
  /* *********************************************************************** */

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

  //Scenario 3 - at this point in the test suite, the '.show-more-details' button will have been pressed once (i.e. more details are currently showing)
  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .more-details-button');
    const eventDetails = await page.$('.event .show-more-details');
    expect(eventDetails).toBeNull();
  });

  afterAll(() => {
    browser.close();
  });

});//end describe