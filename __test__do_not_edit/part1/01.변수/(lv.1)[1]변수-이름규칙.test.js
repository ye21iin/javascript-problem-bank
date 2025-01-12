import { jest } from "@jest/globals";

describe("01.변수-이름규칙.js 테스트", () => {
  let ModuleFromProblem;
  beforeAll(async () => {
    try {
      ModuleFromProblem = await import(
        "../../../part1/01.변수/(lv.1)[1]변수-이름규칙.js"
      );
    } catch (error) {
      ModuleFromProblem = undefined;
    }
  });

  it("잘못된 변수 이름은 모듈에서 찾을 수 없어야 합니다.", () => {
    expect(ModuleFromProblem["1stVariable"]).toBeUndefined();
    expect(ModuleFromProblem["var"]).toBeUndefined();
  });
  it("유효한 변수 이름은 모듈에서 존재해야 합니다.", () => {
    if (typeof ModuleFromProblem._underscore !== "undefined") {
      expect(typeof ModuleFromProblem._underscore).not.toBe("undefined");
    }
    if (typeof ModuleFromProblem.$dollarSign !== "undefined") {
      expect(typeof ModuleFromProblem.$dollarSign).not.toBe("undefined");
    }
    if (typeof ModuleFromProblem.camelCase !== "undefined") {
      expect(typeof ModuleFromProblem.camelCase).not.toBe("undefined");
    }
  });
});
