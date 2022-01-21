/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
/* let john = ages[0];
let mary = ages[1];
let joe = ages[2]; */

let [john, mary, joe] = ages;

console.log(john, mary, joe);
console.log(mary);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    duncan: "accountant"
};
let {mike, jill, duncan} = jobs;
console.log(mike, jill, duncan);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [,maryNative,, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "spanish",
    fifthLanguage: "japanese"
};
let{thirdLanguage, fourthLanguage} = languages2;
console.log(thirdLanguage, fourthLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "pears", "bananas", "pineapples"];
let [favourite, secondFavourite, ...rest] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(rest);

let favouriteFoods = {
    ian: "pizza",
    peter: "roast",
    helen: "pasta",
    david: "steak",
    ralph: "kebab"
};
let {ian, peter, ...others} = favouriteFoods;
console.log(ian);
console.log(peter);
console.log(others);

