import { formatDate } from "../../../part2/05.응용/(lv.3)날짜-포맷팅-하기.js";

describe("(lv.3)날짜-포맷팅-하기.js 테스트", () => {
  it("Date 객체를 'YYYY년 MM월 DD일 HH시 mm분' 형태로 포맷해야 한다.", () => {
    const testDate = new Date("2021-01-01T01:01:01.000Z");
    const result = formatDate(testDate);
    expect(result).toBe("2021년 01월 01일 10시 01분");
  });

  it("한 자리 수 월, 일, 시, 분은 0을 붙여야 한다.", () => {
    const date = new Date(2021, 0, 1, 1, 5);
    const result = formatDate(date);
    expect(result).toBe("2021년 01월 01일 01시 05분");
  });

  it("연도, 월, 일, 시, 분이 모두 두 자리 이상인 경우에도 정상 작동해야 한다.", () => {
    const date = new Date(2021, 9, 12, 15, 45);
    // → 2021-10-12 15:45 (로컬)
    const result = formatDate(date);
    expect(result).toBe("2021년 10월 12일 15시 45분");
  });

  it("월이 12월, 시가 23시(두 자리) 등 경계값도 테스트한다.", () => {
    const date = new Date(2021, 11, 25, 23, 59);
    // → 2021-12-25 23:59 (로컬)
    const result = formatDate(date);
    expect(result).toBe("2021년 12월 25일 23시 59분");
  });
});
