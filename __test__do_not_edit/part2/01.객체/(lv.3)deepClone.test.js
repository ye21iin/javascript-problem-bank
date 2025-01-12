import { deepClone } from "../../../part2/01.객체/(lv.3)deepClone.js";

describe("(lv.3)deepClone.js 테스트", () => {
  it("객체의 중첩 프로퍼티를 깊은 복사해야 한다.", () => {
    const original = {
      a: 1,
      b: { x: 2, y: [10, 20] },
    };
    const cloned = deepClone(original);
    expect(cloned).not.toBe(original);
    expect(cloned.b).not.toBe(original.b);
    expect(cloned.b.y).not.toBe(original.b.y);

    cloned.b.x = 999;
    expect(original.b.x).toBe(2);

    cloned.b.y[0] = 777;
    expect(original.b.y[0]).toBe(10);
  });

  it("배열 안에 객체가 있어도 올바르게 복사해야 한다.", () => {
    const original = [1, { a: 2, b: 3 }, [4, 5, { c: 6 }]];
    const cloned = deepClone(original);
    expect(cloned).not.toBe(original);
    expect(cloned[1]).not.toBe(original[1]);
    expect(cloned[2]).not.toBe(original[2]);

    cloned[1].a = 999;
    expect(original[1].a).toBe(2);

    cloned[2][2].c = 777;
    expect(original[2][2].c).toBe(6);
  });
});
