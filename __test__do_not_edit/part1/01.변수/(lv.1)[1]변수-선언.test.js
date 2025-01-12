// import { x, y, z } from "../../../part1/01.변수/(lv.1)[1]변수-선언.js";
import { jest } from "@jest/globals";

describe("변수-선언.js 테스트", () => {
  let x, y, z;

  beforeAll(async () => {
    try {
      const lazy = await import("../../../part1/01.변수/(lv.1)[1]변수-선언.js");
      x = lazy.x;
      y = lazy.y;
      z = lazy.z;
    } catch (error) {
      x = y = z = undefined;
    }
  });

  it("x는 number 타입이어야 합니다.", () => {
    expect(typeof x).toBe("number");
  });

  it("y는 string 타입이어야 합니다.", () => {
    expect(typeof y).toBe("string");
  });

  it("z는 boolean 타입이어야 합니다.", () => {
    expect(typeof z).toBe("boolean");
  });

  it("x의 값은 42이어야 합니다.", () => {
    expect(x).toBe(42);
  });

  it('y의 값은 "Hello"이어야 합니다.', () => {
    expect(y).toBe("Hello");
  });

  it("z의 값은 true이어야 합니다.", () => {
    expect(z).toBe(true);
  });
});
