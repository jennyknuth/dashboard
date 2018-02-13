import config from 'config';
import nio from 'niojs';

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

  /*
   * Listen to a socket room and dispatch an action when
   * data arrives
   */
  bindSocketDataToAction(room, action) {
    nio.source.socketio(config.SOCKET_HOST, [room])
      .pipe(nio.pass((data) => {
        this.dispatcher(action(data));
      }));
  }
}

export default BaseController;
