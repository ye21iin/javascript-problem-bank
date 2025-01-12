// import {
//   square,
//   cube,
// } from "../../../part1/03.함수/(lv.1)[1]함수-선언과-표현식.js";
import { jest } from "@jest/globals";

describe("(lv.1)[1]함수-선언과-표현식.js 테스트", () => {
  let square, cube;
  beforeAll(async () => {
    try {
      const lazy = await import(
        "../../../part1/03.함수/(lv.1)[1]함수-선언과-표현식.js"
      );
      square = lazy.square;
      cube = lazy.cube;
    } catch (error) {
      square = cube = undefined;
    }
  });

  it("square(2)는 4를 반환해야 합니다.", () => {
    expect(square(2)).toBe(4);
  });
  it("square(3)는 9를 반환해야 합니다.", () => {
    expect(square(3)).toBe(9);
  });
  it("cube(2)는 8을 반환해야 합니다.", () => {
    expect(cube(2)).toBe(8);
  });
  it("cube(3)는 27을 반환해야 합니다.", () => {
    expect(cube(3)).toBe(27);
  });
});
