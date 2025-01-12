import { createCounter } from "../../../part1/08.클로저/(lv.2)카운터-함수-만들기.js";

describe("(lv.2)카운터-함수-만들기.js 테스트", () => {
  it("createCounter 함수는 객체를 반환해야 한다.", () => {
    const counter = createCounter();
    expect(typeof counter).toBe("object");
  });

  it("객체는 increase, decrease, currentValue 메서드를 모두 가져야 한다.", () => {
    const counter = createCounter();
    expect(typeof counter.increase).toBe("function");
    expect(typeof counter.decrease).toBe("function");
    expect(typeof counter.currentValue).toBe("function");
  });

  it("increase 메서드는 count를 1 증가시켜야 한다.", () => {
    const counter = createCounter();
    counter.increase();
    expect(counter.currentValue()).toBe(1);
    counter.increase();
    expect(counter.currentValue()).toBe(2);
  });

  it("decrease 메서드는 count를 1 감소시켜야 한다.", () => {
    const counter = createCounter();
    counter.decrease();
    expect(counter.currentValue()).toBe(-1);
    counter.decrease();
    expect(counter.currentValue()).toBe(-2);
  });

  it("여러 번 호출해도 count 값이 유지되어야 한다.", () => {
    const counter = createCounter();
    counter.increase();
    counter.increase();
    counter.decrease();
    expect(counter.currentValue()).toBe(1);
  });
});
