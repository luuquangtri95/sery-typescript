/**
 * todo: ưu điểm interface là decleration merging : cho phép khai báo và khai báo lại và gọp các props với nhau
 *
 * nên dùng interface đến khi cần dùng type
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

// todo: intersection type

interface Employee1 extends Identity, Contact {}
interface Customer1 extends BussinessPartner, Contact {}

let obj: Employee = {
  id: 123,
  name: "tri",
  email: "luuquangtri95",
  phone: "090 751 309",
};
