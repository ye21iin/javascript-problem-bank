import { obj, newObj } from "../../../part1/05.객체/(lv.1)[2]객체-복사하기.js";

describe("(lv.1)[2]객체-복사하기.js 테스트", () => {
  it("newObj는 obj와 같은 참조를 가지지 않아야 합니다.", () => {
    expect(newObj).not.toBe(obj);
  });

  it("newObj는 obj의 age보다 1 더 많아야 합니다.", () => {
    expect(newObj.age).toBe(obj.age + 1);
  });

  it("newObj의 나이를 제외한 다른 속성은 obj와 동일해야 합니다.", () => {
    const { age, ...restObj } = obj;
    const { age: newAge, ...restNewObj } = newObj;
    expect(restNewObj).toEqual(restObj);
  });
});
