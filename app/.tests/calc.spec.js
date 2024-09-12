const { calculate } = require("../lib/CalcFromString")

test("check basic math", () => {
  expect(calculate("2 + 2")).toBe("4");
  expect(calculate("2 + 2 + 2")).toBe("6");
  expect(calculate("2 - 2")).toBe("0");
  expect(calculate("2 * 2")).toBe("4");
  expect(calculate("2 / 2")).toBe("1");
})