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


  const color = theme === 'light' ? '#000' : '#000';
  const background = theme === 'light' ? '#92d5b8' : '#f49a92';

  // const background = theme === 'light' ? '#D3839B' : '#576298';

  document.body.style.color = color;
  document.body.style.background = background;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
  
