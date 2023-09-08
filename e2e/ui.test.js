import { launch } from 'puppeteer';

describe('Mouse events', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await launch({ headless: 'new' });
    page = await browser.newPage();
    page.on('console', msg => console.log(msg.text()));
    await page.goto('http://localhost:5000');
  });

  beforeEach(async () => {
    await page.reload();
  });
  

  afterAll(async () => {
    await browser.close();
  });

  test('When a user clicks on an empty cell, an X is written in the game board', async () => {
    // Use Puppeteer's API to simulate a mouse click event
    await page.click('#cell-0-0');
    // Use Jest's expect function to assert that the expected behavior occurred
    expect(await page.$eval('#cell-0-0', el => el.textContent)).toBe('X');
  });
  test('When a second user clicks on an empty cell, an O is written in the game board', async () => {
    // Use Puppeteer's API to simulate a mouse click event
    await page.click('#cell-1-1');
    await page.click('#cell-0-0');
    // Use Jest's expect function to assert that the expected behavior occurred
    expect(await page.$eval('#cell-1-1', el => el.textContent)).toBe('X');
    expect(await page.$eval('#cell-0-0', el => el.textContent)).toBe('O');
  });
});
