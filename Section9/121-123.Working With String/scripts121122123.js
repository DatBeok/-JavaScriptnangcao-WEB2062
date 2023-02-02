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

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737", [0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat");
  } else {
    console.log("you got lucky");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));

console.log(typeof new String("jonas").slice(1));