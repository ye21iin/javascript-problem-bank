import { subArray } from "../../../part1/06.배열/(lv.2)배열-메서드-slice.js";
import { jest } from "@jest/globals";

describe("(lv.2)배열-메서드-slice.js 테스트", () => {
  it("slice 메서드를 사용해야 한다.", () => {
    const sliceSpy = jest.spyOn(Array.prototype, "slice");
    subArray([1, 2, 3], 0, 2);
    expect(sliceSpy).toHaveBeenCalled();
    sliceSpy.mockRestore();
  });

  it("end가 주어지면 start부터 end 바로 전 요소까지를 잘라서 반환해야 한다.", () => {
    expect(subArray([1, 2, 3, 4, 5], 1, 3)).toEqual([2, 3]);
    expect(subArray(["a", "b", "c", "d"], 0, 2)).toEqual(["a", "b"]);
  });

  it("end가 주어지지 않으면 start부터 끝까지 잘라야 한다.", () => {
    expect(subArray([1, 2, 3, 4], 1)).toEqual([2, 3, 4]);
    expect(subArray(["x", "y", "z"], 0)).toEqual(["x", "y", "z"]);
  });

  it("start와 end가 모두 0이면 빈 배열을 반환해야 한다.", () => {
    expect(subArray([1, 2, 3], 0, 0)).toEqual([]);
  });

  it("start가 배열 길이보다 크거나 같으면 빈 배열을 반환해야 한다.", () => {
    expect(subArray([1, 2, 3], 3)).toEqual([]);
    expect(subArray([1, 2, 3], 4, 5)).toEqual([]);
  });
});
