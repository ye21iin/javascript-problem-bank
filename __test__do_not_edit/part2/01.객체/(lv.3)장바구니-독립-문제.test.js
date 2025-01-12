import { fixCartReferenceIssue } from "../../../part2/01.객체/(lv.3)장바구니-독립-문제.js";

describe("(lv.3)장바구니-독립-문제.js 테스트", () => {
  it("userACart와 userBCart는 독립적으로 존재해야 한다.", () => {
    const { userACart, userBCart } = fixCartReferenceIssue();
    expect(userACart).not.toBe(userBCart);
  });

  it("userBCart에 쿠폰이 적용되면 userACart는 영향을 받지 않아야 한다.", () => {
    const { userACart, userBCart } = fixCartReferenceIssue();
    // userBCart는 할인 쿠폰 적용
    expect(userBCart.items[0].price).toBe(userACart.items[0].price - 5000);
    expect(userBCart.items[1].price).toBe(userACart.items[1].price - 5000);
  });

  it("userACart는 원본 가격을 유지해야 한다.", () => {
    const { userACart } = fixCartReferenceIssue();
    expect(userACart.items[0].price).toBe(30000);
    expect(userACart.items[1].price).toBe(20000);
  });

  it("userBCart 아이템 가격은 각각 5000원씩 할인되어야 한다.", () => {
    const { userBCart } = fixCartReferenceIssue();
    expect(userBCart.items[0].price).toBe(25000);
    expect(userBCart.items[1].price).toBe(15000);
  });
});
