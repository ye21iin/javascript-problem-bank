import { filterComplexData } from "../../../part2/05.응용/(lv.4)복잡한-데이터-필터링.js";

describe("(lv.4)복잡한-데이터-필터링.js 테스트", () => {
  it("조건이 없으면 전체 데이터를 반환해야 한다.", () => {
    const data = [
      { id: 1, tags: ["React"], info: { likes: 50, active: true } },
      { id: 2, tags: ["Node.js"], info: { likes: 10, active: false } },
    ];
    const result = filterComplexData(data, {});
    expect(result).toEqual(data);
  });

  it("단일 조건(tags)을 만족하는 데이터만 필터링해야 한다.", () => {
    const data = [
      {
        id: 1,
        tags: ["React", "JavaScript"],
        info: { likes: 100, active: true },
      },
      { id: 2, tags: ["Node.js"], info: { likes: 50, active: false } },
      { id: 3, tags: ["JavaScript"], info: { likes: 70, active: true } },
    ];
    const conditions = { tags: "JavaScript" };
    const result = filterComplexData(data, conditions);
    expect(result).toEqual([
      {
        id: 1,
        tags: ["React", "JavaScript"],
        info: { likes: 100, active: true },
      },
      { id: 3, tags: ["JavaScript"], info: { likes: 70, active: true } },
    ]);
  });

  it("중첩된 프로퍼티(info.active) 조건도 필터링해야 한다.", () => {
    const data = [
      { id: 1, tags: ["React"], info: { likes: 100, active: true } },
      { id: 2, tags: ["Node.js"], info: { likes: 50, active: false } },
      { id: 3, tags: ["JavaScript"], info: { likes: 80, active: true } },
    ];
    const conditions = { "info.active": true };
    const result = filterComplexData(data, conditions);
    expect(result).toEqual([
      { id: 1, tags: ["React"], info: { likes: 100, active: true } },
      { id: 3, tags: ["JavaScript"], info: { likes: 80, active: true } },
    ]);
  });

  it("여러 조건(tags + info.active)을 모두 만족해야 한다.", () => {
    const data = [
      {
        id: 1,
        tags: ["React", "JavaScript"],
        info: { likes: 100, active: true },
      },
      {
        id: 2,
        tags: ["Node.js", "TypeScript"],
        info: { likes: 50, active: false },
      },
      { id: 3, tags: ["JavaScript"], info: { likes: 70, active: true } },
      { id: 4, tags: ["React"], info: { likes: 10, active: false } },
    ];
    const conditions = { tags: "JavaScript", "info.active": true };
    const result = filterComplexData(data, conditions);
    expect(result).toEqual([
      {
        id: 1,
        tags: ["React", "JavaScript"],
        info: { likes: 100, active: true },
      },
      { id: 3, tags: ["JavaScript"], info: { likes: 70, active: true } },
    ]);
  });

  it("조건을 만족하는 데이터가 없으면 빈 배열을 반환해야 한다.", () => {
    const data = [
      { id: 1, tags: ["React"], info: { likes: 100, active: true } },
      { id: 2, tags: ["Node.js"], info: { likes: 50, active: false } },
    ];
    const conditions = { tags: "JavaScript" };
    const result = filterComplexData(data, conditions);
    expect(result).toEqual([]);
  });
});
