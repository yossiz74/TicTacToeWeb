console.log('Hello from controller.js');

import { initializeGame } from './game.js';
import { handleCellClick } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded!');

  // Initialize the game when the DOM is ready
  initializeGame();

  // Assign UI event handlers
  window.handleCellClick = handleCellClick;

  // Get a reference to the restart button
  const restartButton = document.getElementById('restart-button');

  // Add a click event listener to the restart button
  restartButton.addEventListener('click', () => {
    // Reload the page to reset the game
    location.reload();
  });
});
