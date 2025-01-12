import { chunkArray } from "../../../part2/02.배열/(lv.3)chunk.js";

describe("(lv.3)chunk.js 테스트", () => {
  it("주어진 크기로 배열을 나누어 2차원 배열을 반환해야 한다.", () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 2;
    const result = chunkArray(arr, size);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("배열 길이가 덩어리 크기의 배수일 경우 모든 덩어리가 동일한 크기를 가져야 한다.", () => {
    const arr = [1, 2, 3, 4];
    const size = 2;
    const result = chunkArray(arr, size);
    expect(result).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it("덩어리 크기가 1이면 각 원소가 개별 배열로 나뉘어야 한다.", () => {
    const arr = [1, 2, 3];
    const size = 1;
    const result = chunkArray(arr, size);
    expect(result).toEqual([[1], [2], [3]]);
  });

  it("빈 배열을 전달하면 빈 배열을 반환해야 한다.", () => {
    const arr = [];
    const size = 3;
    const result = chunkArray(arr, size);
    expect(result).toEqual([]);
  });

  it("덩어리 크기가 배열 길이보다 크면 전체 배열을 하나의 덩어리로 반환해야 한다.", () => {
    const arr = [1, 2, 3];
    const size = 5;
    const result = chunkArray(arr, size);
    expect(result).toEqual([[1, 2, 3]]);
  });
});
