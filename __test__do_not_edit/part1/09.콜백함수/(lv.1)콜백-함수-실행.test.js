import { executeCallback } from "../../../part1/09.콜백함수/(lv.1)콜백-함수-실행.js";

describe("(lv.1)[2]콜백-함수-실행.js 테스트", () => {
  it("콜백 함수를 실행하여 2배가 된 결과를 반환해야 한다.", () => {
    const double = (x) => x * 2;
    expect(executeCallback(double, 5)).toBe(10);
    expect(executeCallback(double, 10)).toBe(20);
  });

  it("콜백 함수가 다른 연산을 수행해도 해당 결과를 반환해야 한다.", () => {
    const triple = (x) => x * 3;
    expect(executeCallback(triple, 4)).toBe(12);
  });
});
