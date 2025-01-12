import { greeting } from "../../../part1/01.변수/(lv.1)[2]문자열-변수사용.js";

describe("(lv.1)[2]문자열-변수사용.js 테스트", () => {
  it("greeting 변수는 문자열 타입이어야 합니다.", () => {
    expect(typeof greeting).toBe("string");
  });

  it("greeting 변수는 '안녕하세요, 철수님!'과 같아야 합니다.", () => {
    expect(greeting).toBe("안녕하세요, 철수님!");
  });
});
