{
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };

  type SuccessState = {
    result: 'success';
  };
  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ReslutState {}
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      /// login...
    }
  }

  class App {
    constructor(private userService: UserService) {}

    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
