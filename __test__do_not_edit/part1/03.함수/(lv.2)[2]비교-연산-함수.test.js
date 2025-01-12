// import {
//   looseCompare,
//   strictCompare,
// } from "../../../part1/03.함수/(lv.2)[2]비교-연산-함수.js";

import { jest } from "@jest/globals";

describe("(lv.2)[2]비교-연산-함수.js 테스트", () => {
  let looseCompare, strictCompare;
  beforeAll(async () => {
    try {
      const lazy = await import(
        "../../../part1/03.함수/(lv.2)[2]비교-연산-함수.js"
      );
      looseCompare = lazy.looseCompare;
      strictCompare = lazy.strictCompare;
    } catch (error) {
      looseCompare = strictCompare = undefined;
    }
  });

  it("looseCompare(1, '1')는 true여야 한다.", () => {
    expect(looseCompare(1, "1")).toBe(true);
  });
  it("looseCompare(1, 2)는 false여야 한다.", () => {
    expect(looseCompare(1, 2)).toBe(false);
  });
  it("strictCompare(1, '1')는 false여야 한다.", () => {
    expect(strictCompare(1, "1")).toBe(false);
  });
  it("strictCompare(2, 2)는 true여야 한다.", () => {
    expect(strictCompare(2, 2)).toBe(true);
  });
});
