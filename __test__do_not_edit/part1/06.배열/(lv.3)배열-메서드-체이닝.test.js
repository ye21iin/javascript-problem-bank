import { get20sEmail } from "../../../part1/06.배열/(lv.3)배열-메서드-체이닝.js";
import { jest } from "@jest/globals";

describe("(lv.3)[2]배열-메서드-체이닝.js 테스트", () => {
  it("filter, sort, map 메서드를 모두 사용해야 한다.", () => {
    const testArr = [
      { name: "Alice", age: 21, email: "alice@example.com" },
      { name: "Bob", age: 25, email: "bob@example.com" },
    ];

    const filterSpy = jest.spyOn(Array.prototype, "filter");
    const sortSpy = jest.spyOn(Array.prototype, "sort");
    const mapSpy = jest.spyOn(Array.prototype, "map");

    get20sEmail(testArr);

    expect(filterSpy).toHaveBeenCalled();
    expect(sortSpy).toHaveBeenCalled();
    expect(mapSpy).toHaveBeenCalled();

    filterSpy.mockRestore();
    sortSpy.mockRestore();
    mapSpy.mockRestore();
  });

  it("20대만 골라서 나이 오름차순으로 정렬 후, email만 뽑아야 한다.", () => {
    const input = [
      { name: "Charlie", age: 30, email: "charlie@example.com" },
      { name: "Alice", age: 21, email: "alice@example.com" },
      { name: "Bob", age: 25, email: "bob@example.com" },
      { name: "David", age: 18, email: "david@example.com" },
    ];

    const result = get20sEmail(input);
    // 20대는 Alice(21), Bob(25)
    // 오름차순 -> Alice -> Bob
    expect(result).toEqual(["alice@example.com", "bob@example.com"]);
  });

  it("20대가 없으면 빈 배열을 반환해야 한다.", () => {
    const input = [
      { name: "Eve", age: 30, email: "eve@example.com" },
      { name: "Frank", age: 19, email: "frank@example.com" },
    ];
    expect(get20sEmail(input)).toEqual([]);
  });

  it("빈 배열이면 빈 배열을 반환해야 한다.", () => {
    const input = [];
    expect(get20sEmail(input)).toEqual([]);
  });
});
