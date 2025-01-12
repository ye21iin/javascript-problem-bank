import { debounce } from "../../../part2/04.클로저/(lv.3)debounce.js";
import { jest } from "@jest/globals";

describe("(lv.3)Debounce-함수-구현.js 테스트", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("delay 시간이 지나기 전에는 함수가 실행되지 않아야 한다.", () => {
    const mockFn = jest.fn();
    const debounced = debounce(mockFn, 500);

    debounced();
    expect(mockFn).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(499);
    expect(mockFn).toHaveBeenCalledTimes(0);
  });

  it("delay 이내에 여러 번 호출해도, 마지막 호출 후 delay가 지난 시점에만 실행되어야 한다.", () => {
    const mockFn = jest.fn();
    const debounced = debounce(mockFn, 500);

    debounced();
    debounced();
    debounced();

    jest.advanceTimersByTime(499);
    expect(mockFn).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(1);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("delay가 지나기 전에 다시 호출하면 타이머가 리셋되어야 한다.", () => {
    const mockFn = jest.fn();
    const debounced = debounce(mockFn, 300);

    debounced();
    jest.advanceTimersByTime(200);
    debounced();
    jest.advanceTimersByTime(200);
    expect(mockFn).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(100);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("호출 시 전달된 인자를 그대로 func에 넘겨야 한다.", () => {
    const mockFn = jest.fn();
    const debounced = debounce(mockFn, 200);

    debounced("hello", 123);
    jest.advanceTimersByTime(200);
    expect(mockFn).toHaveBeenCalledWith("hello", 123);
  });
});
