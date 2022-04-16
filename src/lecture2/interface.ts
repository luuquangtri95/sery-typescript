// interface: đặt tên cho 1 object type
interface Person {
  name: string;
  age: number;
  speak(lang: string): void;
  spend(amount: number): number;
}

//! interface allow declaration merging
interface Person {
  firstName?: string;
  lastName?: string;
}

const herry: Person = {
  name: "luu quang tri",
  age: 27,

  speak(text: string) {
    console.log(text);
  },

  spend(number: number) {
    return number;
  },
};
