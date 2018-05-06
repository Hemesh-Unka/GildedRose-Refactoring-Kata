describe('Normal', function() {
  it('decreases in date by 1', function() {
    // arrange
    const shop = new Shop([ new Item("Generic Item", 10, 10)]);

    // act
    shop.updateQuality();

    // assert
    expect(shop.items[0].sellIn).toBe(9)
  });

  it('decreases in quality by 1', function() {
    // arrange
    const shop = new Shop([ new Item("Generic Item", 10, 10)]);

    // act
    shop.updateQuality();

    // assert
    expect(shop.items[0].quality).toBe(9)
  });

  it('the quality of an item is never negative', function() {
    // arrange
    const shop = new Shop([ new Item("Generic Item", 0, 1)])

    // act
    shop.updateQuality();
    shop.updateQuality();

    // assert
    expect(shop.items[0].quality).toBe(0);
  });

  it('quality degrades twices as fast, once the sell by date has passed', function() {
    // arrange
    const shop = new Shop([ new Item("Generic Item", 0, 10)]);

    // act
    shop.updateQuality();

    // assert
    expect(shop.items[0].sellIn).toBe(-1);
    expect(shop.items[0].quality).toBe(8)
  });
});
