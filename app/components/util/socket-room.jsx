import React from 'react';
import socketRoom from 'theme/socket-room.scss';

const SocketRoom = ({ data, height }) => {
  return (
    <div>
      <h2 className={socketRoom.socketRoom}>Socket Room</h2>
      <div className="socketOutput">
        <textarea readOnly rows={height} value={JSON.stringify(data, null, 4)}></textarea>
      </div>
    </div>
  );
};

export default SocketRoom;
