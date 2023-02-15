exports.calculateBonus = async function (bonus) {
  let totalBonusAmount = 0;

  Object.keys(bonus.socialPer).forEach((key) => {
    if (key !== "totalbonusAmount") {
      const value = parseInt(bonus.socialPer[key]); // convert the value to a number
      const amount = calculateSocialAmount(value);
      bonus.socialPer[key] = { value: value, amount: amount };
      totalBonusAmount += amount;
    }
  });

  bonus.socialPer.totalbonusAmount = totalBonusAmount;

  // calculate the total bonus amount for all orders
  const result = calculateOrderAmount(bonus.orders);
  bonus.orders = result.orders;
  bonus.totalOrderBonus = result.totalOrderBonus;

  bonus.totalBonus =
    Number(bonus.socialPer.totalbonusAmount) + Number(bonus.totalOrderBonus);

  return bonus;
};
function calculateOrderAmount(orders) {
  let totalOrderBonus = 0;

  orders.forEach((order) => {
    const clientRating = order.clientRating;
    const nbrOfItems = parseInt(order.nbrOfItems);

    let bonusAmount;
    switch (clientRating) {
      case "Excellent":
        bonusAmount = 35 * nbrOfItems;
        break;
      case "Very Good":
        bonusAmount = 30 * nbrOfItems;
        break;
      case "Good":
        if (nbrOfItems > 10) {
          bonusAmount = 200;
        } else bonusAmount = 20 * nbrOfItems;
        break;
      default:
        bonusAmount = 0;
    }

    order.bonusAmount = bonusAmount;
    totalOrderBonus += bonusAmount;
  });

  return { orders, totalOrderBonus: totalOrderBonus.toString() };
}

function calculateSocialAmount(value) {
  const baseBonus = 50;
  const additionalQuarters = value - 4 / 4;
  const bonus = baseBonus + additionalQuarters * 50;
  return bonus;
}
