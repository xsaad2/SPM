class Order {
  constructor(productName, clientName, clientRating, nbrOfItems, bonusAmount) {
    this.productName = productName;
    this.clientName = clientName;
    this.clientRating = clientRating;
    this.nbrOfItems = nbrOfItems;
    this.bonusAmount = bonusAmount;
  }
}

module.exports = Order;
