import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const ThemeContext = createContext();

// Proveedor del contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Estado del tema

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); // Cambia el tema
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para usar el contexto
export const useTheme = () => {
  return useContext(ThemeContext);
};
