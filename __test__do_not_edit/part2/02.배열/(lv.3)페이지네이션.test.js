import { getPage } from "../../../part2/02.배열/(lv.3)페이지네이션.js";

describe("(lv.3)게시판-페이징.js 테스트", () => {
  it("pageNumber가 1, perPage가 2면 첫 2개 게시글을 반환해야 한다.", () => {
    const result = getPage(1, 2);
    expect(result).toEqual([
      { id: 1, title: "Hello" },
      { id: 2, title: "World" },
    ]);
  });

  it("pageNumber가 2, perPage가 2면 다음 2개 게시글을 반환해야 한다.", () => {
    const result = getPage(2, 2);
    expect(result).toEqual([
      { id: 3, title: "JavaScript" },
      { id: 4, title: "Paging" },
    ]);
  });

  it("pageNumber가 3, perPage가 2면 남은 게시글 1개를 반환해야 한다.", () => {
    const result = getPage(3, 2);
    expect(result).toEqual([{ id: 5, title: "Example" }]);
  });

  it("범위를 벗어나면 빈 배열을 반환해야 한다.", () => {
    const result = getPage(4, 2);
    expect(result).toEqual([]);
  });

  it("pageNumber나 perPage가 1 미만이면 빈 배열을 반환해야 한다.", () => {
    expect(getPage(0, 2)).toEqual([]);
    expect(getPage(1, 0)).toEqual([]);
    expect(getPage(-1, 2)).toEqual([]);
  });
});
