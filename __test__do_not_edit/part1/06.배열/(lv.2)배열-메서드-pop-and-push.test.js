import { manageTaskList } from "../../../part1/06.배열/(lv.2)배열-메서드-pop-and-push.js";
import { jest } from "@jest/globals";

describe("(lv.2)[2]manageTaskList.js 테스트", () => {
  it("pop, push 메서드를 사용해야 한다.", () => {
    const popSpy = jest.spyOn(Array.prototype, "pop");
    const pushSpy = jest.spyOn(Array.prototype, "push");

    manageTaskList(["Task A"], "Task B");

    expect(popSpy).toHaveBeenCalled();
    expect(pushSpy).toHaveBeenCalled();

    popSpy.mockRestore();
    pushSpy.mockRestore();
  });

  it("마지막 항목이 제거되고, 새 항목이 추가되어야 한다.", () => {
    const tasks = ["Task A", "Task B", "Task C"];
    const result = manageTaskList(tasks, "Task D");
    expect(result).not.toContain("Task C");
    expect(result).toContain("Task D");
  });

  it("첫 항목이 'Updated Task'로 변경되어야 한다.", () => {
    const tasks = ["Task A", "Task B", "Task C"];
    const result = manageTaskList(tasks, "Task D");
    expect(result[0]).toBe("Updated Task");
  });

  it("배열이 비어지지 않았다면, 첫 항목은 'Updated Task'가 되어야 한다.", () => {
    const tasks = ["Task X"];
    const result = manageTaskList(tasks, "Task Y");
    expect(result[0]).toBe("Updated Task");
  });

  it("pop 후 모든 항목이 제거되어도 push로 새 항목을 추가하므로 배열은 비어 있지 않다.", () => {
    const tasks = ["OnlyOne"];
    const result = manageTaskList(tasks, "Something");
    expect(result.length).toBeGreaterThan(0);
  });
});
