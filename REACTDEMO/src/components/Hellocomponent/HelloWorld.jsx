import React, { useState } from 'react';

function HelloWorld() {
  const [message, setMessage] = useState('Chào bạn!');

  const handleClick = () => {
    setMessage('Bạn đã nhấn nút!');
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClick}>Nhấn vào đây</button>
    </div>
  );
}

export default HelloWorld;
