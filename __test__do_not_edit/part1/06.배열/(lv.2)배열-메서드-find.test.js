import {
  findUserByName,
  findIndexOf,
} from "../../../part1/06.배열/(lv.2)배열-메서드-find.js";
import { jest } from "@jest/globals";

describe("(lv.2)배열-메서드-find.js 테스트", () => {
  describe("findUserByName 함수", () => {
    it("배열에 해당 이름을 가진 사용자가 있으면 첫 번째 객체를 반환해야 합니다.", () => {
      const users = [
        { name: "Alice" },
        { name: "Bob" },
        { name: "Charlie" },
        { name: "Bob" },
      ];
      const result = findUserByName(users, "Bob");
      expect(result).toEqual({ name: "Bob" });
    });

    it("배열에 해당 이름을 가진 사용자가 없으면 null을 반환해야 합니다.", () => {
      const users = [{ name: "Alice" }, { name: "Charlie" }, { name: "David" }];
      const result = findUserByName(users, "Bob");
      expect(result).toBeNull();
    });

    it("빈 배열을 전달하면 null을 반환해야 합니다.", () => {
      const users = [];
      const result = findUserByName(users, "Alice");
      expect(result).toBeNull();
    });

    it("find 메서드를 사용하여 구현해야 합니다.", () => {
      const findSpy = jest.spyOn(Array.prototype, "find");
      findUserByName([{ name: "Alice" }], "Alice");
      expect(findSpy).toHaveBeenCalled();
      findSpy.mockRestore();
    });
  });

  describe("findIndexOf 함수", () => {
    it("배열에 해당 값이 있으면 첫 번째 인덱스를 반환해야 합니다.", () => {
      const arr = [10, 20, 30, 20, 40];
      const index = findIndexOf(arr, 20);
      expect(index).toBe(1);
    });

    it("배열에 해당 값이 없으면 -1을 반환해야 합니다.", () => {
      const arr = ["apple", "banana", "cherry"];
      const index = findIndexOf(arr, "durian");
      expect(index).toBe(-1);
    });

    it("빈 배열을 전달하면 -1을 반환해야 합니다.", () => {
      const arr = [];
      const index = findIndexOf(arr, "anything");
      expect(index).toBe(-1);
    });

    it("객체나 배열 같은 복합 데이터를 찾을 때 올바른 인덱스를 반환해야 합니다.", () => {
      const obj1 = { id: 1 };
      const obj2 = { id: 2 };
      const arr = [obj1, obj2];
      const index = findIndexOf(arr, obj2);
      expect(index).toBe(1);
    });

    it("findIndex 메서드를 사용하여 구현해야 합니다.", () => {
      const findIndexSpy = jest.spyOn(Array.prototype, "findIndex");
      findIndexOf([1, 2, 3], 2);
      expect(findIndexSpy).toHaveBeenCalled();
      findIndexSpy.mockRestore();
    });
  });
});
