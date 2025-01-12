import { getValueThenDouble } from "../../../part1/10.비동기/(lv.1)Promise-체이닝-then.js";
import { describe, it, expect } from "@jest/globals";

describe("(lv.1)Promise-체이닝-then.js 테스트", () => {
  it("getValueThenDouble 함수는 Promise 객체를 반환해야 한다.", () => {
    const result = getValueThenDouble();
    expect(result).toBeInstanceOf(Promise);
  });

  it("resolve된 값이 2배가 되어야 한다.", async () => {
    const result = await getValueThenDouble();
    expect(result).toBe(10);
  });
});
