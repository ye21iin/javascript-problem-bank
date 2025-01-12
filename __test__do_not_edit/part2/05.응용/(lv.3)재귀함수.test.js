import { factorial } from "../../../part2/05.응용/(lv.3)재귀함수.js";

describe("(lv.3)재귀함수.js 테스트", () => {
  it("n이 0 이하이면 1을 반환해야 한다.", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(-1)).toBe(1);
  });

  it("n이 1이면 1을 반환해야 한다.", () => {
    expect(factorial(1)).toBe(1);
  });

  it("n이 2이면 2를 반환해야 한다.", () => {
    expect(factorial(2)).toBe(2);
  });

  it("n이 5이면 120을 반환해야 한다.", () => {
    expect(factorial(5)).toBe(120);
  });

  it("n이 10이면 3628800을 반환해야 한다.", () => {
    expect(factorial(10)).toBe(3628800);
  });
});
