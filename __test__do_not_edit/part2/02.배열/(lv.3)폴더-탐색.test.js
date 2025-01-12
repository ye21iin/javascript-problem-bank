import { getAllFolderNames } from "../../../part2/02.배열/(lv.3)폴더-탐색.js";

describe("(lv.3)폴더-탐색.js 테스트", () => {
  it("최상위 폴더만 있을 때는 해당 폴더 이름만 반환해야 한다.", () => {
    const folder = {
      name: "root",
      subFolders: [],
    };
    const result = getAllFolderNames(folder);
    expect(result).toEqual(["root"]);
  });

  it("하위 폴더가 있으면 모든 폴더 이름을 배열로 반환해야 한다.", () => {
    const folder = {
      name: "root",
      subFolders: [
        { name: "sub1", subFolders: [] },
        { name: "sub2", subFolders: [] },
      ],
    };
    const result = getAllFolderNames(folder);
    expect(result).toEqual(["root", "sub1", "sub2"]);
  });

  it("하위 폴더가 여러 단계로 중첩된 경우에도 재귀로 모든 폴더를 찾아야 한다.", () => {
    const folder = {
      name: "root",
      subFolders: [
        { name: "sub1", subFolders: [] },
        {
          name: "sub2",
          subFolders: [
            { name: "sub2_1", subFolders: [] },
            {
              name: "sub2_2",
              subFolders: [{ name: "sub2_2_1", subFolders: [] }],
            },
          ],
        },
      ],
    };
    const result = getAllFolderNames(folder);
    expect(result).toEqual([
      "root",
      "sub1",
      "sub2",
      "sub2_1",
      "sub2_2",
      "sub2_2_1",
    ]);
  });

  it("하위 폴더가 없는 경우에도 정상 처리되어야 한다.", () => {
    const folder = {
      name: "single",
      subFolders: [],
    };
    const result = getAllFolderNames(folder);
    expect(result).toEqual(["single"]);
  });
});
