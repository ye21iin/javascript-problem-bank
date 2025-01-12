import { checkAccess } from "../../../part2/05.응용/(lv.3)사용자-권한-확인하기.js";

describe("(lv.3)사용자-권한-확인하기.js 테스트", () => {
  it("admin은 모든 권한에 접근 가능해야 한다.", () => {
    const user = { name: "Alice", role: "admin" };
    expect(checkAccess(user, "user")).toBe(true);
    expect(checkAccess(user, "manager")).toBe(true);
    expect(checkAccess(user, "admin")).toBe(true);
  });

  it("manager는 manager 이하 권한에만 접근 가능해야 한다.", () => {
    const user = { name: "Bob", role: "manager" };
    expect(checkAccess(user, "user")).toBe(true);
    expect(checkAccess(user, "manager")).toBe(true);
    expect(checkAccess(user, "admin")).toBe(false);
  });

  it("user는 user 권한에만 접근 가능해야 한다.", () => {
    const user = { name: "Charlie", role: "user" };
    expect(checkAccess(user, "user")).toBe(true);
    expect(checkAccess(user, "manager")).toBe(false);
    expect(checkAccess(user, "admin")).toBe(false);
  });

  it("알 수 없는 role이라면 권한이 없는 것으로 처리해야 한다.", () => {
    const user = { name: "Unknown", role: "guest" };
    expect(checkAccess(user, "user")).toBe(false);
  });
});
