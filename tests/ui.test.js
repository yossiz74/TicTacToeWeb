import { launch } from 'puppeteer';

describe('Mouse events', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await launch();
    page = await browser.newPage();
    await page.goto('http://localhost:5000');
  });

  afterAll(() => {
    browser.close();
  });
  

  test('When a user clicks on an empty cell, an X is written in the game board', async () => {
    // Use Puppeteer's API to simulate a mouse click event
    await page.click('#cell-0-0');
    // Use Jest's expect function to assert that the expected behavior occurred
    expect(await page.$eval('#cell-0-0', el => el.textContent)).toBe('X');
  });
});
