import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import light from '../../assets/light.svg';

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
