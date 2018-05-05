describe("Item", function() {

  it("should be able to create a new item", function() {
    // arrange
    const item = new Item('test', 0, 0);

    // evaluation
    expect(item.name).toEqual('test')
  });
});
