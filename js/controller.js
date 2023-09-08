console.log('Hello from controller.js!');

import { initializeGame } from './game.js';
import { handleCellClick } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded!');
    // Initialize the game when the DOM is ready
    initializeGame();

    // Assign UI event handlers
    window.handleCellClick = handleCellClick;
});
