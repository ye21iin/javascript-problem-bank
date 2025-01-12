import {
  topKeywordsCache,
  updateTopKeywords,
  getTopKeywords,
} from "../../../part2/02.배열/(lv.3)검색어-캐싱하기.js";

describe("(lv.3)검색어-캐싱하기.js 테스트", () => {
  it("많이 검색된 순으로 상위 10개 키워드를 캐싱해야 한다.", () => {
    updateTopKeywords([
      "banana",
      "apple",
      "apple",
      "orange",
      "banana",
      "banana",
    ]);
    const result = getTopKeywords();
    expect(result).toEqual(["banana", "apple", "orange"]);
    expect(result.length).toBeLessThanOrEqual(10);
  });

  it("중복된 키워드는 한 번만 저장되어야 한다.", () => {
    updateTopKeywords(["coffee", "coffee", "juice", "coffee"]);
    const result = getTopKeywords();
    expect(result).toEqual(["coffee", "juice"]);
  });

  it("키워드가 10개를 넘으면, 상위 10개만 캐싱해야 한다.", () => {
    const manyKeywords = [
      "k1",
      "k2",
      "k3",
      "k4",
      "k5",
      "k6",
      "k7",
      "k8",
      "k9",
      "k10",
      "k11",
      "k1",
      "k2",
      "k11",
      "k8",
    ];
    updateTopKeywords(manyKeywords);
    const result = getTopKeywords();
    expect(result.length).toBe(10);
  });

  it("새로운 updateTopKeywords 호출 시 기존 캐시는 지우고 새로 저장해야 한다.", () => {
    updateTopKeywords(["old1", "old2", "old1"]);
    updateTopKeywords(["new1", "new2"]);
    const result = getTopKeywords();
    expect(result).not.toContain("old1");
    expect(result).not.toContain("old2");
    expect(result).toContain("new1");
    expect(result).toContain("new2");
  });
});
