import { transformData } from "../../../part2/02.배열/(lv.3)데이터-변환-파이프라인.js";

describe("(lv.3)데이터-변환-파이프라인.js 테스트", () => {
  it("주어진 예시에 맞게 변환해야 한다.", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = transformData(numbers, 40);
    expect(result).toEqual([36, 16, 4]);
  });

  it("빈 배열을 입력하면 빈 배열을 반환해야 한다.", () => {
    const result = transformData([], 100);
    expect(result).toEqual([]);
  });

  it("짝수가 하나도 없으면 결과가 빈 배열이어야 한다.", () => {
    const numbers = [1, 3, 5, 7, 9];
    const result = transformData(numbers, 50);
    expect(result).toEqual([]);
  });

  it("threshold가 매우 작으면, 모든 숫자가 제외될 수 있다.", () => {
    const numbers = [2, 4, 6];
    // 제곱 후 [4, 16, 36], threshold=1 이하 -> 모두 제외
    const result = transformData(numbers, 1);
    expect(result).toEqual([]);
  });

  it("내림차순 정렬이 올바르게 이루어져야 한다.", () => {
    const numbers = [10, 2, 8, 4];
    const result = transformData(numbers, 70);
    expect(result).toEqual([64, 16, 4]);
  });

  it("원본 배열은 변경되지 않아야 한다.", () => {
    const numbers = [2, 4, 6];
    const copy = [...numbers];
    transformData(numbers, 36);
    expect(numbers).toEqual(copy);
  });
});
