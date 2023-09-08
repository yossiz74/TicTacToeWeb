let board = [["", "", ""], ["", "", ""], ["", "", ""]];
let currentPlayer = "X";
let winner = null;
export { board, currentPlayer };

export function emptyBoard() {
    board = [["", "", ""], ["", "", ""], ["", "", ""]];
    currentPlayer = "X";
    //console.log("Board has been emptied, current player is ${currentPlayer}");
}

export function makeMove(row, col, symbol) {
    if (board[row][col] !== "") {
        throw new Error("Invalid move");
    }
    board[row][col] = symbol;
}

// ... (rest of your functions)
export function checkWinner() {
    // Check rows
    for (let row = 0; row < 3; row++) {
        if (board[row][0] !== "" &&
            board[row][0] === board[row][1] &&
            board[row][0] === board[row][2]) {
            return board[row][0];
        }
    }
    // Check columns
    for (let col = 0; col < 3; col++) {
        if (board[0][col] !== "" &&
            board[0][col] === board[1][col] &&
            board[0][col] === board[2][col]) {
            return board[0][col];
        }
    }
    // Check diagonals
    if (board[0][0] !== "" &&
        board[0][0] === board[1][1] &&
        board[0][0] === board[2][2]) {
        return board[0][0];
    }
    if (board[2][0] !== "" &&
        board[2][0] === board[1][1] &&
        board[2][0] === board[0][2]) {
        return board[2][0];
    }
}

export function handleCellClick(row, col, document = window.document) {
    //console.log(`Clicked on cell ${row}, ${col} when current player is ${currentPlayer}`);
    if (winner !== null) {
        return;
    }

    const cell = document.querySelector(`#cell-${row}-${col}`);

    const errorMessageElement = document.querySelector('#message');
    if (board[row][col] !== "") {
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
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Attach handleCellClick to the window object
if (typeof window !== 'undefined') {
    window.handleCellClick = handleCellClick;
}
