import { remainder } from "../../../part1/02.연산자/(lv.1)나머지-연산자.js";

describe("(lv.1)[2]나머지-연산자.js 테스트", () => {
  it("remainder 변수는 2이어야 합니다.", () => {
    expect(remainder).toBe(2);
  });

  it("remainder 변수는 number 타입이어야 합니다.", () => {
    expect(typeof remainder).toBe("number");
  });
});
