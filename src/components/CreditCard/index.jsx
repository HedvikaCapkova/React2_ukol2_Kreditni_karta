import React, { useRef } from 'react';
import './style.css';

const CreditCard = () => {
  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();

  const handleKeyDown = (e) => {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    if (e.key.length === 1 && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const handleInputChange = (ref, nextRef, e) => {
    if (e.target.value.length === 4 && nextRef) {
      nextRef.current.focus();
    }
  };

  return (
    <div className="formContainer">
      <h1>Credit Card</h1>
      <div className="container">
        <input
          ref={input1Ref}
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => handleInputChange(input1Ref, input2Ref, e)}
          maxLength={4}
        />
        <input
          ref={input2Ref}
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => handleInputChange(input2Ref, input3Ref, e)}
          maxLength={4}
        />
        <input
          ref={input3Ref}
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => handleInputChange(input3Ref, input4Ref, e)}
          maxLength={4}
        />
        <input
          ref={input4Ref}
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => handleInputChange(input4Ref, null, e)}
          maxLength={4}
        />
      </div>
    </div>
  );
};

export default CreditCard;
