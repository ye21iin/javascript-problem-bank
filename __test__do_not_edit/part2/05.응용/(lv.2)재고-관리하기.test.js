import {
  inventory,
  addProduct,
} from "../../../part2/05.응용/(lv.2)재고-관리하기.js";

describe("(lv.2)재고-관리하기.js 테스트", () => {
  it("기존 id가 없으면 새 항목을 추가해야 한다.", () => {
    const newItem = { id: 300, name: "Monitor", stock: 2 };
    addProduct(newItem);
    const addedItem = inventory.find((item) => item.id === 300);
    expect(addedItem).toBeDefined();
    expect(addedItem?.name).toBe("Monitor");
    expect(addedItem?.stock).toBe(2);
  });

  it("이미 존재하는 id가 있으면 stock만 증가해야 한다.", () => {
    const initialStock = inventory.find((item) => item.id === 100).stock;
    addProduct({ id: 100, name: "Keyboard", stock: 5 });
    const updatedItem = inventory.find((item) => item.id === 100);
    expect(updatedItem?.stock).toBe(initialStock + 5);
  });

  it("다른 id에는 영향을 주지 않아야 한다.", () => {
    const untouchedItem = inventory.find((item) => item.id === 200);
    expect(untouchedItem?.stock).toBe(5);
  });

  it("stock이 0 이상인지 등 기본 속성 검사", () => {
    const newItem = { id: 400, name: "USB Cable", stock: 0 };
    addProduct(newItem);
    const foundItem = inventory.find((item) => item.id === 400);
    expect(foundItem?.stock).toBe(0);
  });
});
