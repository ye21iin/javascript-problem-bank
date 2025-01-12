import { getUsers } from "../../../part1/10.비동기/(lv.2)비동기-함수-사용하기.js";

describe("(lv.1)[2]비동기-함수-사용하기.js 테스트", () => {
  it("fetchUsers로부터 받은 사용자 이름만 담긴 배열을 반환해야 한다.", async () => {
    const mockFetchUsers = () =>
      Promise.resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ]);
    const result = await getUsers(mockFetchUsers);
    expect(result).toEqual(["Alice", "Bob"]);
  });

  it("빈 배열을 반환할 수도 있어야 한다.", async () => {
    const mockFetchUsers = () => Promise.resolve([]);
    const result = await getUsers(mockFetchUsers);
    expect(result).toEqual([]);
  });

  it("반환된 배열의 모든 요소는 문자열이어야 한다.", async () => {
    const mockFetchUsers = () =>
      Promise.resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ]);
    const result = await getUsers(mockFetchUsers);
    result.forEach((item) => {
      expect(typeof item).toBe("string");
    });
  });
});
