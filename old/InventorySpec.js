describe("Inventory", function() {

  describe("add", function() {
    it('should be able to add an item to the inventory', function() {
      // arrange
      const inventory = new Inventory();

      // act
      inventory.add('fakeItem', 0, 1);
      spyOn(inventory, 'get').and.returnValue({ name: 'fakeItem', sellIn: 0, quality: 1 })

      // assert
      expect(inventory.count()).toEqual(1);
      expect(inventory.get()).toEqual({ name: 'fakeItem', sellIn: 0, quality: 1 });
    });
  });
});
