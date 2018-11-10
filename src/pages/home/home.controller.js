class HomeController {
  constructor() {
    this.greeting = "Hello, username!"
  }

  $onInit() {
    console.log("Message from home controller")
  }
}

export default HomeController;
