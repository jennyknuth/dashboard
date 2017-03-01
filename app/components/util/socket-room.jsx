import React from 'react';
import socketRoom from 'theme/socket-room.scss';

const SocketRoom = ({ data }) => {
  return (
    <div>
      <h2 className={socketRoom.socketRoom}>Socket Room</h2>
      <div className="socketOutput">
        <textarea readOnly value={JSON.stringify(data, null, 4)}></textarea>
      </div>
    </div>
  );
};

export default SocketRoom;
