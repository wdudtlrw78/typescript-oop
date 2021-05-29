{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript

  // union
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';

  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;

  // 결론부터는 Enum은 안쓴다. 왜나햐면 Type이 정확하게 보장되지가 않는다.
  // 10으로 해도 컴파일 에러가 발생하지 않는다.
  // 그래도 union 으로 대체해서 사용한다.
  day = Days.Tuesday;
  day = 10;
  console.log(day);

  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday';
}
