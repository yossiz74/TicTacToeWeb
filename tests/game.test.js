import { board, emptyBoard, makeMove, checkWinner, checkDraw } from "../public/game.js";

describe("Game logic", () => {
  beforeEach(() => {
    emptyBoard()
  });
  test("The board should be empty at the start", () => {
    expect(board).toEqual([["", "", ""], ["", "", ""], ["", "", ""]]);
  });
  test("A player can make a valid move by placing their symbol on an empty cell on the board", () => {
    makeMove(0, 0, "X");
    expect(board).toEqual([["X", "", ""], ["", "", ""], ["", "", ""]]);
  });
  test("A player cannot make an invalid move by placing their symbol on a cell that is already occupied", () => {
    makeMove(0, 0, "X");
    expect(() => makeMove(0, 0, "O")).toThrow();
  });
  test("The game correctly identifies a win condition when player has three of their symbols in a row", () => {
    makeMove(0, 0, "X");
    makeMove(0, 1, "X");
    makeMove(0, 2, "X");
    expect(checkWinner()).toBe("X");
    emptyBoard();
    makeMove(1, 0, "K");
    makeMove(1, 1, "K");
    makeMove(1, 2, "K");
    expect(checkWinner()).toBe("K");
    emptyBoard();
    makeMove(2, 0, "Z");
    makeMove(2, 1, "Z");
    makeMove(2, 2, "Z");
    expect(checkWinner()).toBe("Z");
  });  
  test("The game correctly identifies a win condition when player has three of their symbols in a column", () => {
    makeMove(0, 0, "O");
    makeMove(1, 0, "O");
    makeMove(2, 0, "O");
    expect(checkWinner()).toBe("O");
    emptyBoard();
    makeMove(0, 1, "R");
    makeMove(1, 1, "R");
    makeMove(2, 1, "R");
    expect(checkWinner()).toBe("R");
    emptyBoard();
    makeMove(0, 2, "H");
    makeMove(1, 2, "H");
    makeMove(2, 2, "H");
    expect(checkWinner()).toBe("H");
  });  
  test("The game correctly identifies a win condition when player has three of their symbols in a diagonal", () => {
    makeMove(0, 0, "G");
    makeMove(1, 1, "G");
    makeMove(2, 2, "G");
    expect(checkWinner()).toBe("G");
    emptyBoard();
    makeMove(0, 2, "Q");
    makeMove(1, 1, "Q");
    makeMove(2, 0, "Q");
    expect(checkWinner()).toBe("Q");
  });
});
