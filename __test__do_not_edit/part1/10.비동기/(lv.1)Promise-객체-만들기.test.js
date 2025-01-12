import {
  resolvePromise,
  rejectPromise,
} from "../../../part1/10.비동기/(lv.1)Promise-객체-만들기.js";

describe("(lv.1)[2]Promise-객체-만들기.js 테스트", () => {
  it("resolvePromise는 'Hello'를 resolve해야 한다.", async () => {
    await expect(resolvePromise).resolves.toBe("Hello");
  });

  it("rejectPromise는 'Error!'를 reject해야 한다.", async () => {
    await expect(rejectPromise).rejects.toBe("Error!");
  });

  it("resolvePromise와 rejectPromise는 각각 Promise 객체여야 한다.", () => {
    expect(resolvePromise).toBeInstanceOf(Promise);
    expect(rejectPromise).toBeInstanceOf(Promise);
  });
});
