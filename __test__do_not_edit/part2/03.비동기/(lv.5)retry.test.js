import { retryRequest } from "../../../part2/03.비동기/(lv.5)retry.js";

describe("(lv.3)retry.js 테스트", () => {
  it("성공 시, 즉시 resolve되어야 한다.", async () => {
    let callCount = 0;
    const promiseFactory = () => {
      callCount++;
      return Promise.resolve("success");
    };
    const result = await retryRequest(promiseFactory, 3);
    expect(result).toBe("success");
    expect(callCount).toBe(1);
  });

  it("최대 재시도 횟수 안에 성공하면, 성공 값을 resolve해야 한다.", async () => {
    let failCount = 0;
    const promiseFactory = () => {
      if (failCount < 2) {
        failCount++;
        return Promise.reject("fail");
      }
      return Promise.resolve("final-success");
    };
    const result = await retryRequest(promiseFactory, 5);
    expect(result).toBe("final-success");
    expect(failCount).toBe(2);
  });

  it("모든 시도가 실패하면, 마지막 에러를 reject해야 한다.", async () => {
    let callCount = 0;
    const promiseFactory = () => {
      callCount++;
      return Promise.reject(`error-${callCount}`);
    };
    await expect(retryRequest(promiseFactory, 2)).rejects.toMatch("error-3");
    expect(callCount).toBe(3);
  });

  it("retries가 0이면 한 번만 시도해야 한다.", async () => {
    let callCount = 0;
    const promiseFactory = () => {
      callCount++;
      return Promise.reject("always fail");
    };
    await expect(retryRequest(promiseFactory, 0)).rejects.toBe("always fail");
    expect(callCount).toBe(1);
  });
});
