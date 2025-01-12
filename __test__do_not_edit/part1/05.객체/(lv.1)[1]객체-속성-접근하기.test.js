import {
  person,
  person2,
} from "../../../part1/05.객체/(lv.1)[1]객체-속성-접근하기.js";

describe("(lv.1)[1]객체-속성-접근하기.js 테스트", () => {
  it("person2.name은 person.name과 같아야 한다.", () => {
    expect(person2.name).toBe(person.name);
  });

  it("person2.age는 person.age + 1 이어야 한다.", () => {
    expect(person2.age).toBe(person.age + 1);
  });
});
