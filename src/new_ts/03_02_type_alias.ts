// type alias và interface

/**
 * alias: cách đặt tên mới cho 1 số kiểu dữ liệu
 * interface: đặt tên cho object type
 *
 * =>> lưu ý: interface chỉ dùng cho "object" không dùng cho primitive type
 */

// todo: type alias

type StudentName = string;
type StudentAge = number;
type IsTopStudent = boolean;

type Students = {
  readonly id: number;
  name: string;
  age?: number; //optional: có hoặc không có đều được
};

const alice: Students = {
  id: 1,
  name: "my",
};

// ! lưu ý: khi có readonly thì không thể thay đổi giá trị key đó
// alice.id = 2; // error id readonly

// todo: union type
/**
 * kiểu dữ liệu này kết hợp 1 hoặc 2 hoặc nhiều kiểu dữ liệu khác nhau. kết quả nhận đượu phải nằm trong số kiểu dữ liệu cho phép
 */

type Status = "active" | "inactive";
type ProductStatus = 1 | 2 | 3 | 4;
type StudentId = number | string;

// todo: intersection type
/**
 * gom các union type, interface với nhau tạo thành 1 type mới
 */

interface BussinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Contact & Identity;
type Customer = BussinessPartner & Contact;

const customer: Customer = {
  name: "tri",
  credit: 123,
  email: "luuquangtri95@gmail.com",
  phone: "0907521309",
};
