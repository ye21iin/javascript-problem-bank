import { calculateDiscount } from "../../../part2/05.응용/(lv.3)상품-할인하기.js";

describe("(lv.3)상품-할인하기.js 테스트", () => {
  it("쿠폰이 없으면 상품 가격 그대로 반환해야 한다.", () => {
    expect(calculateDiscount(10000)).toBe(10000);
    expect(calculateDiscount(5000, null)).toBe(5000);
  });

  it("percent 타입 쿠폰을 적용하면 해당 퍼센트만큼 할인해야 한다.", () => {
    const coupon = { type: "percent", rate: 0.2 };
    expect(calculateDiscount(10000, coupon)).toBe(8000);
  });

  it("fixed 타입 쿠폰을 적용하면 고정 금액만큼 할인해야 한다.", () => {
    const coupon = { type: "fixed", amount: 1000 };
    expect(calculateDiscount(10000, coupon)).toBe(9000);
  });

  it("fixed 타입 쿠폰 적용 시, 할인 금액이 상품 가격보다 크면 0을 반환해야 한다.", () => {
    const coupon = { type: "fixed", amount: 15000 };
    expect(calculateDiscount(10000, coupon)).toBe(0);
  });

  it("coupon 객체가 이상하거나 속성이 없으면 할인 없이 반환한다.", () => {
    const invalidCoupon1 = { type: "percent" };
    const invalidCoupon2 = { type: "fixed" };
    const invalidCoupon3 = { type: "unknown", rate: 0.5 };

    expect(calculateDiscount(10000, invalidCoupon1)).toBe(10000);
    expect(calculateDiscount(10000, invalidCoupon2)).toBe(10000);
    expect(calculateDiscount(10000, invalidCoupon3)).toBe(10000);
  });
});
