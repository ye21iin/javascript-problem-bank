import { canDrive } from "../../../part1/03.함수/(lv.2)[2]논리-연산-함수.js";

describe("(lv.2)[2]논리-연산-함수.js 테스트", () => {
  it("age가 18 이상이고 hasLicense가 true이면 true를 반환해야 한다.", () => {
    expect(canDrive(18, true)).toBe(true);
    expect(canDrive(20, true)).toBe(true);
  });

  it("age가 18 미만이거나 hasLicense가 false이면 false를 반환해야 한다.", () => {
    expect(canDrive(17, true)).toBe(false);
    expect(canDrive(18, false)).toBe(false);
    expect(canDrive(10, false)).toBe(false);
  });
});
