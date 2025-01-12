import { jest } from "@jest/globals";
import { once } from "../../../part2/04.클로저/(lv.3)once.js";

describe("(lv.3)once.js 테스트", () => {
  it("첫 호출 시 fn이 실행되고, 그 결과를 반환해야 한다.", () => {
    let callCount = 0;
    const originalFn = jest.fn(() => {
      callCount++;
      return "hello";
    });
    const wrapped = once(originalFn);

    const result1 = wrapped();
    expect(result1).toBe("hello");
    expect(callCount).toBe(1);
    expect(originalFn).toHaveBeenCalledTimes(1);
  });

  it("두 번째 이후 호출은 fn을 재실행하지 않고 이전 결과를 반환해야 한다.", () => {
    let callCount = 0;
    const originalFn = jest.fn(() => {
      callCount++;
      return "world";
    });
    const wrapped = once(originalFn);

    wrapped();
    const result2 = wrapped();
    const result3 = wrapped();

    expect(result2).toBe("world");
    expect(result3).toBe("world");
    expect(callCount).toBe(1);
    expect(originalFn).toHaveBeenCalledTimes(1);
  });

  it("인자를 전달해도 첫 호출 이후에는 다시 실행하지 않아야 한다.", () => {
    const sumFn = jest.fn((a, b) => a + b);
    const wrapped = once(sumFn);

    const firstResult = wrapped(2, 3);
    const secondResult = wrapped(10, 10);

    expect(firstResult).toBe(5);
    expect(secondResult).toBe(5);
    expect(sumFn).toHaveBeenCalledTimes(1);
  });
});
