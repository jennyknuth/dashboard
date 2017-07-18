import React from 'react';

import embed from 'theme/embed';

const EmbedScreen = ({ url, width, height }) => {
  return (
    <iframe className={embed.iframe} src={url && url} width={width && width} height={height && height}>
      <p>Your browser does not support iframes.</p>
    </iframe>
  );
};

EmbedScreen.propTypes = {
  url: React.PropTypes.string,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
};

export default EmbedScreen;
