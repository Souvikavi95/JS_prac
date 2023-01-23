const flowers = ["Dalia", "Marigold", "Tulip", "Rose", "Lily", "Orchid"]

console.log("------------FOR OF LOOP--------------");

for (let flower of flowers){
    console.log (`${flower}`);
}

console.log("------------WHILE LOOP--------------");

let fl_count = 0;
while(fl_count < flowers.length){
    console.log(flowers[fl_count]);
    fl_count+=1;
}

console.log("------------SIMPLE FOR LOOP--------------");

for(let i= 0; i<= 30; i+=5){
    console.log(i);
}

console.log("------------FOR IN LOOP--------------");

const car = {type:"Fiat", model:"500", color:"white", drive: "2WD", year:"2016"};

for(let prop in car){
    console.log(`${prop.toUpperCase()} --> ${car[prop]}`);
}

//same thing using Object.keys(obj_name):

for(let pr of Object.keys(car)){ //notice using "FOR OF" loop
    console.log(`${pr} --> ${car[pr]}`);
}

//Object.values(obj_name) returns values