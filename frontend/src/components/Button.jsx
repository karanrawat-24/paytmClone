import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <div>
      <button
        onClick={onclick}
        className='w-full text-white bg-gray-800 hover:bg-gray-900 p-2 rounded focus:outline-none focus:ring-4 focus:ring-gray-300 '
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
