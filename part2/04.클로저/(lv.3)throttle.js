/**
 * [(lv.3)Throttle 함수 구현.js]
 *
 * 1) throttle(func, delay) 함수는 짧은 시간 동안 여러 번 호출되어도, delay(ms) 동안은 최초 1회만 func를 실행하고, 나머지는 무시합니다.
 * 2) delay가 지나면 다시 최초 호출 시점에 한 번만 실행합니다.
 * 3) func는 호출 시 전달된 인자를 그대로 받아야 합니다.
 *
 * @param {function} func - 실행할 실제 함수
 * @param {number} delay - 실행 간격(ms)
 * @returns {function} - 쓰로틀이 적용된 새 함수
 */

// TODO: throttle 함수를 작성하세요.
function throttle(func, delay) {
  let lastCall = 0;
  let timer;
  return (...args) => {
    const now = Date.now();
    const remainTime = delay - (now - lastCall);

    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer);
      }
      lastCall = now;
      func(...args);
    } else {
      // remainTime이 남았다면
      if (!timer) {
        timer = setTimeout(() => {
          lastCall = Date.now();
          timer = null;
          func(...args);
        }, remainTime);
      }
    }
  };
}

// export 를 수정하지 마세요.
export { throttle };
