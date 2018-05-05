describe("Shop", function() {
  it('the quality of a item is never negative', function() {
  // arrange
  const shop = new Shop();
  // Once the sell by date has passed, Quality degrades twice as fast


  // act
  shop.inventory.add('fakeItem', 0, 0);

  // assert
  expect(shop.inventory.get()[0].name).toEqual('fakeItem');
});
