/**
 * [(lv.2)배열-메서드-some-and-every.js]
 *
 * 주어진 배열(arr)에 대해:
 * 1) hasNegative 함수: 배열에 음수가 하나라도 있으면 true, 없으면 false를 반환하세요. (Array.prototype.some 메서드를 사용)
 * 2) allPositive 함수: 배열이 전부 양수라면 true, 하나라도 0 이하의 숫자가 있으면 false를 반환하세요. (Array.prototype.every 메서드를 사용)
 *
 * @param {number[]} arr
 * @returns {boolean}
 */

// TODO: hasNegative 함수를 작성하세요.
function hasNegative(arr) {
  const negative = (x) => x < 0;
  return arr.some(negative);
}

// TODO: allPositive 함수를 작성하세요.
function allPositive(arr) {
  const positive = (x) => x > 0;
  return arr.every(positive);
}

// export를 수정하지 마세요.
export { hasNegative, allPositive };
