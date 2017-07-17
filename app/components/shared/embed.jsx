import React from 'react';


const EmbedScreen = ({ url }) => {
  console.log(url);
  return (
    <iframe src={url && url} width='700' height='500'>
      <p>Your browser does not support iframes.</p>
    </iframe>
  );
};

EmbedScreen.propTypes = {
  url: React.PropTypes.string,
};

export default EmbedScreen;
