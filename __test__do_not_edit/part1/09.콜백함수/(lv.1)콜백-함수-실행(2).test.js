import { chainCallbacks } from "../../../part1/09.콜백함수/(lv.1)콜백-함수-실행(2).js";

describe("(lv.1)콜백-체인.js 테스트", () => {
  it("두 콜백을 차례로 호출한 결과값을 반환해야 한다.", () => {
    const double = (x) => x * 2;
    const addFive = (x) => x + 5;
    expect(chainCallbacks(2, double, addFive)).toBe(9);
  });

  it("콜백이 다른 연산을 하더라도 올바른 체인 결과를 반환해야 한다.", () => {
    const triple = (x) => x * 3;
    const subtractOne = (x) => x - 1;
    expect(chainCallbacks(4, triple, subtractOne)).toBe(11);
  });

  it("콜백이 문자열로 변환한 뒤, 길이를 반환하는 등 다양한 연산도 가능해야 한다.", () => {
    const toString = (x) => String(x);
    const length = (x) => x.length;
    expect(chainCallbacks(12345, toString, length)).toBe(5);
  });
});
