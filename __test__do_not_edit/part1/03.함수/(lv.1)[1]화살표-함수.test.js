import { multiplyByTwo } from "../../../part1/03.함수/(lv.1)[1]화살표-함수.js";

describe("(lv.1)[1]화살표-함수.js 테스트", () => {
  it("multiplyByTwo(2)는 4를 반환해야 합니다.", () => {
    expect(multiplyByTwo(2)).toBe(4);
  });
  it("multiplyByTwo(10)는 20을 반환해야 합니다.", () => {
    expect(multiplyByTwo(10)).toBe(20);
  });
});
