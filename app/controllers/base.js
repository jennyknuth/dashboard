class BaseController {

  /*
   * Initialize this controller with a dispatch method
   */
  initialize(dispatcher) {
    this.dispatcher = dispatcher;
  }

  /*
   * Start the controller
   *
   * This should be called after initialize, it can perform any
   * outbound socket connections here.
   */
  start() {
  }
}

export default BaseController;
