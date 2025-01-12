import { blockScopeTest } from "../../../part1/01.변수/(lv.1)[2]블록-스코프.js";
import { jest } from "@jest/globals";

describe("(lv.1)[2]블록-스코프.js 테스트", () => {
  it("blockScopeTest 함수는 w에 접근할 때 ReferenceError를 발생시켜야 합니다.", () => {
    expect(() => blockScopeTest()).toThrow(ReferenceError);
  });

  it("blockScopeTest 함수는 u에 접근할 때 값 2를 출력해야 합니다.", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    try {
      blockScopeTest();
    } catch (_) {}
    expect(consoleSpy).toHaveBeenCalledWith(2);
    consoleSpy.mockRestore();
  });
});
