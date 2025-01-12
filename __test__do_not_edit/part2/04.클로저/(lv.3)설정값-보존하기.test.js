import { createConfigManager } from "../../../part2/04.클로저/(lv.3)설정값-보존하기.js";

describe("(lv.3)설정값-보존하기.js 테스트", () => {
  it("setConfig로 설정한 값은 getConfig로 가져올 수 있어야 한다.", () => {
    const manager = createConfigManager();
    manager.setConfig("theme", "dark");
    expect(manager.getConfig("theme")).toBe("dark");
  });

  it("getConfig로 없는 키를 조회하면 undefined가 반환되어야 한다.", () => {
    const manager = createConfigManager();
    expect(manager.getConfig("nonExistentKey")).toBeUndefined();
  });

  it("config 객체를 직접 접근할 수 없고, setConfig와 getConfig 메서드로만 접근해야 한다.", () => {
    const manager = createConfigManager();
    manager.setConfig("language", "ko");
    expect(manager.getConfig("language")).toBe("ko");
  });

  it("여러 설정값을 각각 setConfig로 저장 후, getConfig로 올바르게 반환해야 한다.", () => {
    const manager = createConfigManager();
    manager.setConfig("mode", "production");
    manager.setConfig("version", 3);
    expect(manager.getConfig("mode")).toBe("production");
    expect(manager.getConfig("version")).toBe(3);
  });

  it("같은 키를 다시 setConfig하면 덮어쓰여야 한다.", () => {
    const manager = createConfigManager();
    manager.setConfig("debug", true);
    expect(manager.getConfig("debug")).toBe(true);
    manager.setConfig("debug", false);
    expect(manager.getConfig("debug")).toBe(false);
  });
});
