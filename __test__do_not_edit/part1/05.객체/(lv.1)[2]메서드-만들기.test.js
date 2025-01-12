import { person } from "../../../part1/05.객체/(lv.1)[2]메서드-만들기.js";

describe("(lv.1)[2]메서드-만들기.js 테스트", () => {
  it("person.introduce()를 호출하면 '안녕하세요, 저는 철수이고 25살입니다.'를 반환해야 합니다.", () => {
    expect(person.introduce()).toBe("안녕하세요, 저는 철수이고 25살입니다.");
  });
});
