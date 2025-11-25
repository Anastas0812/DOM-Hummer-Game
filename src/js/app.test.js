import demo from "./app";

jest.mock('./myGame/myGame.js', () => ({
  addGoblin: jest.fn(),
  showRandomGoblin: jest.fn(),
}));

describe("Пример теста", () => {
  test.each([
    { str: "Hello!", expected: "Demo: Hello!" },
    { str: "", expected: "Demo: " },
    { str: 100, expected: "Demo: 100" },
  ])("demo($str)", ({ str, expected }) => {
    expect(demo(str)).toBe(expected);
  });
});
