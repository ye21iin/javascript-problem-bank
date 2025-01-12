import { rotateMatrix } from "../../../part2/02.배열/(lv.4)행렬-뒤집기.js";

describe("(lv.4)행렬-뒤집기.js 테스트", () => {
  it("3x3 배열을 90도 회전해야 한다.", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = rotateMatrix(matrix);
    expect(result).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  it("원본 배열이 변경되지 않아야 한다.", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const copy = JSON.parse(JSON.stringify(matrix));
    rotateMatrix(matrix);
    expect(matrix).toEqual(copy);
  });

  it("1x1 배열은 그대로 반환해야 한다.", () => {
    const matrix = [[42]];
    const result = rotateMatrix(matrix);
    expect(result).toEqual([[42]]);
  });

  it("비어있는 배열이 주어지면 비어있는 배열을 반환해야 한다.", () => {
    const matrix = [];
    const result = rotateMatrix(matrix);
    expect(result).toEqual([]);
  });

  it("4x4 배열도 올바르게 회전해야 한다.", () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const result = rotateMatrix(matrix);
    expect(result).toEqual([
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ]);
  });
});
