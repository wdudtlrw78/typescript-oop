{
  // Type Aliases

  type Text = string;
  const name: Text = 'momo';
  const address: Text = 'korea';

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'momo',
    age: 27,
  };

  // String Literal Types

  type Name = 'name';
  let momoName: Name;
  momoName = 'name';

  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
}
