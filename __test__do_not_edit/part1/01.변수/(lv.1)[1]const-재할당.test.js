import { reassignConst } from "../../../part1/01.변수/(lv.1)[1]const-재할당.js";

describe("(lv.1)[1]const-재할당.js 테스트", () => {
  it("reassignConst 함수를 실행하면 에러가 발생해야 합니다.", () => {
    expect(() => reassignConst()).toThrow();
  });
});
