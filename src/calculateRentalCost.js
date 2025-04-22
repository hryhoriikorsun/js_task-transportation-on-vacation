/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let counter = 0;
  const PRICE_ONE_DAY = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCAUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCAUNT = 50;

  for (let i = 0; i < days; i++) {
    counter += PRICE_ONE_DAY;
  }

  if (days >= SHORT_TERM) {
    counter = counter - SHORT_TERM_DISCAUNT;
  }

  if (days >= LONG_TERM) {
    counter = counter - (LONG_TERM_DISCAUNT - SHORT_TERM_DISCAUNT);
  }

  return counter;
}

module.exports = calculateRentalCost;
