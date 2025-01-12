import { returnHello } from "../../../part1/10.비동기/(lv.1)Promise-객체-만들기(2).js";
import { describe, it, expect, jest } from "@jest/globals";

describe("(lv.1)[1]Promise-객체-만들기.js 테스트", () => {
  it('"Hello" 문자열을 resolve해야 합니다.', async () => {
    const result = await returnHello();
    expect(result).toBe("Hello");
  });

  it("반환된 값은 반드시 문자열이어야 합니다.", async () => {
    const result = await returnHello();
    expect(typeof result).toBe("string");
  });

  it("Promise 객체를 반환해야 합니다.", () => {
    const result = returnHello();
    expect(result).toBeInstanceOf(Promise);
  });

  it('"Hello" 이외의 문자열을 resolve하지 않아야 합니다.', async () => {
    const result = await returnHello();
    expect(result).not.toBe("Hi");
    expect(result).not.toBe("");
  });

  it("reject를 호출하지 않아야 합니다.", async () => {
    await expect(returnHello()).resolves.toBe("Hello");
  });

  it("비동기로 동작하는지 확인해야 합니다.", async () => {
    const fn = jest.fn();
    returnHello().then(fn);
    expect(fn).not.toHaveBeenCalled();
    await Promise.resolve();
    expect(fn).toHaveBeenCalled();
  });
});
