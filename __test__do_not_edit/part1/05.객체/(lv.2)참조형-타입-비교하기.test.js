import {
  person,
  person2,
  isSame,
  expected,
  person3,
  isSame2,
  expected2,
} from "../../../part1/05.객체/(lv.2)참조형-타입-비교하기.js";

describe("(lv.2)참조형-타입-비교하기.js 테스트", () => {
  it("person2는 person의 name과 age를 가져야 한다.", () => {
    expect(person2.name).toBe(person.name);
    expect(person2.age).toBe(person.age);
  });
  it("person과 person2의 비교 결과와 expected 값이 일치해야 한다.", () => {
    expect(isSame).toBe(person === person2);
    expect(isSame).toBe(expected);
  });
  it("person3는 person과 동일한 참조여야 한다.", () => {
    expect(person3).toBe(person);
  });
  it("person과 person3의 비교 결과와 expected2 값이 일치해야 한다.", () => {
    expect(isSame2).toBe(person === person3);
    expect(isSame2).toBe(expected2);
  });
});
