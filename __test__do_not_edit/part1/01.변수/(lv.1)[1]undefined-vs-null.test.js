// import {
//   undeclaredVar,
//   nullVar,
// } from "../../../part1/01.변수/(lv.1)[1]undefined-vs-null.js";

import { jest } from "@jest/globals";

describe("(lv.1)[1]undefined-vs-null.js 테스트", () => {
  let undeclaredVar, nullVar;
  beforeAll(async () => {
    try {
      const lazy = await import(
        "../../../part1/01.변수/(lv.1)[1]undefined-vs-null.js"
      );
      undeclaredVar = lazy.undeclaredVar;
      nullVar = lazy.nullVar;
    } catch (error) {
      undeclaredVar = nullVar = undefined;
    }
  });

  it("undeclaredVar 변수는 undefined 타입이어야 합니다.", () => {
    expect(typeof undeclaredVar).toBe("undefined");
  });

  it("nullVar 변수는 object 타입이어야 합니다.", () => {
    expect(typeof nullVar).toBe("object");
  });
});
