// js arrays:
//2 ways of creating an array
const colors = ["red", "green", "yellow", "violet", "pink", "white", "black"];

const bikes = new Array("Honda", "Suzuki", "Hero", "Jawa", "Yamaha");

//push, pop, shift, unshift

const mobiles = ['Samsung','Motorola', 'Apple', 'Xiaomi'];

mobiles.push('Realme', 'OnePlus'); // push 2 elements at the end of an array

console.log(mobiles);

let popped_el = mobiles.pop(); //pop last element and returns it
console.log(popped_el.toLowerCase());
console.log(mobiles);

const birds = new Array(); //initializing an empty array

//unshift
birds.unshift("Parrot", "Canary"); //inserts two elements in order, start of an array
console.log(birds);
birds.unshift("Cuckoo", "Crow", "Falcon", "Hummingbird");
console.log(birds);


//shift
let myBird = birds.shift(); //removes first element of an array and returns it  
console.log(myBird.toUpperCase());
//----------------------------------------
//splice ---> changes the original arrray, add/remove elements at any given index

const bands = ["Beatles", "GnR", "Queen", "Aerosmith"];
//arr.splice(index, no_of_del_items, insert_items)
bands.splice(2,0,"PinkFloyd", "AC/DC"); //insert 2 bands starting at index 2
console.log(`all bands = ${bands}`);

const myBands = bands.splice(1,3,"U2"); //returns 3 bands starting from index 1, insert U2 at index 1
console.log(`removed bands = ${myBands}`);
console.log(`new bands = ${bands}`);
//----------------------------------------
//slice
const fruits = ["apple", "kiwi", "mango", "watermelon", "orange"];
let fruitsCopy = fruits.slice(); //creates a copy of the fruits

console.log(fruits);

const myFruits1 = fruitsCopy.slice(2,4);
console.log(myFruits1);

const myFruits2 = fruitsCopy.slice(-2) ; //gets second last element and last element
console.log(myFruits2);

let fruit_rem = fruitsCopy.pop();
console.log(fruitsCopy);
console.log(fruits);

