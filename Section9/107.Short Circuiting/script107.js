const restaurant = {
    name: 'DatBe',
    location: 'HaNoi',
    categories: ['Pasta', 'Noodles', 'Salad'],
    starterMenu: ['Garlic Bread', 'Pho', 'Beef Steak'],
    mainMenu: ['Banh My', 'Bun Dau Mam Tom', 'Coffee'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1},${ing2} and ${ing3}`);
    },

    orderBanhmy: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

console.log('---- OR ----');
// Use ANY data type, Return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical Example
if(restaurant.orderBanhmy) {
    restaurant.orderBanhmy('Banh my','rau');
}

restaurant.orderBanhmy && restaurant.orderBanhmy('Banh my','rau');
