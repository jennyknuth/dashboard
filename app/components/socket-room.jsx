import React from 'react';

import socketRoom from 'theme/socket-room.scss';


const SocketRoom = () => {
  return (
    <div>
      <h2 className={socketRoom.socketRoom}>Socket Room</h2>
      <div className="socketOutput">
        <textarea value="sample output here"></textarea>
      </div>
    </div>
  );
};

export default SocketRoom;
