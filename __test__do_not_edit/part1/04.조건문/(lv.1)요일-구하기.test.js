import { getDayName } from "../../../part1/04.조건문/(lv.1)요일-구하기.js";

describe("(lv.1)요일-구하기.js 테스트", () => {
  it("1이면 '월'을 반환해야 한다.", () => {
    expect(getDayName(1)).toBe("월");
  });
  it("3이면 '수'를 반환해야 한다.", () => {
    expect(getDayName(3)).toBe("수");
  });
  it("6이면 '토'를 반환해야 한다.", () => {
    expect(getDayName(6)).toBe("토");
  });
  it("7이면 '일'을 반환해야 한다.", () => {
    expect(getDayName(7)).toBe("일");
  });
  it("0이면 'Invalid'를 반환해야 한다.", () => {
    expect(getDayName(0)).toBe("Invalid");
  });
  it("8이면 'Invalid'를 반환해야 한다.", () => {
    expect(getDayName(8)).toBe("Invalid");
  });
});
