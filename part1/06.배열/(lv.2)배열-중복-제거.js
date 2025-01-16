/**
 * [(lv.2)배열-중복-제거.js]
 *
 * 배열에서 중복된 요소를 제거하고,
 * 중복 없는 새로운 배열을 반환하세요.
 * 예시: [1, 2, 2, 3] -> [1, 2, 3]
 *
 * @param {any[]} arr
 * @returns {any[]} 중복이 제거된 새 배열
 */
function getUniqueElements(arr) {
  const newArr = [];
  arr.forEach((e) => {
    !newArr.includes(e) ? newArr.push(e) : "";
  });
  return newArr;
}

// export를 수정하지 마세요.
export { getUniqueElements };
