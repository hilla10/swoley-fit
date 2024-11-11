import React from 'react';

const Button = ({ text, func }) => {
  return (
    <button
      onClick={func}
      className='px-8 mx-auto py-4 rounded-md border-blue-400 border-solid border-2 blueShadow duration-600'>
      <p>{text}</p>
    </button>
  );
};

export default Button;
