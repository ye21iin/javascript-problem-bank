import { getObjectKeys } from "../../../part1/05.객체/(lv.2)객체-메서드-Keys.js";

describe("(lv.2)객체-메서드-Keys.js 테스트", () => {
  it("name과 age 키를 가진 객체를 전달하면 ['name', 'age'] 배열을 반환해야 한다.", () => {
    const obj = { name: "Alice", age: 25 };
    expect(getObjectKeys(obj)).toEqual(["name", "age"]);
  });

  it("빈 객체를 전달하면 빈 배열을 반환해야 한다.", () => {
    const emptyObj = {};
    expect(getObjectKeys(emptyObj)).toEqual([]);
  });

  it("여러 개의 프로퍼티를 가진 객체를 전달해도 모든 키를 배열로 반환해야 한다.", () => {
    const multiObj = { a: 1, b: 2, c: 3 };
    expect(getObjectKeys(multiObj)).toEqual(["a", "b", "c"]);
  });
});
