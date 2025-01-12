import { hoistingTest } from "../../../part1/01.변수/(lv.1)[2]호이스팅.js";
import { jest } from "@jest/globals";

describe("(lv.1)[2]호이스팅.js 테스트", () => {
  it("hoistingTest 함수 실행 시, 콘솔에 undefined와 5가 순서대로 출력되어야 합니다.", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    hoistingTest();
    expect(consoleSpy.mock.calls[0][0]).toBeUndefined();
    expect(consoleSpy.mock.calls[1][0]).toBe(5);
    consoleSpy.mockRestore();
  });
});
