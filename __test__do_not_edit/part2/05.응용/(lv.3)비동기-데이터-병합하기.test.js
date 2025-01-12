import { asyncDataMerger } from "../../../part2/05.응용/(lv.3)비동기-데이터-병합하기.js";

describe("(lv.3)비동기-데이터-병합하기.js 테스트", () => {
  it("단일 비동기 함수에서 반환된 배열만 병합하면 동일한 결과가 나와야 한다.", async () => {
    const fnA = async () => [
      { id: 1, name: "Alice" },
      { id: 2, age: 20 },
    ];
    const result = await asyncDataMerger(fnA);
    expect(result).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, age: 20 },
    ]);
  });

  it("여러 비동기 함수가 반환한 객체들을 id 기준으로 병합해야 한다.", async () => {
    const fnA = async () => [
      { id: 1, name: "Alice" },
      { id: 2, age: 20 },
    ];
    const fnB = async () => [
      { id: 1, age: 25 },
      { id: 3, gender: "F" },
    ];
    const result = await asyncDataMerger(fnA, fnB);
    expect(result).toEqual([
      { id: 1, name: "Alice", age: 25 },
      { id: 2, age: 20 },
      { id: 3, gender: "F" },
    ]);
  });

  it("나중에 도착한 데이터가 우선 덮어써야 한다.", async () => {
    const fnA = async () => [
      { id: 1, value: "A1" },
      { id: 2, value: "A2" },
    ];
    const fnB = async () => [
      { id: 1, value: "B1" },
      { id: 3, value: "B3" },
    ];
    // 기대: id=1 은 B1으로 덮어씀
    const result = await asyncDataMerger(fnA, fnB);
    expect(result).toEqual([
      { id: 1, value: "B1" },
      { id: 2, value: "A2" },
      { id: 3, value: "B3" },
    ]);
  });

  it("최종 배열은 id 오름차순으로 정렬되어야 한다.", async () => {
    const fnX = async () => [
      { id: 10, item: "X10" },
      { id: 5, item: "X5" },
    ];
    const fnY = async () => [
      { id: 7, item: "Y7" },
      { id: 1, item: "Y1" },
    ];
    const result = await asyncDataMerger(fnX, fnY);
    expect(result.map((obj) => obj.id)).toEqual([1, 5, 7, 10]);
  });
});
