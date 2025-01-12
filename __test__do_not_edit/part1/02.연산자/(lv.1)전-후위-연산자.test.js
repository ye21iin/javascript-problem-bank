import {
  postIncrement,
  preIncrement,
} from "../../../part1/02.연산자/(lv.1)전-후위-연산자.js";

describe("(lv.1)[2]전-후위-연산자.js 테스트", () => {
  it("postIncrement 변수는 0이어야 합니다.", () => {
    expect(postIncrement).toBe(0);
  });

  it("preIncrement 변수는 2이어야 합니다.", () => {
    expect(preIncrement).toBe(2);
  });

  it("postIncrement 변수는 number 타입이어야 합니다.", () => {
    expect(typeof postIncrement).toBe("number");
  });

  it("preIncrement 변수는 number 타입이어야 합니다.", () => {
    expect(typeof preIncrement).toBe("number");
  });
});
