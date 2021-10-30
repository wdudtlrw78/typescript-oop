interface Employee {
  pay(): void;
}

class FullTimeEmpolyee implements Employee {
  pay() {
    console.log(`full time!!`);
  }

  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }

  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 ❌
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const momo = new FullTimeEmpolyee();
const bob = new PartTimeEmployee();

momo.workFullTime();
bob.workPartTime();

const momoAfterPay = pay(momo);
const bobAfterPay = pay(bob);

const obj = {
  name: 'momo',
  age: 20,
};

const obj2 = {
  animal: 'dug',
  age: 20,
};

console.log(getValue(obj, 'name')); // momo
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // dug

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
