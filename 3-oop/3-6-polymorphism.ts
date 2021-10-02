{
  // public : default 기본적으로 외부에서 다 볼 수 있는 공개적으로 설정
  // private : 외부에서 절대볼 수 없고 접근도 할 수 없다.
  // protected : 나중에 상속을 할 때 외부에서 접근 할 수 없지만 이 클래스를 상속한 자식 클래스에서만 접근 가능

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMakter {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CommercialCoffeeMakter {
    // static을 붙이는 순간 BEANS_GRAMM_PER_SHOT 상수는 오브젝트 레벨이 아니라,
    // 클래스 레벨로 (클래스 영역의 메모리에 할당이 한번만 됨)
    // CoffeeMaker 클래스로 만드는 오브젝트마다 변수가 메모리에 할당되지 않고, 클래스에 한번만 저장되어져 있어요.

    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }

      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up...🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, public readonly serialNumber: string) {
      super(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log('---------------------');
    machine.makeCoffee(1);
  });
}

// 고양이의 내부 상태 (배고프고, 즐겁고, 기분좋고, 잠오고) 이런것들은 외부에서 설정할 수 있는게 아니예요. 그쵸?

// 외부에서 함부로 설정할 수 없는 것들을 private와 같은 접근 제어자를 써서 외부에서 볼 수 없도록 만드는것을 정보 은닉, 캡슐화라고 해요.

// 외부에서 접근이 가능하고, 해도 되고, 필요한 것들만 노출하는것도 정보 은닉, 캡슐화라고 해요 :)

// 여기서 고양이와 놀아주다 (play)같은 함수만 외부에 노출하는것을 (public으로 설정) 캡슐화라고 해요.

// 자, 이런 함수를 외부에서 호출이 가능하도록 만든다고 해서 추상화라고 하지는 않아요.

// 추상화란, 외부에서 어떤 형태로, 공통적으로 어떻게 이 클래스를 이용하게 할것인가... 이걸 고민하는 단계예요.

// 아, Cat 고양이는 Play라는 함수가 있어. 그리고 모든 동물 Animal과 놀아 줄 수 있어. 그러니깐 Animal 이라는 부모 클래스를 만들어서 play를 할수 있도록 만들어야지!

// class Animal {

//     play() {}

// }

// class Cat extends Animal { }

// 이렇게 상속을 통해 추상화를 할 수도 있죠 :)

// 그러면 동물을 상속하는 모든 동물들은 다 놀아 줄 수 있는 동물일까요?

// 조금 잘못된 추상화 같나요? 그러면 또 이렇게 추상화를 해볼 수 있어요

// 아, 놀아 줄 수 있는 동물 클래스들이 공통적으로 따라야 하는 함수, 인터페이스는 무엇이 있을까? 아하! Playable 이라는 인터페이스를 만들자

// interface Playable {

//     play();

// }

// 이제 이 인터페이스를 구현하는 클래스들은 다 놀아줄 수 있는 클래스야!

// class Cat implements Playable {

//     play() {

//        console.log("재밌게 놀아요옹🐱")

//     }

// }

// class Dog implements Playable {

//     play() {

//        console.log("재밌게 놀아요멍🐶")

//     }

// }

// 아하! Cat이랑 Dog랑 놀아줄 수 있는 친구들이군!

// class Tiger {

// }

// 아뉘, Tiger는 Playable 인터페이스를 구현하지 않았네!

// 놀아줄 수 없는 클래스구나!

// 이런식으로 외부에서 어떻게 이 클래스를 사용할 수 있는지,

// 인터페이스나 다른 부모 클래스를 통해 공통적인 기능들을 추출하는 이런 작업들을 추상화라고 볼 수 있어요 💡

// 제 설명이 도움이 되셨으면 좋겠네요 ;)

// 단순히  외부로  노출여부에따라 캡슐화 추상화가아니라

// 추상화는  클래스를 간편하게 쓰기위해서 어떻게 꾸며야하는지, 공통점을 찾고 불필요한  세부사항은 제거해서  클래스를 간단하게 만드는 단계이고

// 캡슐화는 클래스를 만들때 외부에서 맘대로 사용하지못하도록 데이터를 보호하는 역할이군요!!
