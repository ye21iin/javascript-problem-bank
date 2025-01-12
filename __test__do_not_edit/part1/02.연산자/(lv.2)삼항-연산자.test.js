import { ternaryOperator } from "../../../part1/02.연산자/(lv.2)삼항-연산자.js";

describe("(lv.2)삼항-연산자.js 테스트", () => {
  it("나이 15는 '10대'여야 한다.", () => {
    expect(ternaryOperator(15)).toBe("10대");
  });
  it("나이 10은 '10대'여야 한다.", () => {
    expect(ternaryOperator(10)).toBe("10대");
  });
  it("나이 19는 '10대'여야 한다.", () => {
    expect(ternaryOperator(19)).toBe("10대");
  });
  it("나이 20은 '20대'여야 한다.", () => {
    expect(ternaryOperator(20)).toBe("20대");
  });
  it("나이 25는 '20대'여야 한다.", () => {
    expect(ternaryOperator(25)).toBe("20대");
  });
  it("나이 30은 '30대'여야 한다.", () => {
    expect(ternaryOperator(30)).toBe("30대");
  });
  it("나이 35는 '30대'여야 한다.", () => {
    expect(ternaryOperator(35)).toBe("30대");
  });
  it("나이 40은 조건에 맞지 않아야 한다.", () => {
    expect(ternaryOperator(40)).not.toBe("10대");
    expect(ternaryOperator(40)).not.toBe("20대");
    expect(ternaryOperator(40)).not.toBe("30대");
  });
});
