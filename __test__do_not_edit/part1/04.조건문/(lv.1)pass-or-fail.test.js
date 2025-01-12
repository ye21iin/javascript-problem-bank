import { passOrFail } from "../../../part1/04.조건문/(lv.1)pass-or-fail.js";

describe("(lv.1)pass-or-fail.js 테스트", () => {
  it("점수가 60 이상이면 'Pass'를 반환해야 한다.", () => {
    expect(passOrFail(60)).toBe("Pass");
    expect(passOrFail(90)).toBe("Pass");
  });
  it("점수가 60 미만이면 'Fail'을 반환해야 한다.", () => {
    expect(passOrFail(59)).toBe("Fail");
    expect(passOrFail(0)).toBe("Fail");
  });
});
