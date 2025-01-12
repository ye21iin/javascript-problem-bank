import { countProperties } from "../../../part1/05.객체/(lv.2)객체와-loop.js";

describe("(lv.2)객체와-loop.js 테스트", () => {
  it("빈 객체 {}를 입력하면 0을 반환해야 한다.", () => {
    expect(countProperties({})).toBe(0);
  });

  it("name 키만 있는 객체 { name: 'Alice' }를 입력하면 1을 반환해야 한다.", () => {
    expect(countProperties({ name: "Alice" })).toBe(1);
  });

  it("a, b, c 세 개의 키를 가진 객체를 입력하면 3을 반환해야 한다.", () => {
    const testObj = { a: 1, b: 2, c: 3 };
    expect(countProperties(testObj)).toBe(3);
  });
});
