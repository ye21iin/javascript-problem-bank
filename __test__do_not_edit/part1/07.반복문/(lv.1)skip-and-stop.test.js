import { skipAndStop } from "../../../part1/07.반복문/(lv.1)skip-and-stop.js";

describe("(lv.1)skip-and-stop.js 테스트", () => {
  it("함수를 실행하면 최종 합인 16을 반환해야 한다.", () => {
    expect(skipAndStop()).toBe(16);
  });
});
