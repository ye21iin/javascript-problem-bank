import { reverseArray } from "../../../part1/06.배열/(lv.2)배열-메서드-reverse.js";
import { jest } from "@jest/globals";

describe("(lv.2)[3]배열-메서드-reverse.js 테스트", () => {
  it("reverse 메서드를 사용해야 한다.", () => {
    const reverseSpy = jest.spyOn(Array.prototype, "reverse");
    reverseArray([1, 2, 3]);
    expect(reverseSpy).toHaveBeenCalled();
    reverseSpy.mockRestore();
  });

  it("원본 배열을 변경하지 않고, 뒤집힌 새로운 배열을 반환해야 한다.", () => {
    const original = [1, 2, 3];
    const result = reverseArray(original);
    expect(result).toEqual([3, 2, 1]);
    expect(original).toEqual([1, 2, 3]);
  });

  it("빈 배열을 입력하면 빈 배열을 반환해야 한다.", () => {
    const result = reverseArray([]);
    expect(result).toEqual([]);
  });

  it("문자열이 섞여 있어도 올바르게 뒤집어야 한다.", () => {
    const mixed = [1, "a", 2, "b"];
    const result = reverseArray(mixed);
    expect(result).toEqual(["b", 2, "a", 1]);
  });
});
