import { makeState } from "../../../part2/04.클로저/(lv.3)state-함수.js";

describe("(lv.3)state-함수.js 테스트", () => {
  it("초기 상태를 정확히 반환해야 한다.", () => {
    const [count] = makeState(0);
    expect(count).toBe(0);
  });

  it("상태를 업데이트하면 새로운 값으로 변경되어야 한다.", () => {
    const [count, setCount] = makeState(5);
    expect(count).toBe(5);
    const updated = setCount(10);
    expect(updated).toBe(10);
  });

  it("여러 번 연속 업데이트도 정상 동작해야 한다.", () => {
    const [value, setValue] = makeState("start");
    setValue("middle");
    const finalValue = setValue("end");
    expect(finalValue).toBe("end");
  });

  it("객체 상태도 정상적으로 업데이트되어야 한다.", () => {
    const initialObj = { a: 1 };
    const [obj, setObj] = makeState(initialObj);
    expect(obj).toEqual({ a: 1 });
    const updatedObj = setObj({ a: 2, b: 3 });
    expect(updatedObj).toEqual({ a: 2, b: 3 });
  });
});
