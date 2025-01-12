import { pickKeys } from "../../../part2/05.응용/(lv.3)지정된-key-추출하기.js";

describe("(lv.3)지정된-key-추출하기.js 테스트", () => {
  it("지정된 key만 추출해서 새 객체를 반환해야 한다.", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = ["b", "c"];
    const result = pickKeys(obj, keys);
    expect(result).toEqual({ b: 2, c: 3 });
  });

  it("존재하지 않는 key는 무시해야 한다.", () => {
    const obj = { x: 10, y: 20 };
    const keys = ["y", "z"];
    const result = pickKeys(obj, keys);
    expect(result).toEqual({ y: 20 });
  });

  it("키 배열이 비어있으면 빈 객체를 반환해야 한다.", () => {
    const obj = { m: 100, n: 200 };
    const keys = [];
    const result = pickKeys(obj, keys);
    expect(result).toEqual({});
  });

  it("obj에 key가 하나도 없을 때도 올바르게 동작해야 한다.", () => {
    const obj = {};
    const keys = ["a", "b"];
    const result = pickKeys(obj, keys);
    expect(result).toEqual({});
  });

  it("원본 객체에 없는 key는 결과 객체에 없어야 한다.", () => {
    const obj = { a: 1 };
    const keys = ["a", "b", "c"];
    const result = pickKeys(obj, keys);
    expect(result).toEqual({ a: 1 });
  });
});
