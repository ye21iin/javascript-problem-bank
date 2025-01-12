import { loginCheck } from "../../../part1/04.조건문/(lv.2)로그인-확인하기.js";

describe("(lv.2)로그인-확인하기.js 테스트", () => {
  it("id가 'admin'이고 pw가 '1234'이면 'success'를 반환해야 한다.", () => {
    expect(loginCheck("admin", "1234")).toBe("success");
  });
  it("id가 'admin'이 아니거나 pw가 '1234'가 아니면 'fail'을 반환해야 한다.", () => {
    expect(loginCheck("admin", "wrong")).toBe("fail");
    expect(loginCheck("user", "1234")).toBe("fail");
    expect(loginCheck("user", "wrong")).toBe("fail");
  });
});
