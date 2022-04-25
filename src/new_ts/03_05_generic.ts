// todo: kiểu dữ liệu có nhận tham số

interface List<T> {
  length: number;
  filter: Function;
  [index: number]: T;
}

const numberList: List<number> = [1, 2, 3, 4];
const wordList: List<string> = ["luu", "quang"];

const result = numberList.filter((x: number) => x > 2);

console.log(result);
