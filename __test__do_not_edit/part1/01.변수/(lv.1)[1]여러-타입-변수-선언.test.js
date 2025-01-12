import {
  num,
  str,
  bool,
  arr,
  obj,
  undef,
  nul,
} from "../../../part1/01.변수/(lv.1)[1]여러-타입-변수-선언.js";

describe("여러-타입-변수-선언.js 테스트", () => {
  it("num 변수는 number 타입이어야 합니다.", () => {
    expect(typeof num).toBe("number");
  });

  it("str 변수는 string 타입이어야 합니다.", () => {
    expect(typeof str).toBe("string");
  });

  it("bool 변수는 boolean 타입이어야 합니다.", () => {
    expect(typeof bool).toBe("boolean");
  });

  it("arr 변수는 배열 타입이어야 합니다.", () => {
    expect(Array.isArray(arr)).toBe(true);
  });

  it("obj 변수는 object 타입이어야 합니다.", () => {
    expect(obj).not.toBeNull();
    expect(typeof obj).toBe("object");
  });

  it("undef 변수는 undefined 타입이어야 합니다.", () => {
    expect(typeof undef).toBe("undefined");
  });

  it("nul 변수는 null이어야 합니다.", () => {
    expect(nul).toBeNull();
  });
});
