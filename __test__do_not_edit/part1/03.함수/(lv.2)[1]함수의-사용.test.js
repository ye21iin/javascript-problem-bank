// import {
//   result1,
//   result2,
//   result3,
//   result4,
// } from "../../../part1/03.함수/(lv.2)[1]함수의-사용.js";

import { jest } from "@jest/globals";

describe("(lv.2)[1]함수의-사용.js 테스트", () => {
  let result1, result2, result3, result4;
  beforeAll(async () => {
    try {
      const lazy = await import(
        "../../../part1/03.함수/(lv.2)[1]함수의-사용.js"
      );
      result1 = lazy.result1;
      result2 = lazy.result2;
      result3 = lazy.result3;
      result4 = lazy.result4;
    } catch (error) {
      result1 = result2 = result3 = result4 = undefined;
    }
  });

  it("result1은 (num1 + num2)인 15여야 합니다.", () => {
    expect(result1).toBe(15);
  });
  it("result2는 (num1 - num2)인 5여야 합니다.", () => {
    expect(result2).toBe(5);
  });
  it("result3은 (num1 * num2)인 50이어야 합니다.", () => {
    expect(result3).toBe(50);
  });
  it("result4는 (num1 / num2)인 2여야 합니다.", () => {
    expect(result4).toBe(2);
  });
});
