//basic function syntax

function helloMe(name){
    return `Hello ${name}`
}

console.log(helloMe("Robert"));

//functions in js is an object

const addition = function (num1, num2){
    return num1+num2;
}

console.log(addition(45,23))

//functions as a return value of another function

function multiplyBy(x){
    return function(n){
        return x*n;
    }
}

const triple = multiplyBy(3); //returns triple as a function
const half = multiplyBy(0.5);
console.log(triple(30));
console.log(half(70));

//callback- functions that accept functions as arguments

nums = [10,24,34,56,68,72,88,95]

const numsDouble = nums.map(function(x){
    return x*2;
})

const numsTriple = nums.map (x => x*3); //arrow function


console.log(numsDouble)
console.log(numsTriple)

//forEach runs function for each element one at a time, idx is optional param
nums.forEach(function (el, idx) { 
    console.log(idx ,el)
});

//FILTER returns a subarray with conditions met in the function

nums2 = [13,15,18,20,24,26,27,31,35,37,41,45,46,48,50,52,57,61]

const oddNums = nums2.filter(x=>x%2 ===1) //using arrow functions with implicit returns
const evenNums = nums2.filter(function(y){ //using general function def
    return y%2===0
})
console.log(oddNums)
console.log(evenNums)

//reduce to sum all numbers
const nums2Total = nums2.reduce((accum, currVal)=>{
    return accum +currVal
})
console.log(nums2Total)

//WORKING WITH SOME OBJECTS//

moviesDb = [{
    name : "The Shawshank Redemption",
    year : 1994,
    director: "Frank Darabont",
    rating: 9.3,
    genre: "Drama"
},{
    name : "The Dark Knight",
    year : 2008,
    director: "Christopher Nolan",
    rating: 9.0,
    genre: "Thriller"
},{
    name : "Forrest Gump",
    year : 1994,
    director: "Robert Zemeckis",
    rating: 8.8,
    genre: "Romance"
},{
    name : "Inception",
    year : 2010,
    director: "Christopher Nolan",
    rating: 8.7,
    genre: "Adventure"
},{
    name : "The Matrix",
    year : 1999,
    director: "Lana Wachowski",
    rating: 8.7,
    genre: "Action"}
]

const after2000s = moviesDb.filter(function(movie){
    return movie.year >= 2000
})
console.log(after2000s)

const allMovieNames = moviesDb.map(m => m.name.toUpperCase())
console.log(allMovieNames)

//REDUCE extras
const numArr = [45,33,27,56,98,67,52,37,41,80,44,21,14,5,88,96]

//returning max and min
const maxNumArr = numArr.reduce((max, cval)=>{
    if (max > cval) return max
    return cval
 })
//using Math.min to get same thing
const minNumArr = numArr.reduce((min, cval)=> Math.min(min, cval)) //using implicit return
//log max and min in console
console.log(`max: ${maxNumArr}  min: ${minNumArr}`)

//REDUCE to tally or count occurence in an array as an object
const allVotes = ['y','y','n','y','n','y','NA','n','n','y','NA','y','y','n','y','n','y','y','NA','y','n','y','n','y','n','y','n','y','y','n','y','n','y']
const votesRes = allVotes.reduce((tally,cv)=>{
    if(tally[cv]){
        tally[cv]++
    }
    else{
        tally[cv] = 1 //if obj[cv] not there make default value 1
    }
    return tally
} ,{}) //first tally is empty object

console.log(votesRes)

//REDUCE to group objects, such as moviesDb group movies by rating

const ratedMoviesDb = moviesDb.reduce((startMovie, currMovie)=>{
    const currRating = Math.floor(currMovie.rating) //get current rating as a floor value
    if (!startMovie[currRating]){
        startMovie[currRating] = []
    } //if currRating key not found make that an empty array
    startMovie[currRating].push(currMovie) //otherwise push movie to that key of currRating
    return startMovie
}, {}) //initialize startMovie as an empty object

console.log(ratedMoviesDb)