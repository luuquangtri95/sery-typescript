// todo : explicit types
// khai bao tường minh

let count1: number = 123;
let studentName: string = "alice";
let isActivate: boolean = true;
let numberList1: number[] = [1, 2, 3];

// todo : infered types
// typescript sẽ tự hiểu kiểu dữ liệu
//  nếu ts không hiểu thì mặc định nó là kiểu "any"

// ------------------------

// todo : eraised types
// => sau khi complie từ ts sang JSON, tất cả type annotation sẽ bị xóa

// todo : down leveling
// => tùy vào target là môi trường nào, thì compile từ ts sang ts sẽ theo target đó
