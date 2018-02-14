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
  bindTopicToAction(topic, action) {

    const client = new PubkeeperClient({
      server: config.PK_SERVER,
      jwt: config.PK_JWT,
      brews: [
        new WebSocketBrew({
          brewerConfig: {
            hostname: config.PKWEBSOCKET_HOST,
            port: config.PKWEBSOCKET_PORT,
            secure: true,
          },
        }),
      ],
    });

    client.connect().then(() => {

      client.addPatron(topic, (patron) => {

        const handler = (rawData) => {
          const data = JSON.parse(new TextDecoder().decode(rawData))[0];
          this.dispatcher(action(data));
        };

        patron.on('message', handler);

        return () => {
          // deactivation/tear-down
          patron.off('message', handler);
        };
      });


    });
  }
}

export default BaseController;
