/**
 * [(lv.3)검색어-캐싱하기.js]
 *
 * updateTopKeywords(keywords):
 *   1) 여러 검색어가 들어올 때, 많이 검색된 순으로 상위 10개까지만 저장하세요.
 *   2) 중복 키워드는 1회만 노출되도록 하세요.
 *   3) 기존 캐시를 모두 지우고, 새로운 결과만 캐시에 저장하세요.
 * getTopKeywords():
 *   1) 현재 저장된 상위 10개 키워드를 반환하세요.
 *
 * keywords example : ["banana", "apple", "apple", "orange", "banana", "banana"]
 * @param {string[]} keywords - 검색된 키워드 배열
 * @returns {void}
 */

let topKeywordsCache = [];

function updateTopKeywords(keywords) {
  topKeywordsCache = [];
  if (!Array.isArray(keywords)) {
    keywords = []; // 배열이 아닌 경우 빈 배열로 저장 e.g. undefined
  }
  const freq = {}; // element-frequency 저장용 객체
  if (keywords)
    for (const key of keywords) {
      freq[key] = (freq[key] || 0) + 1; // 빈도 수 key-value 쌍 저장
    }
  const results = Object.entries(freq).sort((a, b) => {
    return b[1] - a[1]; // 빈도수 기준 정렬
  });
  for (let i = 0; i < 10; i++) {
    // 상위 10개만 캐시에 저장
    if (typeof results[i] !== "undefined") {
      topKeywordsCache.push(results[i][0]); // key값만 저장
    }
  }
}

function getTopKeywords() {
  return topKeywordsCache;
}

// export를 수정하지 마세요.
export { topKeywordsCache, updateTopKeywords, getTopKeywords };
