import {
  increment,
  decrement,
} from "../../../part1/02.연산자/(lv.1)더하기-연산자.js";

describe("(lv.1)[2]더하기-연산자.js 테스트", () => {
  it("increment 변수는 1이어야 합니다.", () => {
    expect(increment).toBe(1);
  });

  it("decrement 변수는 -1이어야 합니다.", () => {
    expect(decrement).toBe(-1);
  });

  it("increment 변수는 number 타입이어야 합니다.", () => {
    expect(typeof increment).toBe("number");
  });

  it("decrement 변수는 number 타입이어야 합니다.", () => {
    expect(typeof decrement).toBe("number");
  });
});
