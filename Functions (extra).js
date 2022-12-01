pt1 = require("./Functions");

// Additional assignments for Day 5
console.log("\n\n----------Part 2----------");
/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

let arrayToCheck = pt1.giveMeRandom(5);
console.log("arrayToCheck", arrayToCheck);
function checkArray(arr) {
    let partSum = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(`Is the element #${i}bigger than 5?`, arr[i] > 5);
        if (arr[i] > 5) {
            partSum += arr[i];
        };
    };

    return partSum;
};

console.log("Checked array gives sum", checkArray(arrayToCheck));

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

let shoppingCart = [
    {name: "item1", id: 1, price: 25, quantity: 1},
    {name: "item2", id: 2, price: 6, quantity: 3},
    {name: "item3", id: 3, price: 15, quantity: 2}
];

console.log("shopping cart is", shoppingCart);

function shoppingCartTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].quantity * arr[i].price;
    };

    return total;
};

console.log("total is", shoppingCartTotal(shoppingCart));

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

function addToShoppingCart(item, cart) {
    cart.push(item);
     let totalItems = 0;
    for (let i = 0; i < cart.length; i++) {
        totalItems += cart[i].quantity;
    };

    return totalItems;
};

let newItem = {name: "newItem", id: 12, price: 2, quantity: 1};
console.log("let's add", newItem);

console.log("added newItem, now we have this many items:", addToShoppingCart(newItem, shoppingCart));

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

function maxShoppingCart(cart) {
    let maxItem = cart[0];
    let maxPrice = maxItem.price;

    for (let i = 1; i < cart.length; i++) {
        if (cart[i].price > maxPrice) {
            maxItem = cart[i];
            maxPrice = maxItem.price;
        } ;
    };

    return maxItem;
};

console.log("Max item is", maxShoppingCart(shoppingCart));

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

function latestShoppingCart(cart) {
    return cart[cart.length-1];
};

console.log("latest item is", latestShoppingCart(shoppingCart));

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

function loopUntil(n) {
    let iter = 0;
    let current// = Math.random() * 9;
    let last// = Math.random() * 9;
    let secondLast// = Math.random() * 9;

    while (!(current >= n && current >= n && secondLast >= n)) {
        iter++;
        secondLast = last;
        last = current;
        current = Math.random() * 9;
        console.log(current);
    }

    return iter;
};

let x = 5;
console.log(`took us ${loopUntil(x)} iterations for n=${x}`);

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

function average(arr) {
        let sum = 0;
        let elems = 0;

        for (let i = 0; i < arr.length; i++) {
            if (typeof(arr[i]) === "number") {
                let asd = arr[i];
                elems++;
                sum += arr[i];
            };
        }

        return (elems > 0) ? (sum / elems) : null;
};

let randomBSArray = [1,3,5, "wtf", true, -4, 4, null]; //(1+3+5-4+4)/5=9/5=1.8

console.log("here's our array", randomBSArray);
console.log("the average is", average(randomBSArray));

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

function longest(strArray) {
    let index = 0;
    for (let i = 1; i < strArray.length; i++) {
        if (strArray[i].length > strArray[index].length) {
            index = i;
        }
    }
    return strArray[index];
};


let someStrings = ["hi", "what's", "going", "on", "long fucking string suddenly", "bye"];

console.log("here are some strings", someStrings);
console.log("longest string is: ", longest(someStrings));


/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

function isNoSpam(emailContent) {
    return !(emailContent.toUpperCase().includes("SPAM") || emailContent.toUpperCase().includes("SCAM"));
};

let spam1 = "SPAM and SCAM";
let spam2 = "spam and scam";
let spam3 = "SPAM and SCAM and spam and scam";
let nospam = "hello darkness my old friend";

console.log("check 'SPAM and SCAM'", isNoSpam(spam1));
console.log("check 'scam and scam'", isNoSpam(spam2));
console.log("check 'SPAM and SCAM and spam and scam'", isNoSpam(spam3));
console.log("check 'hello darkness my old friend'", isNoSpam(nospam));

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

function daysSince(date) {
    let today = new Date();
    let dateDiffms = today - date;
    
    return Math.floor(dateDiffms / (1000 * 60 * 60 * 24));
    //                              ^ms   ^s   ^h   ^days finally
}

let someDate = new Date(2022, 10, 11); // because the fucking month gets fucking zero-indexed for some fucking reason :D

console.log("today is", new Date());
console.log("someDate is", someDate)
console.log("days since 11.11.22", daysSince(someDate));

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

function matrixGenerator(x, y) {
    let matrix = [];
    for (let i = 0; i < x; i++) {
        let row = [];
        for (let j = 0; j < y; j++) {
            row.push(`${i}${j}`);       // String because numbers don't have leading zeros
        };
        matrix.push(row);
    };

    return matrix;
};

console.log(matrixGenerator(3,4));