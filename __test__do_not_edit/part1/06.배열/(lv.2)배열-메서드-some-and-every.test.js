import {
  hasNegative,
  allPositive,
} from "../../../part1/06.배열/(lv.2)배열-메서드-some-and-every.js";
import { describe, jest } from "@jest/globals";

describe("(lv.2)배열-메서드-some-and-every.js 테스트", () => {
  describe("hasNegative 함수", () => {
    it("hasNegative 함수는 some 메서드를 사용해야 한다.", () => {
      const someSpy = jest.spyOn(Array.prototype, "some");
      hasNegative([1, -2, 3]);
      expect(someSpy).toHaveBeenCalled();
      someSpy.mockRestore();
    });

    it("배열에 음수가 하나라도 있으면 hasNegative 함수는 true를 반환해야 한다.", () => {
      const arr = [1, -2, 3];
      expect(hasNegative(arr)).toBe(true);
    });

    it("배열에 음수가 없으면 hasNegative 함수는 false를 반환해야 한다.", () => {
      const arr = [1, 2, 3];
      expect(hasNegative(arr)).toBe(false);
    });

    it("배열이 비어있으면 hasNegative 함수는 false를 반환해야 한다.", () => {
      const arr = [];
      expect(hasNegative(arr)).toBe(false);
    });

    it("모든 요소가 음수여도 hasNegative 함수는 true를 반환해야 한다.", () => {
      const arr = [-1, -2, -3];
      expect(hasNegative(arr)).toBe(true);
    });
  });

  describe("allPositive 함수", () => {
    it("allPositive 함수는 every 메서드를 사용해야 한다.", () => {
      const everySpy = jest.spyOn(Array.prototype, "every");
      allPositive([1, 2, 3]);
      expect(everySpy).toHaveBeenCalled();
      everySpy.mockRestore();
    });

    it("모든 요소가 양수이면 allPositive 함수는 true를 반환해야 한다.", () => {
      const arr = [1, 2, 3];
      expect(allPositive(arr)).toBe(true);
    });

    it("하나라도 0 이하의 숫자가 있으면 allPositive 함수는 false를 반환해야 한다.", () => {
      const arr = [1, 0, 2];
      expect(allPositive(arr)).toBe(false);
    });

    it("배열이 비어있으면 allPositive 함수는 true를 반환해야 한다.", () => {
      const arr = [];
      expect(allPositive(arr)).toBe(true);
    });

    it("음수가 하나라도 있으면 allPositive 함수는 false를 반환해야 한다.", () => {
      const arr = [1, -2, 3];
      expect(allPositive(arr)).toBe(false);
    });
  });
});
