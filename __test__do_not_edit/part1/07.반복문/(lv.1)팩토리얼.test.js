import { factorial } from "../../../part1/07.반복문/(lv.1)팩토리얼.js";

describe("(lv.1)팩토리얼.js 테스트", () => {
  it("n이 0 이하이면 0을 반환해야 한다.", () => {
    expect(factorial(0)).toBe(0);
    expect(factorial(-1)).toBe(0);
  });

  it("n이 1이면 1을 반환해야 한다.", () => {
    expect(factorial(1)).toBe(1);
  });

  it("n이 2이면 3(1+2)을 반환해야 한다.", () => {
    expect(factorial(2)).toBe(3);
  });

  it("n이 5이면 15(1+2+3+4+5)을 반환해야 한다.", () => {
    expect(factorial(5)).toBe(15);
  });
});
