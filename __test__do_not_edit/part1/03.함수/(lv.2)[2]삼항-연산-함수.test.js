import { checkAdult } from "../../../part1/03.함수/(lv.2)[2]삼항-연산-함수.js";

describe("(lv.2)[2]삼항-연산-함수.js 테스트", () => {
  it("나이 19는 minor여야 한다.", () => {
    expect(checkAdult(19)).toBe("minor");
  });
  it("나이 20은 adult여야 한다.", () => {
    expect(checkAdult(20)).toBe("adult");
  });
  it("나이 30은 adult여야 한다.", () => {
    expect(checkAdult(30)).toBe("adult");
  });
  it("나이 10은 minor여야 한다.", () => {
    expect(checkAdult(10)).toBe("minor");
  });
});
