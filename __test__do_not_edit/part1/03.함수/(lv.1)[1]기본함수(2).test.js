import { greet } from "../../../part1/03.함수/(lv.1)[1]기본함수(2).js";

describe("(lv.1)[1]기본함수(2).js 테스트", () => {
  it("'Hello, {name}'를 반환해야 합니다.", () => {
    expect(greet("홍길동")).toBe("Hello, 홍길동");
  });
});
