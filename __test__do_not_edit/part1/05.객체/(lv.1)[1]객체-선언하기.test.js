import { person } from "../../../part1/05.객체/(lv.1)[1]객체-선언하기.js";

describe("(lv.1)[1]객체-선언하기.js 테스트", () => {
  it('person 객체의 name 프로퍼티는 "Alice"여야 한다.', () => {
    expect(person.name).toBe("Alice");
  });

  it("person 객체의 age 프로퍼티는 25여야 한다.", () => {
    expect(person.age).toBe(25);
  });

  it("person 객체는 name, age 프로퍼티를 모두 가져야 한다.", () => {
    expect(person).toHaveProperty("name");
    expect(person).toHaveProperty("age");
  });
});
