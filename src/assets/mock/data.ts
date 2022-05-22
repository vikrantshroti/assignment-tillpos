export const customers = [
  { id: 1, label: "default", value: "default" },
  { id: 2, label: "Microsoft", value: "microsoft" },
  { id: 3, label: "Amazon", value: "amazon" },
  { id: 4, label: "Facebook", value: "facebook" },
];

export const rules = [
  {
    id: 101,
    customer: "microsoft",
    description: "Gets a 3 for 2 deal for Small Pizzas",
  },
  {
    id: 102,
    customer: "amazon",
    description:
      "Gets a discount on Large Pizza where the price drops to $19.99 per pizza",
  },
  {
    id: 103,
    customer: "facebook",
    description: "Gets a 5 for 4 deal on Medium Pizza",
  },
];

export const price = [
  {
    id: 201,
    food: "pizza",
    size: "small",
    name: "Small Pizza",
    price: 11.99,
    description: "10'' pizza for one person ",
  },
  {
    id: 202,
    food: "pizza",
    size: "medium",
    name: "Medium Pizza",
    price: 15.99,
    description: "12'' Pizza for two persons",
  },
  {
    id: 203,
    food: "pizza",
    size: "large",
    name: "Large Pizza",
    price: 21.99,
    description: "15'' Pizza for four persons",
  },
];
