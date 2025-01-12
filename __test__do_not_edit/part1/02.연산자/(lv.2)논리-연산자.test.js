import {
  num1GreaterThan,
  num2GreaterThan,
  num1LessThan,
  num2LessThan,
  num1GreaterThanOrEqual,
  num2GreaterThanOrEqual,
  num1LessThanOrEqual,
  num2LessThanOrEqual,
  bothGreaterThan,
  bothLessThan,
  eitherGreaterThan,
  eitherLessThan,
} from "../../../part1/02.연산자/(lv.2)논리-연산자.js";

describe("(lv.2)논리-연산자.js 테스트", () => {
  it("num1GreaterThan은 false, num2GreaterThan은 true 이어야 한다.", () => {
    expect(num1GreaterThan).toBe(false);
    expect(num2GreaterThan).toBe(true);
  });

  it("num1LessThan은 false, num2LessThan은 false 이어야 한다.", () => {
    expect(num1LessThan).toBe(false);
    expect(num2LessThan).toBe(false);
  });

  it("num1GreaterThanOrEqual은 true, num2GreaterThanOrEqual은 true 이어야 한다.", () => {
    expect(num1GreaterThanOrEqual).toBe(true);
    expect(num2GreaterThanOrEqual).toBe(true);
  });

  it("num1LessThanOrEqual은 true, num2LessThanOrEqual은 false 이어야 한다.", () => {
    expect(num1LessThanOrEqual).toBe(true);
    expect(num2LessThanOrEqual).toBe(false);
  });

  it("bothGreaterThan은 false 이어야 한다.", () => {
    expect(bothGreaterThan).toBe(false);
  });

  it("bothLessThan은 false 이어야 한다.", () => {
    expect(bothLessThan).toBe(false);
  });

  it("eitherGreaterThan은 true 이어야 한다.", () => {
    expect(eitherGreaterThan).toBe(true);
  });

  it("eitherLessThan은 false 이어야 한다.", () => {
    expect(eitherLessThan).toBe(false);
  });
});
