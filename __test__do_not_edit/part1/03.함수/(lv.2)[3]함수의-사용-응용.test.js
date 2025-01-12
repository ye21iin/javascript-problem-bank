import {
  total,
  canDriveResult,
  adultResult,
} from "../../../part1/03.함수/(lv.2)[3]함수의-사용-응용.js";

describe("(lv.2)[3]함수의-사용-응용.js 테스트", () => {
  it("total은 3000이어야 한다.", () => {
    expect(total).toBe(3000);
  });
  it("canDriveResult는 true여야 한다.", () => {
    expect(canDriveResult).toBe(true);
  });
  it("adultResult는 'minor'여야 한다.", () => {
    expect(adultResult).toBe("minor");
  });
});
