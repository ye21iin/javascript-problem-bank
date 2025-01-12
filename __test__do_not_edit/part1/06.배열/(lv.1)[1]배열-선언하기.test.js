import { array } from "../../../part1/06.배열/(lv.1)[1]배열-선언하기.js";

describe("(lv.1)[1]배열-선언하기.js 테스트", () => {
  it("array 변수는 [1, 2, 3] 이어야 한다.", () => {
    expect(array).toEqual([1, 2, 3]);
  });

  it("array의 길이는 3이어야 한다.", () => {
    expect(array.length).toBe(3);
  });
});
