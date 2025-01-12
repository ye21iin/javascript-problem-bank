import { simpleClosure } from "../../../part1/08.클로저/(lv.2)기본-클로저.js";

describe("(lv.2)기본-클로저.js 테스트", () => {
  it("simpleClosure 함수는 내부 함수를 반환해야 한다.", () => {
    const result = simpleClosure();
    expect(typeof result).toBe("function");
  });

  it("반환된 내부 함수를 실행하면 'Hello Closure!'를 반환해야 한다.", () => {
    const result = simpleClosure();
    expect(result()).toBe("Hello Closure!");
  });
});
