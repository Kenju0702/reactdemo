import React, { useState } from 'react';

const Goodbye = () => {
  // Create a state variable to control the visibility of the "hello" message
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    alert('Ngon');
    
    setShowMessage(true);
  };
  return (
    <div>
      GoodbyeComponent
      
      <button onClick={handleClick}>Click me</button>
      
   
      {showMessage && <p>hello</p>}
    </div>
  );
};

export default Goodbye;
