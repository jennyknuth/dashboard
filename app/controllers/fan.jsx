import config from 'config';
import { fanRead } from 'actions/fan';
import BaseController from 'controllers/base';
import nio from 'niojs';

class FanController extends BaseController {
  start() {
    nio.source.socketio(config.SOCKET_HOST, ['fan'])
      .pipe(nio.pass((data) => {
        this.dispatcher(fanRead(data));
      }));
  }
}

export default FanController;
