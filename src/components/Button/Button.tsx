import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import Image from "next/image";

const Button: React.FC = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <>
          <button className="btn-dark" onClick={toggleTheme}>
          <span style={{fontSize: '38.6px'}}>{`{/*`}</span>
            <Image
              src="/static/assets/images/light.svg"
              alt="Light mode button"
              width={38.6}
              height={38.6}
            />
          <span style={{fontSize: '38.6px'}}>{`*/}`}</span>
          </button>
        </>
      ) : (
        <>
          <button className="btn-light" onClick={toggleTheme}>
          <span style={{fontSize: '38.6px'}}>{`{/*`}</span>
            <Image
              src="/static/assets/images/crescentmoon.svg"
              alt="Light mode button"
              width={38.6}
              height={38.6}
            />
          <span style={{fontSize: '38.6px'}}>{`*/}`}</span>
          </button>
        </>
      )}
    </>
  );
};

export default Button;
