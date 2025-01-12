import { sumArray } from "../../../part1/06.배열/(lv.2)배열-메서드-forEach.js";
import { jest } from "@jest/globals";

describe("(lv.2)배열-메서드-forEach.js 테스트", () => {
  it("빈 배열을 전달하면 0을 반환해야 한다.", () => {
    expect(sumArray([])).toBe(0);
  });

  it("[1, 2, 3]을 전달하면 6을 반환해야 한다.", () => {
    expect(sumArray([1, 2, 3])).toBe(6);
  });

  it("[10, -5, 15]을 전달하면 20을 반환해야 한다.", () => {
    expect(sumArray([10, -5, 15])).toBe(20);
  });

  it("[100]을 전달하면 100을 반환해야 한다.", () => {
    expect(sumArray([100])).toBe(100);
  });

  it("forEach 메서드를 사용하여 구현해야 한다.", () => {
    const forEachSpy = jest.spyOn(Array.prototype, "forEach");
    sumArray([1, 2, 3]);
    expect(forEachSpy).toHaveBeenCalled();
    forEachSpy.mockRestore();
  });
});
