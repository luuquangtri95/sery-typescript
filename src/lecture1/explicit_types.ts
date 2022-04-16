// khai báo type ngay từ đầu

let myName1: string = "tri";
let age1: number = 27;
let isAuth1: boolean;

isAuth1: false;

// bắt buộc studentList là 1 mảng các sting, nên không thê push khác kiểu dữ liệu vào mảng
let studentList: string[] = ["nam", "hung"];

// unior

// ! array, object, function đều là object, nên khai báo type object đều có thể đưa vào array mixed2 đc

let mixed2: (string | number | object | boolean)[];

mixed2 = [
  1,
  "tri",
  { a: 3 },
  true,
  function () {
    console.log("A");
  },
];

//
let hobby: "book" | "music";
// hobby = "movie"; => //! vì hobby chỉ có thể là 1 trong 2 cái value trên, 1 book 2 music

let isActive: "active" | "inactive";

// object

let persons: object;
persons = {
  name: "tri",
  age: 12,
};

let classroom: {
  name: string;
  class: string;
  isActive?: boolean;
};

classroom = {
  name: "123",
  class: "12a7",
};
