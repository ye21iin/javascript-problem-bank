// import {
//   add,
//   subtract,
//   multiply,
//   divide,
// } from "../../../part1/03.함수/(lv.2)[1]기본-산술-연산-함수.js";
import { jest } from "@jest/globals";

describe("(lv.2)[1]기본-산술-연산-함수.js 테스트", () => {
  let add, subtract, multiply, divide;
  beforeAll(async () => {
    try {
      const lazy = await import(
        "../../../part1/03.함수/(lv.2)[1]기본-산술-연산-함수.js"
      );
      add = lazy.add;
      subtract = lazy.subtract;
      multiply = lazy.multiply;
      divide = lazy.divide;
    } catch (error) {
      add = subtract = multiply = divide = undefined;
    }
  });

  it("add(2, 3)은 5가 되어야 합니다.", () => {
    expect(add(2, 3)).toBe(5);
  });
  it("subtract(5, 2)는 3이 되어야 합니다.", () => {
    expect(subtract(5, 2)).toBe(3);
  });
  it("multiply(4, 3)은 12가 되어야 합니다.", () => {
    expect(multiply(4, 3)).toBe(12);
  });
  it("divide(10, 2)는 5가 되어야 합니다.", () => {
    expect(divide(10, 2)).toBe(5);
  });
});
