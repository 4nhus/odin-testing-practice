import capitalise from "./capitalise";
import reverseString from "./reverse-string";
import { calculator } from "./calculator";

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

describe("calculator", () => {
  describe("add", () => {
    test("two positive numbers", () => {
      expect(calculator.add(1, 2)).toBe(3);
    });
    test("two negative numbers", () => {
      expect(calculator.add(-1, -2)).toBe(-3);
    });
    test("a positive and a negative number", () => {
      expect(calculator.add(-1, 2)).toBe(1);
    });
    test("a positive number and zero", () => {
      expect(calculator.add(1, 0)).toBe(1);
    });
    test("a negative number and zero", () => {
      expect(calculator.add(-1, 0)).toBe(-1);
    });
    test("two zeroes", () => {
      expect(calculator.add(0, 0)).toBe(0);
    });
    test("no numbers", () => {
      expect(calculator.add()).toBeUndefined();
    });
    test("one number", () => {
      expect(calculator.add(1)).toBeUndefined();
    });
  });
  describe("subtract", () => {
    test("two positive numbers", () => {
      expect(calculator.subtract(1, 2)).toBe(-1);
    });
    test("two negative numbers", () => {
      expect(calculator.subtract(-1, -2)).toBe(1);
    });
    test("a positive then a negative number", () => {
      expect(calculator.subtract(1, -2)).toBe(3);
    });
    test("a negative then a positive number", () => {
      expect(calculator.subtract(-1, 2)).toBe(-3);
    });
    test("a positive number then zero", () => {
      expect(calculator.subtract(1, 0)).toBe(1);
    });
    test("a zero then positive number", () => {
      expect(calculator.subtract(0, 1)).toBe(-1);
    });
    test("a negative number then zero", () => {
      expect(calculator.subtract(-1, 0)).toBe(-1);
    });
    test("a zero then negative number", () => {
      expect(calculator.subtract(0, -1)).toBe(1);
    });
    test("two zeroes", () => {
      expect(calculator.subtract(0, 0)).toBe(0);
    });
    test("no numbers", () => {
      expect(calculator.subtract()).toBeUndefined();
    });
    test("one number", () => {
      expect(calculator.subtract(1)).toBeUndefined();
    });
  });
  describe("multiply", () => {
    test("two positive numbers", () => {
      expect(calculator.multiply(3, 2)).toBe(6);
    });
    test("two negative numbers", () => {
      expect(calculator.multiply(-3, -2)).toBe(6);
    });
    test("a positive and a negative number", () => {
      expect(calculator.multiply(-3, 2)).toBe(-6);
    });
    test("a positive number and zero", () => {
      expect(calculator.multiply(1, 0)).toBe(0);
    });
    test("a negative number and zero", () => {
      expect(calculator.multiply(-1, 0)).toBe(-0);
    });
    test("a positive number and one", () => {
      expect(calculator.multiply(1, 2)).toBe(2);
    });
    test("a negative number and one", () => {
      expect(calculator.multiply(1, -3)).toBe(-3);
    });
    test("a positive number and negative one", () => {
      expect(calculator.multiply(-1, 2)).toBe(-2);
    });
    test("a negative number and negative one", () => {
      expect(calculator.multiply(-1, -3)).toBe(3);
    });
    test("two zeroes", () => {
      expect(calculator.multiply(0, 0)).toBe(0);
    });
    test("two positive ones", () => {
      expect(calculator.multiply(1, 1)).toBe(1);
    });
    test("two negative ones", () => {
      expect(calculator.multiply(-1, -1)).toBe(1);
    });
    test("no numbers", () => {
      expect(calculator.multiply()).toBeUndefined();
    });
    test("one number", () => {
      expect(calculator.multiply(1)).toBeUndefined();
    });
  });
  describe("divide", () => {
    test("two positive integers, integer result", () => {
      expect(calculator.divide(4, 2)).toBe(2);
    });
    test("two positive integers, fraction result", () => {
      expect(calculator.divide(5, 2)).toBeCloseTo(2.5);
    });
    test("two negative integers, integer result", () => {
      expect(calculator.divide(-4, -2)).toBe(2);
    });
    test("two negative integers, fraction result", () => {
      expect(calculator.divide(-5, -2)).toBeCloseTo(2.5);
    });
    test("a positive then a negative integer, integer result", () => {
      expect(calculator.divide(2, -1)).toBeCloseTo(-2);
    });
    test("a positive then a negative integer, fraction result", () => {
      expect(calculator.divide(5, -2)).toBeCloseTo(-2.5);
    });
    test("a negative then a positive integer, integer result", () => {
      expect(calculator.divide(-2, 1)).toBeCloseTo(-2);
    });
    test("a negative then a positive integer, fraction result", () => {
      expect(calculator.divide(-5, 2)).toBeCloseTo(-2.5);
    });
    test("a positive number then zero", () => {
      expect(calculator.divide(1, 0)).toBeUndefined();
    });
    test("a negative number then zero", () => {
      expect(calculator.divide(-1, 0)).toBeUndefined();
    });
    test("a positive integer then one", () => {
      expect(calculator.divide(2, 1)).toBe(2);
    });
    test("a positive fraction then one", () => {
      expect(calculator.divide(0.5, 1)).toBe(0.5);
    });
    test("a negative integer then one", () => {
      expect(calculator.divide(-2, 1)).toBeCloseTo(-2);
    });
    test("a negative fraction then one", () => {
      expect(calculator.divide(-0.5, 1)).toBeCloseTo(-0.5);
    });
    test("a positive number and negative one", () => {
      expect(calculator.divide(2, -1)).toBe(-2);
    });
    test("a negative number and negative one", () => {
      expect(calculator.divide(-3, -1)).toBe(3);
    });
    test("two zeroes", () => {
      expect(calculator.divide(0, 0)).toBeUndefined();
    });
    test("two positive ones", () => {
      expect(calculator.divide(1, 1)).toBe(1);
    });
    test("two negative ones", () => {
      expect(calculator.divide(-1, -1)).toBe(1);
    });
    test("no numbers", () => {
      expect(calculator.divide()).toBeUndefined();
    });
    test("one number", () => {
      expect(calculator.divide(1)).toBeUndefined();
    });
  });
});
