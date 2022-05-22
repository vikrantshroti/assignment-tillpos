import { findIndexByKeyValue } from "./commonUtils";

class Checkout {
  price: any;
  rules: any;
  sum: number;
  qtySmall: number;
  qtyMedium: number;
  qtyLarge: number;
  constructor(price: any, rules: any) {
    this.price = price;
    this.rules = rules;
    this.sum = 0;
    this.qtySmall = 0;
    this.qtyMedium = 0;
    this.qtyLarge = 0;
  }

  addItems(
    qtySmallPizza: number,
    qtyMediumPizza: number,
    qtyLargePizza: number
  ) {
    this.qtySmall = qtySmallPizza;
    this.qtyMedium = qtyMediumPizza;
    this.qtyLarge = qtyLargePizza;
    this.sum =
      qtySmallPizza * this.price[0].price +
      qtyMediumPizza * this.price[1].price +
      qtyLargePizza * this.price[2].price;
  }

  // apply discount rules
  applyRules(customerType: any) {
    if (customerType === "default") return;

    const foundAtIndex = findIndexByKeyValue(
      this.rules,
      "customer",
      customerType
    );

    if (foundAtIndex === -1) return;

    switch (this.rules[foundAtIndex].id) {
      case 101:
        // Gets a 3 for 2 deal for Small Pizzas
        if (this.qtySmall === 3) this.sum -= this.price[0].price;
        break;
      case 102:
        // Gets a discount on Large Pizza where the price drops to $19.99 per pizza
        this.sum -= this.price[2].price * this.qtyLarge;
        this.sum += 19.99 * this.qtyLarge;
        break;
      case 103:
        // Gets a 5 for 4 deal on Medium Pizza
        if (this.qtyMedium === 5) this.sum -= this.price[1].price;
        break;
      default:
        break;
    }
  }

  // return final amount
  total() {
    return this.sum;
  }
}

export default Checkout;
