// function signature
let greet3: Function;

greet3 = () => console.log("hello");

let greet4: (a: number, b: string) => void; // chữ ký của hàm

greet4 = (id: number, name: string) => console.log(name);
//
let calculate: (a: number, b: number, c: string) => number;
calculate = (number1: number, number2: number, action: string) =>
  action === "add" ? number1 + number2 : number1 - number2;

//
type Student2 = { name: string; age: number };

let printStudent2: (student: Student2) => void;

printStudent2 = (myStudent: Student2) => {
  console.log(myStudent.name);
  console.log(myStudent.age);
};

console.log(printStudent2({ name: "tri", age: 20 }));
