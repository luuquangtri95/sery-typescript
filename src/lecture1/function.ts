const square = (side: number) => side + 2;
// Parameter 'side' implicitly has an 'any' type: tham số side ngầm hiểu là kiểu any

let greet: Function = () => console.log("hello");
console.log(greet);

// ! parameter có ? phía trước là optional (không bắt buộc)
const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};

add(1, 2, "tri");
add(2, 3);

// ! thêm default value cho params thì sẽ k có thêm ? vào (quan trọng)
const addDefault = (a: number, b: number, c: number | string = 100) => {
  console.log(a + b);
  console.log(c);
};

addDefault(6, 5);

//

const minus = (a: number, b: number): number => a - b;
// tạo type cho function
