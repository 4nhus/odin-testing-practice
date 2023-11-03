import capitalise from "./capitalise";

describe("capitalise", () => {
  test("empty string", () => {
    expect(capitalise("")).toBe("");
  });
  test("non-capitalised string", () => {
    expect(capitalise("string")).toBe("String");
  });
  test("capitalised string", () => {
    expect(capitalise("String")).toBe("String");
  });
  test("numeric string", () => {
    expect(capitalise("1234")).toBe("1234");
  });
  test("symbols string", () => {
    expect(capitalise("!@#$")).toBe("!@#$");
  });
  test("test", () => {});
});
