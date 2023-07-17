// src/components/common/ButtonWhite.js

import React from 'react';
import './ButtonWhite.scss';

const ButtonWhite = ({ text }) => {
  return (
    <button className="button-white">
      {text}
    </button>
  );
}

export default ButtonWhite;
