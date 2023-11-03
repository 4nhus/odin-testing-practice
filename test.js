import capitalise from "./capitalise";
import reverseString from "./reverse-string";

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
});

describe("reverseString", () => {
  test("empty string", () => {
    expect(reverseString("")).toBe("");
  });
  test("odd length palindromic string", () => {
    expect(reverseString("bob")).toBe("bob");
  });
  test("even length palindromic string", () => {
    expect(reverseString("boob")).toBe("boob");
  });
  test("odd length non palindromic string", () => {
    expect(reverseString("thing")).toBe("gniht");
  });
  test("even length non palindromic string", () => {
    expect(reverseString("four")).toBe("ruof");
  });
  test("odd length palindromic numeric string", () => {
    expect(reverseString("101")).toBe("101");
  });
  test("even length palindromic numeric string", () => {
    expect(reverseString("1221")).toBe("1221");
  });
  test("odd length non palindromic numeric string", () => {
    expect(reverseString("12345")).toBe("54321");
  });
  test("even length non palindromic numeric string", () => {
    expect(reverseString("1234")).toBe("4321");
  });
});
