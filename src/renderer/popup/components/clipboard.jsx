import React, { useEffect, useState } from 'react';

const Clipboard = function Clipboard() {
  const [clipboard, setClipboard] = useState('');

  useEffect(async () => {
    const text = await window.electron.getClipboardText();
    setClipboard(text);
  });

  return (
    <div>
      <p>Clipboard Component</p>
      <p>{clipboard}</p>
    </div>
  );
};

export default Clipboard;
