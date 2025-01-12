import {
  increment,
  decrement,
  add,
  subtract,
  multiply,
  divide,
} from "../../../part1/02.연산자/(lv.1)단축-연산자.js";

describe("(lv.1)[2]단축-연산자.js 테스트", () => {
  it("increment 변수는 1이어야 합니다.", () => {
    expect(increment).toBe(1);
  });

  it("decrement 변수는 -1이어야 합니다.", () => {
    expect(decrement).toBe(-1);
  });

  it("add 변수는 10이어야 합니다.", () => {
    expect(add).toBe(10);
  });

  it("subtract 변수는 10이어야 합니다.", () => {
    expect(subtract).toBe(10);
  });

  it("multiply 변수는 10이어야 합니다.", () => {
    expect(multiply).toBe(10);
  });

  it("divide 변수는 10이어야 합니다.", () => {
    expect(divide).toBe(10);
  });

  it("add 변수는 number 타입이어야 합니다.", () => {
    expect(typeof add).toBe("number");
  });

  it("subtract 변수는 number 타입이어야 합니다.", () => {
    expect(typeof subtract).toBe("number");
  });

  it("multiply 변수는 number 타입이어야 합니다.", () => {
    expect(typeof multiply).toBe("number");
  });

  it("divide 변수는 number 타입이어야 합니다.", () => {
    expect(typeof divide).toBe("number");
  });

  it("increment 변수는 number 타입이어야 합니다.", () => {
    expect(typeof increment).toBe("number");
  });

  it("decrement 변수는 number 타입이어야 합니다.", () => {
    expect(typeof decrement).toBe("number");
  });
});
