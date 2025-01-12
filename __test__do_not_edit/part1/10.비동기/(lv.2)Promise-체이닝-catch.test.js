import { getDataWithFallback } from "../../../part1/10.비동기/(lv.2)Promise-체이닝-catch.js";
import { jest } from "@jest/globals";

describe("(lv.2)Promise-체이닝-catch.js 테스트", () => {
  it("primary가 성공하면 primary의 결과를 반환해야 한다.", async () => {
    const primary = jest.fn().mockResolvedValue("primary data");
    const fallback = jest.fn().mockResolvedValue("fallback data");
    const result = await getDataWithFallback(primary, fallback);
    expect(primary).toHaveBeenCalled();
    expect(fallback).not.toHaveBeenCalled();
    expect(result).toBe("primary data");
  });

  it("primary가 실패하면 fallback을 호출하고, 그 결과를 반환해야 한다.", async () => {
    const primary = jest.fn().mockRejectedValue(new Error("primary error"));
    const fallback = jest.fn().mockResolvedValue("fallback data");
    const result = await getDataWithFallback(primary, fallback);
    expect(primary).toHaveBeenCalled();
    expect(fallback).toHaveBeenCalled();
    expect(result).toBe("fallback data");
  });

  it("primary와 fallback 둘 다 실패하면 해당 에러를 던져야 한다.", async () => {
    const primary = jest.fn().mockRejectedValue(new Error("primary error"));
    const fallback = jest.fn().mockRejectedValue(new Error("fallback error"));
    await expect(getDataWithFallback(primary, fallback)).rejects.toThrow(
      "fallback error"
    );
    expect(primary).toHaveBeenCalled();
    expect(fallback).toHaveBeenCalled();
  });
});
