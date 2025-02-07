/**
 * [(lv.3)날짜-포맷팅-하기.js]
 *
 * 1) formatDate 함수를 작성하세요.
 * 2) Date 객체를 입력받아 "YYYY년 MM월 DD일 HH시 mm분" 형식으로 문자열을 반환하세요.
 * 3) 월, 일, 시, 분이 한 자리면 앞에 0을 붙이세요.
 * 4) 예: 2021년 1월 1일 1시 1분 → "2021년 01월 01일 01시 01분"
 *
 * @param {Date} date
 * @returns {string}
 */

function formatDate(date) {
  const dt = new Date(date);
  const y = dt.getFullYear();
  const month = dt.getMonth();
  const dat = dt.getDate();
  const hour = dt.getHours();
  const minutes = dt.getMinutes();

  const m = month + 1 < 10 ? "0" + (month + 1) : month + 1;
  const d = dat < 10 ? "0" + dat : dat;
  const h = hour < 10 ? "0" + hour : hour;
  const mm = minutes < 10 ? "0" + minutes : minutes;
  return `${y}년 ${m}월 ${d}일 ${h}시 ${mm}분`;
}

// export를 수정하지 마세요.
export { formatDate };
