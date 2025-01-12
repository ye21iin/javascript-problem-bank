import { groupBy } from "../../../part2/02.배열/(lv.4)group-by.js";
import { jest } from "@jest/globals";

describe("(lv.4)group-by.js 테스트", () => {
  it("주어진 키에 따라 객체들을 올바르게 그룹화해야 합니다.", () => {
    const data = [
      { name: "Alice", group: "A" },
      { name: "Bob", group: "B" },
      { name: "Charlie", group: "A" },
    ];
    const result = groupBy(data, "group");
    expect(result).toEqual({
      A: [
        { name: "Alice", group: "A" },
        { name: "Charlie", group: "A" },
      ],
      B: [{ name: "Bob", group: "B" }],
    });
  });

  it("빈 배열을 전달하면 빈 객체을 반환해야 합니다.", () => {
    const data = [];
    const result = groupBy(data, "group");
    expect(result).toEqual({});
  });

  it("지정한 키가 객체에 존재하지 않으면 undefined 키로 그룹화해야 합니다.", () => {
    const data = [
      { name: "Alice", group: "A" },
      { name: "Bob" },
      { name: "Charlie", group: "A" },
      { name: "David" },
    ];
    const result = groupBy(data, "group");
    expect(result).toEqual({
      A: [
        { name: "Alice", group: "A" },
        { name: "Charlie", group: "A" },
      ],
      undefined: [{ name: "Bob" }, { name: "David" }],
    });
  });

  it("모든 객체가 동일한 키 값을 가질 경우 하나의 그룹만 반환해야 합니다.", () => {
    const data = [
      { name: "Alice", category: "X" },
      { name: "Bob", category: "X" },
      { name: "Charlie", category: "X" },
    ];
    const result = groupBy(data, "category");
    expect(result).toEqual({
      X: [
        { name: "Alice", category: "X" },
        { name: "Bob", category: "X" },
        { name: "Charlie", category: "X" },
      ],
    });
  });

  it("키의 값이 다양한 타입일 때 올바르게 그룹화해야 합니다.", () => {
    const data = [
      { name: "Alice", active: true },
      { name: "Bob", active: false },
      { name: "Charlie", active: true },
      { name: "David", active: null },
    ];
    const result = groupBy(data, "active");
    expect(result).toEqual({
      true: [
        { name: "Alice", active: true },
        { name: "Charlie", active: true },
      ],
      false: [{ name: "Bob", active: false }],
      null: [{ name: "David", active: null }],
    });
  });

  it("키의 값이 숫자일 때 올바르게 그룹화해야 합니다.", () => {
    const data = [
      { name: "Alice", score: 90 },
      { name: "Bob", score: 80 },
      { name: "Charlie", score: 90 },
      { name: "David", score: 70 },
    ];
    const result = groupBy(data, "score");
    expect(result).toEqual({
      90: [
        { name: "Alice", score: 90 },
        { name: "Charlie", score: 90 },
      ],
      80: [{ name: "Bob", score: 80 }],
      70: [{ name: "David", score: 70 }],
    });
  });

  it("reduce 메서드를 사용해야 합니다.", () => {
    const reduceSpy = jest.spyOn(Array.prototype, "reduce");
    const data = [
      { name: "Alice", group: "A" },
      { name: "Bob", group: "B" },
      { name: "Charlie", group: "A" },
    ];
    groupBy(data, "group");
    expect(reduceSpy).toHaveBeenCalled();
  });
});
