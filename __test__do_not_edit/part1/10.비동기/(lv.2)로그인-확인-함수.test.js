import { loginRequest } from "../../../part1/10.비동기/(lv.2)로그인-확인-함수.js";

describe("(lv.2)로그인-확인-함수.js 테스트", () => {
  it('id가 "admin"이고 pw가 "1234"이면 "ok"를 반환해야 한다.', async () => {
    const result = await loginRequest("admin", "1234");
    expect(result).toBe("ok");
  });

  it('id가 "admin"이 아니면 "fail"을 반환(throw)해야 한다.', async () => {
    await expect(loginRequest("user", "1234")).rejects.toBe("fail");
  });

  it('pw가 "1234"가 아니면 "fail"을 반환해야 한다.', async () => {
    await expect(loginRequest("admin", "4321")).rejects.toBe("fail");
  });

  // ▼ 여기 수정 (rejects.toBe("fail")로)
  it('아이디와 비밀번호 둘 다 틀린 경우에도 "fail"을 반환해야 한다.', async () => {
    await expect(loginRequest("user", "4321")).rejects.toBe("fail");
  });

  it('아이디가 비어 있으면 "fail"을 반환해야 한다.', async () => {
    await expect(loginRequest("", "1234")).rejects.toBe("fail");
  });

  it('비밀번호가 비어 있으면 "fail"을 반환해야 한다.', async () => {
    await expect(loginRequest("admin", "")).rejects.toBe("fail");
  });

  it('아이디와 비밀번호 모두 빈 문자열이면 "fail"을 반환해야 한다.', async () => {
    await expect(loginRequest("", "")).rejects.toBe("fail");
  });

  it('아이디는 대소문자를 구분하므로, "Admin"이면 "fail"을 반환해야 한다.', async () => {
    await expect(loginRequest("Admin", "1234")).rejects.toBe("fail");
  });

  it('비밀번호가 "1234 "처럼 공백이 포함되어 있으면 "fail"을 반환해야 한다.', async () => {
    await expect(loginRequest("admin", "1234 ")).rejects.toBe("fail");
  });

  it('특수 문자가 섞인 아이디나 비밀번호도 정확히 "admin"과 "1234"가 아닐 경우 "fail"을 반환해야 한다.', async () => {
    await expect(loginRequest("admin!", "1234")).rejects.toBe("fail");
    await expect(loginRequest("admin", "1234!")).rejects.toBe("fail");
    await expect(loginRequest("admin", "1234!@#")).rejects.toBe("fail");
  });
});
