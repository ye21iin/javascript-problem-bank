import { squareElements } from "../../../part1/06.배열/(lv.2)배열-메서드-map.js";
import { jest } from "@jest/globals";

describe("(lv.2)배열-메서드-map.js 테스트", () => {
  it("배열의 각 원소를 제곱한 새 배열을 반환해야 한다.", () => {
    expect(squareElements([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
  });

  it("빈 배열을 입력하면 빈 배열을 반환해야 한다.", () => {
    expect(squareElements([])).toEqual([]);
  });

  it("음수가 포함된 배열도 올바르게 제곱해야 한다.", () => {
    expect(squareElements([-1, -2, -3])).toEqual([1, 4, 9]);
  });

  it("map 메서드를 사용하여 구현해야 한다.", () => {
    const mapSpy = jest.spyOn(Array.prototype, "map");
    squareElements([1, 2, 3, 4]);
    expect(mapSpy).toHaveBeenCalled();
    mapSpy.mockRestore();
  });
});
