/* Stream Lifecycle */
const createStreamer = function(types, url, rooms, ...args) {
  let subs = 0, socket = undefined;

  return {
    subscribe(dispatch) {
      subs++;

      // Start the socket if it doesn't exist.
      // TODO this thing only dispatches to the first dispatch it gets
      // during a sub, is that an issue? Why would there be more than one
      // store?
      if (!socket) {
        console.log('starting');
        dispatch({ type: types.onStart });
        socket = nio.source.socketio(url, rooms, ...args);
        socket.pipe(nio.pass(signal => dispatch({ type: types.onSignal, signal })));
      }

      return {
        unsubscribe() {
          subs--;
          if (subs === 0 && socket) {
            console.log('ending');
            dispatch({ type: types.onEnd });
            socket.pause();
            socket = undefined;
          }
        }
      };
    }
 };
};

const streamsKey = "nio__streamDictionary";


// Stream Provider/Injector
class StreamProvider extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.streams = props.streams;
  }
  getChildContext() {
    return { [streamsKey]: this.streams }
  }
  render() {
    return React.Children.only(this.props.children);
  }
}

const StreamMap = React.PropTypes.objectOf(React.PropTypes.func.isRequired);
StreamProvider.propTypes = {
  streams: StreamMap.isRequired,
  children: React.PropTypes.element.isRequired,
};
StreamProvider.childContextTypes = {
  [streamsKey]: StreamMap,
};

// needsStream
// This looks shady...
function needsStreams(...streamNames) {
  return function wrapWithNeedStreams(WrappedComponent) {

   const wrappedComponentName = WrappedComponent.displayName
      || WrappedComponent.name
      || 'Component';

    const displayName = `NeedsStream(${wrappedComponentName})`;

    class NeedsStream extends React.Component {
      constructor(props, context) {
        super(props, context);
        this.streams = streamNames.map(name => context[streamsKey][name]);
      }
      componentDidMount() {
        this.subs = this.streams.map(stream => stream.subscribe(this.props.dispatch));
      }
      componentWillUnmount() {
        this.subs.forEach(sub => sub.unsubscribe());
      }
      render() { return React.createElement(WrappedComponent, this.props); }
    }

    NeedsStream.contextTypes = {
      [streamsKey]: StreamMap,
    };

    NeedsStream.displayName = displayName;

    return ReactRedux.connect(/* need this to get a clean dispatcher */)(NeedsStream);
  };
}
