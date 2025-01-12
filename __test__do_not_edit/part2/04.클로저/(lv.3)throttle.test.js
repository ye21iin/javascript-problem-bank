import { throttle } from "../../../part2/04.클로저/(lv.3)throttle.js";
import { jest } from "@jest/globals";

describe("(lv.3)Throttle.js 테스트", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("delay 기간 동안 여러 번 호출해도 최초 1회만 실행되어야 한다.", () => {
    const mockFn = jest.fn();
    const throttled = throttle(mockFn, 1000);

    throttled();
    expect(mockFn).toHaveBeenCalledTimes(1);

    for (let i = 0; i < 10; i++) {
      throttled();
    }
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("delay가 지나면 다시 최초 한 번만 실행되어야 한다.", () => {
    const mockFn = jest.fn();
    const throttled = throttle(mockFn, 500);

    throttled();
    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(500);
    throttled();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("호출 시 인자를 그대로 func에 전달해야 한다.", () => {
    const mockFn = jest.fn();
    const throttled = throttle(mockFn, 1000);

    throttled(10, "test");
    expect(mockFn).toHaveBeenCalledWith(10, "test");
  });
});
