import { launch } from 'puppeteer';

describe('Mouse events', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await launch({ headless: 'new' });
    page = await browser.newPage();
    await page.goto('http://localhost:5000');
  });

  beforeEach(async () => {
    await page.reload();
  });

  afterAll(async () => {
    await browser.close();
  });

  const winTheGame = async () => {
    await page.click('#cell-0-0');
    await page.click('#cell-1-0');
    await page.click('#cell-0-1');
    await page.click('#cell-1-1');
    await page.click('#cell-0-2');
  };
  
  const drawTheGame = async () => {
    await page.click('#cell-0-0');
    await page.click('#cell-0-1');
    await page.click('#cell-0-2');
    await page.click('#cell-1-0');
    await page.click('#cell-1-2');
    await page.click('#cell-1-1');
    await page.click('#cell-2-0');
    await page.click('#cell-2-2');
    await page.click('#cell-2-1');
  };
  

  test('When a user clicks on an empty cell, an X is written in the game board', async () => {
    await page.click('#cell-0-0');
    expect(await page.$eval('#cell-0-0', el => el.textContent)).toBe('X');
  });
  test('When a second user clicks on an empty cell, an O is written in the game board', async () => {
    await page.click('#cell-1-1');
    await page.click('#cell-0-0');
    expect(await page.$eval('#cell-0-0', el => el.textContent)).toBe('O');
  });
  test('When a user clicks on a cell that is already occupied, an error message is displayed', async () => {
    await page.click('#cell-0-0');
    await page.click('#cell-0-0');
    const errorMessage = await page.$eval('#message', el => el.textContent);
    expect(errorMessage).toBe('Invalid move');
  });
  test('When a user clicks on a cell that is already occupied, the error message is removed when the user clicks on an empty cell', async () => {
    await page.click('#cell-0-0');
    await page.click('#cell-0-0');
    await page.click('#cell-0-1');
    const errorMessage = await page.$eval('#message', el => el.textContent);
    expect(errorMessage).toBe('');
  });
  test('When a user wins the game, a message is displayed', async () => {
    await winTheGame();
    const message = await page.$eval('#message', el => el.textContent);
    expect(message).toBe('X wins!');
  });
  test('When a user wins the game, nothing happens when the user clicks on an empty cell', async () => {
    await winTheGame();
    await page.click('#cell-1-2');
    expect(await page.$eval('#cell-1-2', el => el.textContent)).toBe('');
  });
  test('When a user wins the game, nothing happens when the user clicks on an occupied cell', async () => {
    await winTheGame();
    await page.click('#cell-0-0');
    const message = await page.$eval('#message', el => el.textContent);
    expect(message).toBe('X wins!');
  });
  test('when there is a draw, a message is displayed', async () => {
    await drawTheGame();
    const message = await page.$eval('#message', el => el.textContent);
    expect(message).toBe('Draw!');
  });
  test('when there is a draw, nothing happens when the user clicks on a cell', async () => {
    await drawTheGame();
    await page.click('#cell-1-1');
    const message = await page.$eval('#message', el => el.textContent);
    expect(message).toBe('Draw!');
  });
  test('when restart button is clicked, the game is reset', async () => {
    await winTheGame();
    await page.click('#restart-button');
    expect(await page.$eval('#cell-0-0', el => el.textContent)).toBe('');
    expect(await page.$eval('#cell-0-1', el => el.textContent)).toBe('');
    expect(await page.$eval('#cell-0-2', el => el.textContent)).toBe('');
    expect(await page.$eval('#cell-1-0', el => el.textContent)).toBe('');
    expect(await page.$eval('#cell-1-1', el => el.textContent)).toBe('');
    expect(await page.$eval('#cell-1-2', el => el.textContent)).toBe('');
    expect(await page.$eval('#cell-2-0', el => el.textContent)).toBe('');
    expect(await page.$eval('#cell-2-1', el => el.textContent)).toBe('');
    expect(await page.$eval('#cell-2-2', el => el.textContent)).toBe('');
    expect(await page.$eval('#message', el => el.textContent)).toBe('');
  });
});
