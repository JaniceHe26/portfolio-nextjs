import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import Image from 'next/image';


const Button: React.FC = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <>
    {theme === 'dark' ?

      <button className='btn-dark' onClick={toggleTheme}><Image src="/static/assets/images/light.svg" alt="Light mode button" width={15} height={15} />
      </button> :
      <button className='btn-light' onClick={toggleTheme}><Image src="/static/assets/images/crescentmoon.svg" alt="Light mode button" width={15} height={15} /></button>
    }
    </>
  )
}

export default Button;
