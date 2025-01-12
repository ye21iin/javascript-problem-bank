import { parseQueryString } from "../../../part2/05.응용/(lv.3)쿼리-스트링-파싱하기.js";

describe("(lv.3)쿼리-스트링-파싱하기.js 테스트", () => {
  it("빈 문자열이거나 '?'만 있으면 빈 객체를 반환해야 한다.", () => {
    expect(parseQueryString("")).toEqual({});
    expect(parseQueryString("?")).toEqual({});
  });

  it("단일 쿼리 파라미터를 올바르게 파싱해야 한다.", () => {
    expect(parseQueryString("?search=apple")).toEqual({ search: "apple" });
  });

  it("여러 쿼리 파라미터를 올바르게 파싱해야 한다.", () => {
    expect(parseQueryString("?search=apple&page=2")).toEqual({
      search: "apple",
      page: "2",
    });
  });

  it("값이 없는 경우 빈 문자열로 처리해야 한다.", () => {
    expect(parseQueryString("?search=")).toEqual({ search: "" });
    expect(parseQueryString("?key&flag=")).toEqual({ key: "", flag: "" });
  });

  it("키=값 형태가 아닌 항목이 있으면 값은 빈 문자열로 처리해야 한다.", () => {
    expect(parseQueryString("?filter&sort=desc")).toEqual({
      filter: "",
      sort: "desc",
    });
  });
});
