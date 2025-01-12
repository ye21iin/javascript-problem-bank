import { toggled } from "../../../part1/02.연산자/(lv.1)논리-Not-연산자.js";

describe("(lv.1)[2]논리-Not-연산자.js 테스트", () => {
  it("toggled 변수는 boolean 타입이어야 합니다.", () => {
    expect(typeof toggled).toBe("boolean");
  });

  it("toggled 변수는 isActive 변수의 반대 값이어야 합니다.", () => {
    expect(toggled).toBe(false);
  });
});
