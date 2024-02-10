// Type of Arrays in TypeScript

// Single dimensional array
// Multi dimensional array

// var singledim:number[] = [8,2,8,9,6,99,258] ;
// var multidim:number[][] = [[1,2,3],[8,9,10]]; 

//let numberList: number[] = [1,2,3];
let numList: Array<number> = [1,2,3];
// generic arrays must be defined as: 
// const arr = new Array<string>()
// const arr = string[]

//console.log(numberList);
console.log(Array);
console.log(numList)

let tuple: [string, number];
tuple = ["jfasfjoafjo", 1];

console.log(tuple);


// Type Annotation

let num: number = 2; //type of num is number
let str: string = "bombaaclaat"; //type of str is string
let numberList: number[] = [1,2,3]; //type of numberList is number array


// Type Inference

/* Type inference is a mechanism to determine the type of data at compile time in the absence
 of explicit type annotations. TypeScript will infer the type from the initial value.*/

let myString = 'hello bomvaclatt'; //string
let myBool = true; //boolean
let myNumber = 1.23; //number
let myArray = ['Hello', 'Guradaof']; //string[]

