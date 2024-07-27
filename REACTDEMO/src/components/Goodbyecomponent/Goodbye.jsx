import React from 'react';

const Goodbye = () => {
  // Định nghĩa phương thức handleClick
  const handleClick = () => {
    alert('Ngon');
  };

  return (
    <div>
      GoodbyeComponent
      {/* Đặt nội dung cho nút và gán sự kiện onClick */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Goodbye;
