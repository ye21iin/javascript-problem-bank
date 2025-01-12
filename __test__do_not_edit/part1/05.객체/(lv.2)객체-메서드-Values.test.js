import { getObjectValues } from "../../../part1/05.객체/(lv.2)객체-메서드-Values.js";

describe("(lv.2)객체-메서드-Values.js 테스트", () => {
  it("name과 age 값이 있는 객체를 전달하면 ['Alice', 25] 배열을 반환해야 한다.", () => {
    const obj = { name: "Alice", age: 25 };
    expect(getObjectValues(obj)).toEqual(["Alice", 25]);
  });

  it("빈 객체를 전달하면 빈 배열을 반환해야 한다.", () => {
    const emptyObj = {};
    expect(getObjectValues(emptyObj)).toEqual([]);
  });

  it("여러 개의 프로퍼티를 가진 객체를 전달해도 모든 값을 배열로 반환해야 한다.", () => {
    const multiObj = { a: 1, b: 2, c: 3 };
    expect(getObjectValues(multiObj)).toEqual([1, 2, 3]);
  });
});
