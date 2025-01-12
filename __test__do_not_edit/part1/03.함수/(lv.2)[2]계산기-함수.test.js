import { calcTotal } from "../../../part1/03.함수/(lv.2)[2]계산기-함수.js";
import { jest } from "@jest/globals";

describe("(lv.2)[2]계산기-함수.js 테스트", () => {
  it("calcTotal(1000)을 호출하면 1000을 반환해야 합니다. (quantity 기본값 1)", () => {
    expect(calcTotal(1000)).toBe(1000);
  });

  it("calcTotal(1000, 2)를 호출하면 2000을 반환해야 합니다.", () => {
    expect(calcTotal(1000, 2)).toBe(2000);
  });

  it("calcTotal(500, 3)를 호출하면 1500을 반환해야 합니다.", () => {
    expect(calcTotal(500, 3)).toBe(1500);
  });

  it("calcTotal(100)가 0 이하가 나오지 않도록 주의하세요. (기본값 1 확인)", () => {
    expect(calcTotal(100)).toBeGreaterThan(0);
  });
});
