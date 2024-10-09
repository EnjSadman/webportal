const { calculate } = require("../lib/CalcFromString")

describe("check basic math", () => {
  test("check basic math. Two numbers", () => {
    expect(calculate("2 + 2")).toBe("4");
    expect(calculate("2 - 2")).toBe("0");
    expect(calculate("2 * 2")).toBe("4");
    expect(calculate("2 / 2")).toBe("1");
  })
  test("check basic math. Three numbers", () => {
    expect(calculate("2 + 2 + 2")).toBe("6");
    expect(calculate("2 - 2 - 2")).toBe("-2");
    expect(calculate("2 * 2 * 2")).toBe("8");
    expect(calculate("4 / 2 / 2")).toBe("1");
  })
})