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
  });  
  test("The game correctly identifies a win condition when player has three of their symbols in a column", () => {
    makeMove(0, 0, "O");
    makeMove(1, 0, "O");
    makeMove(2, 0, "O");
    expect(checkWinner()).toBe("O");
  });  
  test("The game correctly identifies a win condition when player has three of their symbols in a diagonal", () => {
    makeMove(0, 0, "G");
    makeMove(1, 1, "G");
    makeMove(2, 2, "G");
    expect(checkWinner()).toBe("G");
  });
});
