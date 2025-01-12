import { calculateStatistics } from "../../../part2/02.배열/(lv.3)나이-통계-구하기.js";
import { jest } from "@jest/globals";

describe("(lv.3)나이-통계-구하기.js 테스트", () => {
  it("빈 배열을 전달하면 averageAge와 maxAge가 0이어야 한다.", () => {
    const result = calculateStatistics([]);
    expect(result.averageAge).toBe(0);
    expect(result.maxAge).toBe(0);
  });

  it("배열에 나이가 하나만 들어 있으면 그 값이 averageAge와 maxAge가 되어야 한다.", () => {
    const users = [{ age: 25 }];
    const result = calculateStatistics(users);
    expect(result.averageAge).toBe(25);
    expect(result.maxAge).toBe(25);
  });

  it("나이가 여러 개일 때, 평균과 최대를 올바르게 계산해야 한다.", () => {
    const users = [{ age: 10 }, { age: 30 }, { age: 20 }];
    const result = calculateStatistics(users);
    expect(result.averageAge).toBe(20);
    expect(result.maxAge).toBe(30);
  });

  it("나이가 음수인 경우도 합산과 최대값이 정확히 계산되어야 한다.", () => {
    const users = [{ age: -10 }, { age: 20 }, { age: 30 }];
    const result = calculateStatistics(users);
    expect(result.averageAge).toBeCloseTo(13.3333, 4);
    expect(result.maxAge).toBe(30);
  });

  it("모두 음수일 때도 평균과 최대를 올바르게 반환해야 한다.", () => {
    const users = [{ age: -5 }, { age: -10 }, { age: -15 }];
    const result = calculateStatistics(users);
    expect(result.averageAge).toBe(-10);
    expect(result.maxAge).toBe(-5);
  });

  it("값 중 하나가 Number.NEGATIVE_INFINITY일 때도 올바르게 반환해야 한다.", () => {
    const users = [
      { age: Number.NEGATIVE_INFINITY },
      {
        age: -20,
      },
      { age: 0 },
    ];
    const result = calculateStatistics(users);
    expect(result.maxAge).toBe(0);
  });

  it("모든 나이가 같으면 averageAge와 maxAge는 동일해야 한다.", () => {
    const users = [{ age: 30 }, { age: 30 }, { age: 30 }];
    const result = calculateStatistics(users);
    expect(result.averageAge).toBe(30);
    expect(result.maxAge).toBe(30);
  });

  // reduce 메서드를 사용했는지 확인합니다.
  it("reduce 메서드를 사용해야 한다.", () => {
    const spy = jest.spyOn(Array.prototype, "reduce");
    const users = [{ age: 10 }, { age: 20 }, { age: 30 }];
    calculateStatistics(users);
    expect(spy).toBeCalled();
    spy.mockRestore();
  });
});
