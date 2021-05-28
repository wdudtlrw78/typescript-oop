{
  // Union Types: OR

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(id: string, password: number): LoginState {
    return {
      response: {
        body: 'logged in',
      },
    };
  }

  // 이 방법은 권장 X -> discriminated.ts
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
