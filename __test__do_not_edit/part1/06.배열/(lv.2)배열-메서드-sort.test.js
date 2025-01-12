import { sortNumbers } from "../../../part1/06.배열/(lv.2)배열-메서드-sort.js";
import { jest } from "@jest/globals";

describe("(lv.2)배열-메서드-sort.js 테스트", () => {
  it("sort 메서드를 사용해야 한다.", () => {
    const sortSpy = jest.spyOn(Array.prototype, "sort");
    sortNumbers([3, 1, 2]);
    expect(sortSpy).toHaveBeenCalled();
    sortSpy.mockRestore();
  });

  it("원본 배열을 변경하지 않고, 오름차순으로 정렬된 새 배열을 반환해야 한다.", () => {
    const original = [3, 1, 2];
    const result = sortNumbers(original);
    expect(result).toEqual([1, 2, 3]);
    expect(original).toEqual([3, 1, 2]);
  });

  it("[5,4,3,2,1]을 입력하면 [1,2,3,4,5]를 반환해야 한다.", () => {
    expect(sortNumbers([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("음수가 포함된 배열도 올바르게 정렬해야 한다.", () => {
    expect(sortNumbers([0, -1, 5, -10, 2])).toEqual([-10, -1, 0, 2, 5]);
  });

  it("빈 배열이면 빈 배열을 반환해야 한다.", () => {
    expect(sortNumbers([])).toEqual([]);
  });
});
