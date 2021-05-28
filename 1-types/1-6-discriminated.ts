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

  // discriminated : Point -> result (공통인 프로퍼티를 가지고 있음으로서, 구분하기 쉽고 나중에 분기처리할 때 유용하다)
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(id: string, password: number): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in',
      },
    };
  }

  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
