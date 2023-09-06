import { board } from "../game";

describe("Game logic", () => {
  test("The board should be empty at the start", () => {
    expect(board).toEqual([["", "", ""], ["", "", ""], ["", "", ""]]);
  });
});
