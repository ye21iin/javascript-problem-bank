import { reverseString } from "../../../part2/02.배열/(lv.2)문자열-뒤집기.js";

describe("(lv.2)문자열-뒤집기.js 테스트", () => {
  it("문자열을 뒤집어야 한다.", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
  });

  it("문자열이 아닌 경우, 빈 문자열을 반환해야 한다.", () => {
    expect(reverseString(123)).toBe("");
    expect(reverseString(null)).toBe("");
    expect(reverseString(undefined)).toBe("");
    expect(reverseString({})).toBe("");
  });

  it("빈 문자열을 입력하면 빈 문자열을 반환해야 한다.", () => {
    expect(reverseString("")).toBe("");
  });

  it("특수 문자가 포함된 문자열도 올바르게 뒤집어야 한다.", () => {
    expect(reverseString("!@#$")).toBe("$#@!");
  });

  it("한글 문자열도 뒤집어야 한다.", () => {
    expect(reverseString("안녕")).toBe("녕안");
  });
});
