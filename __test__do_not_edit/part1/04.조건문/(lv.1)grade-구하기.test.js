import { getGrade } from "../../../part1/04.조건문/(lv.1)grade-구하기.js";

describe("(lv.1)grade-구하기.js 테스트", () => {
  it("점수가 95이면 'A'를 반환해야 한다.", () => {
    expect(getGrade(95)).toBe("A");
  });
  it("점수가 90이면 'A'를 반환해야 한다.", () => {
    expect(getGrade(90)).toBe("A");
  });
  it("점수가 89이면 'B'를 반환해야 한다.", () => {
    expect(getGrade(89)).toBe("B");
  });
  it("점수가 80이면 'B'를 반환해야 한다.", () => {
    expect(getGrade(80)).toBe("B");
  });
  it("점수가 70이면 'C'를 반환해야 한다.", () => {
    expect(getGrade(70)).toBe("C");
  });
  it("점수가 69이면 'D'를 반환해야 한다.", () => {
    expect(getGrade(69)).toBe("D");
  });
  it("점수가 0이면 'D'를 반환해야 한다.", () => {
    expect(getGrade(0)).toBe("D");
  });
  it("점수가 100이면 'A'를 반환해야 한다.", () => {
    expect(getGrade(100)).toBe("A");
  });
});
