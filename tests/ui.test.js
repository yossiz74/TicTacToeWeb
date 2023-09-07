import { readFileSync } from 'fs';
import { resolve } from 'path';
import jsdom from 'jsdom';
import { handleCellClick } from '../public/game.js';
const { JSDOM } = jsdom;

describe('Game ui', () => {
  let dom;
  let document;
  let window;

  beforeEach(() => {
    // Load your HTML file
    const html = readFileSync(resolve(__dirname, '../public/index.html'), 'utf-8');

    // Create a new JSDOM instance
    dom = new JSDOM(html);
    document = dom.window.document;
    window = dom.window;
  });

  test('When a user clicks on an empty cell, an X is written in the game board', () => {
    // Call the handleCellClick function directly
    handleCellClick(0, 0, document);

    // Get the first cell in the table
    const firstCell = document.querySelector('#cell-0-0');
    // Simulate a click event on the first cell
    //firstCell.dispatchEvent(new window.MouseEvent('click'));
    // Check that the first cell now contains an 'X'
    expect(firstCell.textContent).toBe('X');
  });
});
