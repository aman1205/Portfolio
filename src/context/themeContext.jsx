import React, { createContext,useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  const value= darkThemeMq.matches ? 'dark' : 'light'; 
  const [isDarkTheme, setIsDarkTheme] = useState(value);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

