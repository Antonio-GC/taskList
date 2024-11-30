import React from 'react';
import { useTheme } from '../../context/ThemeContext'; // Importar el contexto
import Sun from '../../icons/Sun/index'; // Importar el ícono Sun
import Moon from '../../icons/Moon'; // Importar el ícono Moon

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '5px 5px',
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        border: '1px solid #ccc',
        cursor: 'pointer',
        borderRadius:"50%",
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      {theme === 'light' ? (
        <>
          <Sun width={20} height={20} /> 
        </>
      ) : (
        <>
          <Moon width={20} height={20} /> 
        </>
      )}
    </button>
  );
};

export default ThemeToggleButton;
