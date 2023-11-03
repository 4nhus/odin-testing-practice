export const calculator = {
  add: (a, b) => {
    if (a === undefined || b === undefined || a === null || b === null) {
      return undefined;
    }
    return a + b;
  },
  subtract: (a, b) => {
    if (a === undefined || b === undefined || a === null || b === null) {
      return undefined;
    }
    return a - b;
  },
  multiply: (a, b) => {
    if (a === undefined || b === undefined || a === null || b === null) {
      return undefined;
    }
    return a * b;
  },
  divide: (a, b) => {
    if (
      a === undefined ||
      b === undefined ||
      a === null ||
      b === null ||
      b === 0
    ) {
      return undefined;
    }

    return a / b;
  },
};
