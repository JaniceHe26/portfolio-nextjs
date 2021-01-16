import React, { useEffect, useState } from 'react';

//reference: 
//https://github.com/nas5w/usecontext-theme-toggling/blob/master/src/ThemeProvider.tsx

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

// interface ThemeProviderProps {
//   children: ReactElement
// }

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    let storageTheme = localStorage.getItem('theme');
    if(storageTheme) {
      //@ts-ignore
      setTheme(storageTheme);
    } else {
      localStorage.setItem('theme', theme); 
    }
  }, []);


  // const toggleTheme = (): void => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  //   localStorage.setItem('theme', theme);
  //   let storageTheme = localStorage.getItem('theme');
  //   //if it does take it out and apply it?
  //   if (storageTheme) {
  //     //@ts-ignore
  //     setTheme(storageTheme);
  //     // storageTheme === 'light' ? setTheme('light') : setTheme('dark');
  //   } else {
  //     //we set it to localStorage
  //     setTheme('light');
  //     localStorage.setItem('theme', theme);
  //   }
  // }

  // useEffect(toggleTheme, []);
      //toggleTheme and set theme to localstorage
      //check if localstorage has key? 
    // let storageTheme = localStorage.getItem('theme');
    //   //if it does take it out and apply it?
    // if (storageTheme) {
    //   storageTheme === 'light' ? setTheme('light') : setTheme('dark');
    // } else {
    //   //we set it to localStorage
    //   setTheme('light');
    //   localStorage.setItem('theme', 'light');
    // }
    // console.log(theme);


  const color = theme === 'light' ? '#000' : '#F9D7D8';
  const background = theme === 'light' ? '#D3839B' : '#576298';

  document.body.style.color = color;
  document.body.style.background = background;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
  
