import {
  filterEven,
  filterOdd,
} from "../../../part1/06.배열/(lv.2)배열-메서드-filter.js";

describe("(lv.2)배열-메서드-filter.js 테스트", () => {
  describe("filterEven 함수 테스트", () => {
    it("짝수만 포함된 새 배열을 반환해야 합니다.", () => {
      const input = [1, 2, 3, 4, 5, 6];
      const expectedOutput = [2, 4, 6];
      expect(filterEven(input)).toEqual(expectedOutput);
    });

    it("빈 배열을 입력하면 빈 배열을 반환해야 합니다.", () => {
      expect(filterEven([])).toEqual([]);
    });
  });

  describe("filterOdd 함수 테스트", () => {
    it("홀수만 포함된 새 배열을 반환해야 합니다.", () => {
      const input = [1, 2, 3, 4, 5, 6];
      const expectedOutput = [1, 3, 5];
      expect(filterOdd(input)).toEqual(expectedOutput);
    });

    it("빈 배열을 입력하면 빈 배열을 반환해야 합니다.", () => {
      expect(filterOdd([])).toEqual([]);
    });
  });
});
