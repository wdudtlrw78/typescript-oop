/**
 * Let's make a calculator 🧮
 */

// My Code

// function calculate(operator: string, num1: number, num2: number) {
//   if (operator === 'add') return num1 + num2;
//   else if (operator === 'substract') return num1 - num2;
//   else if (operator === 'multiply') return num1 * num2;
//   else if (operator === 'divide') return num1 / num2;
//   else if (operator === 'remainder') return num1 % num2;
// }

// Elie Code

type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(command: Command, a: number, b: number): number {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    case 'remainder':
      return a % b;
    default:
      throw new Error('unknow error');
  }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
