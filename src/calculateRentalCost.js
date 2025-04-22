/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let counter = 0;
  const PRICE_ONE_DAY = 40;
  const DISCAUNT_3_DAYS = 20;
  const DISCAUNT_7_DAYS = 50;

  for (let i = 0; i < days; i++) {
    counter += PRICE_ONE_DAY;
  }

  if (days >= 3) {
    counter = counter - DISCAUNT_3_DAYS;
  }

  if (days >= 7) {
    counter = counter - (DISCAUNT_7_DAYS - DISCAUNT_3_DAYS);
  }

  return counter;
}

module.exports = calculateRentalCost;
