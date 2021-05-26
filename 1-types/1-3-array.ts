{
  // Array
  const fruits: string[] = ['apple', 'banana'];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {}

  // Tuple (권장 X)-> interface, type alias, class 대체해서 사용

  let student: [string, number];
  student = ['name', 123];
  student[0];
  student[1];

  // 잘 사용한 예시 - ex) 리액트 const [name, age] = student
}
