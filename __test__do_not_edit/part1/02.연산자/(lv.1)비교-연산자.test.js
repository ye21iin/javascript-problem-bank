import {
  compare1,
  compare2,
  compare3,
  compare4,
} from "../../../part1/02.연산자/(lv.1)비교-연산자.js";

describe("(lv.1)[2]비교-연산자.js 테스트", () => {
  it("compare1 변수는 true이어야 합니다.", () => {
    expect(compare1).toBe(true);
  });

  it("compare2 변수는 false이어야 합니다.", () => {
    expect(compare2).toBe(false);
  });

  it("compare3 변수는 false이어야 합니다.", () => {
    expect(compare3).toBe(false);
  });

  it("compare4 변수는 true이어야 합니다.", () => {
    expect(compare4).toBe(true);
  });

  it("compare1 변수는 boolean 타입이어야 합니다.", () => {
    expect(typeof compare1).toBe("boolean");
  });

  it("compare2 변수는 boolean 타입이어야 합니다.", () => {
    expect(typeof compare2).toBe("boolean");
  });

  it("compare3 변수는 boolean 타입이어야 합니다.", () => {
    expect(typeof compare3).toBe("boolean");
  });

  it("compare4 변수는 boolean 타입이어야 합니다.", () => {
    expect(typeof compare4).toBe("boolean");
  });
});
