import React from 'react';
import code from 'theme/code.scss';

export const CodeBlock = (props) => {
  return (
    <pre className={code.block}>{props.children}</pre>
  );
};

export const InlineCodeBlock = (props) => {
  return (
    <code className={code.inline}>{props.children}</code>
  );
};
