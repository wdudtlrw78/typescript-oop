{
  // public : default 기본적으로 외부에서 다 볼 수 있는 공개적으로 설정
  // private : 외부에서 절대볼 수 없고 접근도 할 수 없다.
  // protected : 나중에 상속을 할 때 외부에서 접근 할 수 없지만 이 클래스를 상속한 자식 클래스에서만 접근 가능

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // static을 붙이는 순간 BEANS_GRAMM_PER_SHOT 상수는 오브젝트 레벨이 아니라,
    // 클래스 레벨로 (클래스 영역의 메모리에 할당이 한번만 됨)
    // CoffeeMaker 클래스로 만드는 오브젝트마다 변수가 메모리에 할당되지 않고, 클래스에 한번만 저장되어져 있어요.

    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }

      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User('MO', 'YEONGSIK');
  user.age = 27;
  console.log(user.fullName);
}
