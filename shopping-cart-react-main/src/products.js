import product1 from "./assets/products/classic.webp";
import product2 from "./assets/products/mint.webp";
import product3 from "./assets/products/strawberry.webp";
import product4 from "./assets/products/blueberry.webp";

export const PRODUCTS = [
  {
    id: 1,
    productName: "Classic Lemonade",
    price: 20,
    lemonsRequired: 3, // Example value
    productImage: product1,
  },
  // Include lemonsRequired for each product accordingly...
  {
    id: 2,
    productName: "Mint Lemonade",
    price: 25,
    lemonsRequired: 3,
    productImage: product2,
  },
  {
    id: 3,
    productName: "Strawberry Lemonade",
    price: 35,
    lemonsRequired: 3,
    productImage: product3,
  },
  {
    id: 4,
    productName: "Blueberry Lemonade",
    price: 35,
    lemonsRequired: 3,
    productImage: product4,
  },
];
