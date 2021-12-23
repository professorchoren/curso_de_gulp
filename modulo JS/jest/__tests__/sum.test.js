const sum = require("../js/sum");

describe("Sum validations", () => {
  it("Should 1 plus 1 is 2 ", () => {
    const result = sum(1, 1);
    expect(result).toBe(2);
  });
  it("Should -6 plus 2 is -4 ", () => {
    const result = sum(-6, 2);
    expect(result).toBe(-4);
  });
});
