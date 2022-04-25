/**
 * 1 vài lưu ý với function
 * todo: function không return nó sẽ là void
 */

function sayHello() {
  console.log("hi");
}
// func sayHello():void

function sum(a: number, b: number) {
  return a + b;
}
// function sum():number

// todo: explicit return type
function sum2(a: number, b: number): number {
  return a + b;
}

// todo: optional and default value
/**
 * ! lưu ý: không sử dụng optional và default value => chỉ dùng 1 trong 2
 */

function getLength(numberList?: number[]) {
  return Array.isArray(numberList) ? numberList.length : 0;
}
//function getLength(numberList?: number[] | undefined): number

// default value
function getLength2(numberList: number[] = []) {
  return Array.isArray(numberList) ? numberList.length : 0;
}

// todo: destructring
function createStudent(student: { id: number; name: string; age: number }) {
  const { id, name, age } = student;
  console.log(id, name, age);
}

// cách 2

interface NewStudent {
  id: number;
  name: string;
  age?: number;
}

function createNewStudent({ id, name, age }: NewStudent) {
  console.log(id, name, age);
}

createNewStudent({
  id: 1,
  name: "bop",
  age: 18,
});
