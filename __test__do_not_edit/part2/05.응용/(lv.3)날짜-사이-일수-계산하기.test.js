import { daysBetween } from "../../../part2/05.응용/(lv.3)날짜-사이-일수-계산하기.js";

describe("(lv.3)날짜-사이-일수-계산하기.js 테스트", () => {
  it("같은 날짜면 0을 반환해야 한다.", () => {
    expect(daysBetween("2025-01-01", "2025-01-01")).toBe(0);
  });

  it("날짜 차이가 정확히 계산되어야 한다.", () => {
    expect(daysBetween("2025-01-01", "2025-01-05")).toBe(4);
    expect(daysBetween("2023-12-31", "2024-01-02")).toBe(2);
  });

  it("순서가 바뀌어도 절댓값으로 계산되어야 한다.", () => {
    expect(daysBetween("2025-01-10", "2025-01-08")).toBe(2);
    expect(daysBetween("2025-01-08", "2025-01-10")).toBe(2);
  });

  it("연도가 다른 경우도 올바르게 계산되어야 한다.", () => {
    expect(daysBetween("2024-12-31", "2025-01-01")).toBe(1);
    expect(daysBetween("2025-01-01", "2024-12-31")).toBe(1);
    expect(daysBetween("2023-01-01", "2024-12-31")).toBe(730);
  });
});
