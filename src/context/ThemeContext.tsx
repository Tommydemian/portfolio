import React, { createContext, useState, useEffect } from 'react';

// defining Context type
type ThemeContextType = {
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
};

// Exporting context itself
export const ThemeContext = createContext<ThemeContextType>({
  theme: null,
  setTheme: () => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const themeContextValue = { theme, setTheme: toggleTheme };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};