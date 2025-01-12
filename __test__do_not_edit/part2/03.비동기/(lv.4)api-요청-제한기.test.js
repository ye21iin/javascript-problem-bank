import { createRateLimiter } from "../../../part2/03.비동기/(lv.5)api-요청-제한기.js";

describe("(lv.5)api-요청-제한기.js 테스트", () => {
  it("동시에 여러 요청을 보내도, timeWindow 내에 maxRequests 이상 실행되지 않아야 한다.", async () => {
    const rateLimited = createRateLimiter(2, 1000);
    let concurrent = 0;
    let maxConcurrent = 0;

    const tasks = Array.from({ length: 5 }, (_, i) => () => {
      concurrent++;
      if (concurrent > maxConcurrent) {
        maxConcurrent = concurrent;
      }
      return new Promise((res) =>
        setTimeout(() => {
          concurrent--;
          res(`task-${i + 1}`);
        }, 10)
      );
    });

    const results = await Promise.all([
      rateLimited(tasks[0]),
      rateLimited(tasks[1]),
      rateLimited(tasks[2]),
      rateLimited(tasks[3]),
      rateLimited(tasks[4]),
    ]);

    expect(results.length).toBe(5);
    expect(maxConcurrent).toBeLessThanOrEqual(2);
  });

  it("timeWindow 이후에는 요청이 다시 허용되어야 한다.", async () => {
    const rateLimited = createRateLimiter(2, 300);
    let doneCount = 0;

    function shortTask() {
      return new Promise((resolve) => {
        setTimeout(() => {
          doneCount++;
          resolve(doneCount);
        }, 50);
      });
    }

    await Promise.all([
      rateLimited(shortTask),
      rateLimited(shortTask),
      rateLimited(shortTask),
    ]);

    expect(doneCount).toBe(3);
  });

  it("큐에 쌓인 요청은 순차적으로 실행되어야 한다.", async () => {
    const rateLimited = createRateLimiter(1, 200);
    let order = [];

    function createTask(n) {
      return () =>
        new Promise((resolve) => {
          order.push(`start-${n}`);
          setTimeout(() => {
            order.push(`end-${n}`);
            resolve(n);
          }, 50);
        });
    }

    const results = await Promise.all([
      rateLimited(createTask(1)),
      rateLimited(createTask(2)),
      rateLimited(createTask(3)),
    ]);

    expect(results).toEqual([1, 2, 3]);
    expect(order).toEqual([
      "start-1",
      "end-1",
      "start-2",
      "end-2",
      "start-3",
      "end-3",
    ]);
  });

  it("허용량보다 적은 요청 수는 즉시 처리되어야 한다.", async () => {
    const rateLimited = createRateLimiter(3, 100);
    let concurrent = 0;
    let maxConcurrent = 0;

    const tasks = Array.from({ length: 2 }, (_, i) => () => {
      concurrent++;
      maxConcurrent = Math.max(maxConcurrent, concurrent);
      return new Promise((resolve) =>
        setTimeout(() => {
          concurrent--;
          resolve(`task-${i + 1}`);
        }, 50)
      );
    });

    const results = await Promise.all([
      rateLimited(tasks[0]),
      rateLimited(tasks[1]),
    ]);

    expect(results).toEqual(["task-1", "task-2"]);
    expect(maxConcurrent).toBe(2);
  });
});
