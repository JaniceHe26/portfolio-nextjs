import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const Button: React.FC = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>Change Mode</button>
  )
}

export default Button;
