import { apiRequest } from "../../../part2/03.비동기/(lv.4)api-request-재검증.js";

describe("(lv.4)api-request-재검증.js 테스트", () => {
  it('토큰이 "expired" 상태이면, refreshToken() 호출 후 "newToken"으로 fetch를 해야 한다.', async () => {
    const result = await apiRequest("/test-endpoint");
    expect(result).toMatch(/newToken/);
  });

  it('새로운 요청 시 currentToken이 "newToken" 상태라면, 그대로 fetch를 해야 한다.', async () => {
    const result = await apiRequest("/another-endpoint");
    expect(result).toMatch(/newToken/);
  });

  it('currentToken이 "valid" 상태라면, 바로 fetch를 해야 한다.', async () => {
    const result = await apiRequest("/valid-endpoint", "valid");
    expect(result).toMatch(/valid/);
  });
});
