import { createUserLogger } from "../../../part2/01.객체/(lv.3)Map-Set-활용하기.js";

describe("(lv.3)Map과 Set 활용하기.js 테스트", () => {
  it("새로 생성하면 userLogs는 비어 있어야 한다.", () => {
    const logger = createUserLogger();
    expect(logger.getUserActions("nonExistent")).toEqual([]);
  });

  it("recordUserAction을 호출하면 해당 userId에 액션이 저장되어야 한다.", () => {
    const logger = createUserLogger();
    logger.recordUserAction("abc123", "login");
    expect(logger.getUserActions("abc123")).toEqual(["login"]);
  });

  it("동일 userId로 여러 액션을 기록하면 모두 저장되어야 한다.", () => {
    const logger = createUserLogger();
    logger.recordUserAction("userX", "action1");
    logger.recordUserAction("userX", "action2");
    logger.recordUserAction("userX", "action3");
    expect(logger.getUserActions("userX")).toEqual([
      "action1",
      "action2",
      "action3",
    ]);
  });

  it("같은 액션을 중복으로 추가해도 Set을 사용하므로 중복없이 저장되어야 한다.", () => {
    const logger = createUserLogger();
    logger.recordUserAction("testUser", "login");
    logger.recordUserAction("testUser", "login");
    logger.recordUserAction("testUser", "logout");
    expect(logger.getUserActions("testUser")).toEqual(["login", "logout"]);
  });

  it("존재하지 않는 userId를 getUserActions하면 빈 배열을 반환해야 한다.", () => {
    const logger = createUserLogger();
    expect(logger.getUserActions("neverLogged")).toEqual([]);
  });
});
