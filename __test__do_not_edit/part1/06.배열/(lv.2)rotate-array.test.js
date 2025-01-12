import { rotateArray } from "../../../part1/06.배열/(lv.2)rotate-array.js";

describe("(lv.3)[2]rotate-array.js 테스트", () => {
  it("[1, 2, 3]을 전달하면 [3, 1, 2]를 반환해야 한다.", () => {
    expect(rotateArray([1, 2, 3])).toEqual([3, 1, 2]);
  });

  it("[10, 20, 30, 40]을 전달하면 [40, 10, 20, 30]을 반환해야 한다.", () => {
    expect(rotateArray([10, 20, 30, 40])).toEqual([40, 10, 20, 30]);
  });

  it("빈 배열을 전달하면 빈 배열을 반환해야 한다.", () => {
    expect(rotateArray([])).toEqual([]);
  });

  it("단일 요소 배열은 그대로 반환해야 한다.", () => {
    expect(rotateArray([7])).toEqual([7]);
  });
});
