import { normalizeData } from "../../../part2/05.응용/(lv.4)데이터-정규화.js";

describe("(lv.4)데이터-정규화.js 테스트", () => {
  it("빈 배열을 입력하면 byId는 빈 객체, allIds는 빈 배열이어야 한다.", () => {
    const result = normalizeData([]);
    expect(result).toEqual({ byId: {}, allIds: [] });
  });

  it("단일 항목이 주어지면 해당 항목의 id를 키로 하는 객체와, id가 담긴 배열을 반환해야 한다.", () => {
    const data = [{ id: 1, name: "A" }];
    const result = normalizeData(data);
    expect(result).toEqual({
      byId: {
        1: { id: 1, name: "A" },
      },
      allIds: [1],
    });
  });

  it("여러 항목이 주어지면 각각의 id를 키로 하는 객체 집합과, 해당 id 배열을 반환해야 한다.", () => {
    const data = [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
      { id: 3, name: "C" },
    ];
    const result = normalizeData(data);
    expect(result).toEqual({
      byId: {
        1: { id: 1, name: "A" },
        2: { id: 2, name: "B" },
        3: { id: 3, name: "C" },
      },
      allIds: [1, 2, 3],
    });
  });

  it("id가 섞여 있어도 입력 순서대로 allIds를 담아야 한다.", () => {
    const data = [
      { id: 10, name: "X" },
      { id: 5, name: "Y" },
      { id: 7, name: "Z" },
    ];
    const result = normalizeData(data);
    expect(result.allIds).toEqual([10, 5, 7]);
    expect(result.byId).toEqual({
      10: { id: 10, name: "X" },
      5: { id: 5, name: "Y" },
      7: { id: 7, name: "Z" },
    });
  });
});
