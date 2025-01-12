import {
  array,
  newArray,
} from "../../../part1/06.배열/(lv.1)[2]배열-복사하기.js";

describe("(lv.1)[2]배열-복사하기.js 테스트", () => {
  it("newArray는 array와 같은 참조를 가지지 않아야 합니다.", () => {
    expect(newArray).not.toBe(array);
  });

  it("newArray는 [1, 2, 3, 4] 이어야 합니다.", () => {
    expect(newArray).toEqual([1, 2, 3, 4]);
  });

  it("array는 원래 배열 [1, 2, 3]을 유지해야 합니다.", () => {
    expect(array).toEqual([1, 2, 3]);
  });
});
