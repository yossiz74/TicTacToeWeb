console.log('Hello from ui.js!');

import { makeMove, checkWinner, checkDraw, getCell } from './game.js';
let currentPlayer, winner;

currentPlayer = "X";
winner = null;
export function handleCellClick(row, col) {
    console.log(`Clicked on cell ${row}, ${col} when current player is ${currentPlayer} and winner is ${winner}`);
    if (winner !== null) {
        console.log('Game is over, cannot make any more moves');
        return;
    }

    const cell = document.querySelector(`#cell-${row}-${col}`);

    const errorMessageElement = document.querySelector('#message');
    
    if (getCell(row,col) !== "") {
        // Cell is already occupied, display an error message
        errorMessageElement.textContent = 'Invalid move';
        return;
    }
    errorMessageElement.textContent = '';
    // Continue with handling the valid move
    cell.textContent = currentPlayer;
    makeMove(row, col, currentPlayer);
    if (checkWinner()) {
        winner = currentPlayer;
        // Display a message to let the players know who won
        errorMessageElement.textContent = `${winner} wins!`;
        return;
    }
    if (checkDraw()) {
        // Display a message to let the players know there was a draw
        errorMessageElement.textContent = 'Draw!';
        winner = 'draw';
        return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

