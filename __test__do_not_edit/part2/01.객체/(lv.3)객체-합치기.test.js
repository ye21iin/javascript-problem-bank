import { mergeObjects } from "../../../part2/01.객체/(lv.3)객체-합치기.js";

describe("(lv.3)객체-우선순위-병합.js 테스트", () => {
  it("빈 객체만 주어지면 빈 객체를 반환해야 한다.", () => {
    expect(mergeObjects({})).toEqual({});
  });

  it("객체 하나만 주어지면 동일한 객체 내용을 가진 새 객체를 반환해야 한다.", () => {
    const obj = { x: 10 };
    const result = mergeObjects(obj);
    expect(result).toEqual({ x: 10 });
    expect(result).not.toBe(obj);
  });

  it("두 개 이상의 객체에서 중복된 키가 있으면, 뒤쪽 객체의 값이 우선한다.", () => {
    const a = { x: 1, y: 2 };
    const b = { y: 3, z: 4 };
    const c = { x: 99 };
    const result = mergeObjects(a, b, c);
    expect(result).toEqual({ x: 99, y: 3, z: 4 });
  });

  it("원본 객체들은 변경되지 않아야 한다.", () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 2, b: 3 };
    const merged = mergeObjects(obj1, obj2);
    expect(obj1).toEqual({ a: 1 });
    expect(obj2).toEqual({ a: 2, b: 3 });
    expect(merged).toEqual({ a: 2, b: 3 });
  });

  it("얕은 복사만 수행하므로, 중첩된 객체는 참조가 그대로 복사된다.", () => {
    const nested = { num: 100 };
    const obj1 = { x: nested };
    const obj2 = { y: nested };
    const result = mergeObjects(obj1, obj2);
    expect(result).toEqual({ x: nested, y: nested });
    nested.num = 999;
    expect(result.x.num).toBe(999);
    expect(result.y.num).toBe(999);
  });
});
