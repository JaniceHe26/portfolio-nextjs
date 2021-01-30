import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const Button: React.FC = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <>
    {theme === 'dark' ?

      <button className='btn' onClick={toggleTheme}>light</button> :
      <button className='btn' onClick={toggleTheme}>dark</button>
    }
    </>
  )
}

export default Button;
