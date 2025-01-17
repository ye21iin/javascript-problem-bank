/**
 * [(lv.1)팩토리얼.js]
 *
 * 1) factorial 함수는 숫자 n을 파라미터로 받습니다.
 * 2) n이 1 이상일 경우, 1부터 n까지의 합을 for문으로 구하여 반환하세요.
 * 3) n이 0 이하일 경우 0을 반환하세요.
 *
 * @param {number} n
 * @returns {number} 1부터 n까지의 합 (n이 0 이하일 경우 0)
 */
function factorial(n) {
  // TODO: n이 1 이상이면 1부터 n까지의 합을 반환, 0 이하이면 0을 반환
  let answer = 0;
  if (n <= 0) {
    return 0;
  }
  for (let i = 1; i < n + 1; i++) {
    answer += i;
  }
  return answer;
}

// export를 수정하지 마세요.
export { factorial };
