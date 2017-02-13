import React from 'react';
import Link from 'react-nuik/lib/components/link';

const SampleLinks = () => {
  return (
    <div>
      <h2>Links</h2>
      <Link href='#'>Link</Link>
      <Link href='http://google.com'>Google</Link>
      <Link href='#' icon="&#x261b;">Link with icon, no variant</Link>
      <Link href='#' variant="before" icon="&#x2601;">Link with icon before</Link>
      <Link href='#' variant="after" icon="❉">Link with icon after</Link>
    </div>
  );
};

export default SampleLinks;
