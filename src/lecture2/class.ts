// class
export class Employee {
  public name: string;
  private age: number;
  readonly male: boolean;

  constructor(n: string, a: number, m: boolean) {
    this.name = n;
    this.age = a;
    this.male = m;
  }

  print() {
    return `Name ${this.name} - Age ${this.age} - Male ${this.male}`;
  }
}

const henry = new Employee("tri", 27, true);
console.log(henry.print());

//

class Mouse {
  constructor(public eat: boolean, public sleep: boolean) {}
}

const mouse1 = new Mouse(true, false);

//

let employees: Employee[] = [];
employees.push(henry);
console.log(employees);
