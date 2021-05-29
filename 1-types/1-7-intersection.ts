{
  // Intersection Types: &

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    emplyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.emplyeeId, person.work());
  }

  internWork({
    name: 'momo',
    score: 1,
    emplyeeId: 123,
    work: () => {},
  });
}
