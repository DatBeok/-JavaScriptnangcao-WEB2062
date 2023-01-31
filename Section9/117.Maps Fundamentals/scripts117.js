const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  // Thursday
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  // Friday
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // Saturday
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "DatBe",
  location: "HaNoi",
  categories: ["Pasta", "Noodles", "Salad"],
  starterMenu: ["Garlic Bread", "Pho", "Beef Steak"],
  mainMenu: ["Banh My", "Bun Dau Mam Tom", "Coffee"],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },

  orderBanhmy(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1,2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'),'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));