import { board } from "../public/game.js";

describe("Game logic", () => {
  test("The board should be empty at the start", () => {
    expect(board).toEqual([["", "", ""], ["", "", ""], ["", "", ""]]);
  });
});
