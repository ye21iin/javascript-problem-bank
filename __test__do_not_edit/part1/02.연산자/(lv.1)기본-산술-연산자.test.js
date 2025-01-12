import {
  add,
  subtract,
  multiply,
  divide,
} from "../../../part1/02.연산자/(lv.1)기본-산술-연산자.js";

describe("(lv.1)[2]기본-산술-연산자.js 테스트", () => {
  it("add 변수는 10이어야 합니다.", () => {
    expect(add).toBe(10);
  });

  it("subtract 변수는 10이어야 합니다.", () => {
    expect(subtract).toBe(10);
  });

  it("multiply 변수는 10이어야 합니다.", () => {
    expect(multiply).toBe(10);
  });

  it("divide 변수는 10이어야 합니다.", () => {
    expect(divide).toBe(10);
  });
});
