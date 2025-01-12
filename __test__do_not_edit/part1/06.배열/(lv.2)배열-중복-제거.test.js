import { getUniqueElements } from "../../../part1/06.배열/(lv.2)배열-중복-제거.js";

describe("(lv.2)배열-중복-제거.js 테스트", () => {
  it("숫자 배열에서 중복이 제거되어야 한다.", () => {
    const arr = [1, 2, 2, 3, 3, 3];
    expect(getUniqueElements(arr)).toEqual([1, 2, 3]);
  });

  it("문자열이 섞인 배열에서도 중복이 제거되어야 한다.", () => {
    const arr = ["a", "b", "a", "c", "b"];
    expect(getUniqueElements(arr)).toEqual(["a", "b", "c"]);
  });

  it("빈 배열을 입력하면 빈 배열을 반환해야 한다.", () => {
    expect(getUniqueElements([])).toEqual([]);
  });

  it("하나의 요소만 있는 배열은 그대로 반환해야 한다.", () => {
    expect(getUniqueElements([42])).toEqual([42]);
  });

  it("모든 요소가 같은 경우, 길이가 1인 배열이 되어야 한다.", () => {
    expect(getUniqueElements(["x", "x", "x"])).toEqual(["x"]);
  });
});
