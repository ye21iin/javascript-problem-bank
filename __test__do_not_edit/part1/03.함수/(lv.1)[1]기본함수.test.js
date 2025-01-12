import { greet } from "../../../part1/03.함수/(lv.1)[1]기본함수.js";

describe("(lv.1)[1]기본함수.js 테스트", () => {
  it('greet 함수는 "Hello, World!"를 반환해야 합니다.', () => {
    expect(greet()).toBe("Hello, World!");
  });
});
