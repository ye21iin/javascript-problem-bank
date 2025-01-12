import { isEvenOrOdd } from "../../../part1/04.조건문/(lv.1)홀짝-구하기.js";

describe("(lv.1)홀짝-구하기.js 테스트", () => {
  it("짝수(2)를 전달하면 'Even'을 반환해야 한다.", () => {
    expect(isEvenOrOdd(2)).toBe("Even");
  });
  it("짝수(10)를 전달하면 'Even'을 반환해야 한다.", () => {
    expect(isEvenOrOdd(10)).toBe("Even");
  });
  it("홀수(3)를 전달하면 'Odd'를 반환해야 한다.", () => {
    expect(isEvenOrOdd(3)).toBe("Odd");
  });
  it("홀수(11)를 전달하면 'Odd'를 반환해야 한다.", () => {
    expect(isEvenOrOdd(11)).toBe("Odd");
  });
});
