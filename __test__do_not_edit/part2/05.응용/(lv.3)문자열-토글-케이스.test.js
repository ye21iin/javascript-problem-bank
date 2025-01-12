import { toggleCase } from "../../../part2/05.응용/(lv.3)문자열-토글-케이스.js";

describe("(lv.2)문자열-토글-케이스.js 테스트", () => {
  it("모든 소문자를 대문자로, 대문자를 소문자로 바꿔야 한다.", () => {
    expect(toggleCase("Abc123")).toBe("aBC123");
    expect(toggleCase("HELLOworld")).toBe("helloWORLD");
  });

  it("알파벳 이외의 문자는 변경하지 않는다.", () => {
    expect(toggleCase("Test!@#")).toBe("tEST!@#");
  });

  it("빈 문자열을 입력하면 빈 문자열을 반환해야 한다.", () => {
    expect(toggleCase("")).toBe("");
  });

  it("이미 모두 소문자이거나 모두 대문자인 경우 올바르게 변환된다.", () => {
    expect(toggleCase("abc")).toBe("ABC");
    expect(toggleCase("XYZ")).toBe("xyz");
  });
});
