//todo:  type alias => tạo type riêng do mình tự định nghĩa

type StringOrNumber = string | number;
type Student = { name: string; id: StringOrNumber };

const studentDetails = (id: StringOrNumber, studentName: string): void => {
  console.log(`student ${studentName} has id : ${id}`);
};

studentDetails(123, "luu quang tri");

const greet2 = (user: Student) => {
  console.log(user.name);
  console.log(user.id);
};

console.log(greet2({ name: "tri", id: 123 }));
