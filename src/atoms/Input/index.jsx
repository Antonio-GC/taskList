import React from 'react';
import { useTheme } from '../../context/ThemeContext'; // Importar el contexto

const Input = ({ style = {}, ...props }) => {
  const { theme } = useTheme(); // Obtener el tema actual

  // Estilos dinámicos según el tema
  const inputStyles = {
    light: {
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid #ccc',
      placeholderColor: '#aaa',
      focusBorder: '#007bff',
    },
    dark: {
      backgroundColor: '#333',
      color: '#fff',
      border: '1px solid #555',
      placeholderColor: '#888',
      focusBorder: '#007bff',
    },
  };

  const currentTheme = inputStyles[theme];

  return (
    <input
      {...props}
      style={{
        padding: '10px 15px',
        borderRadius: '5px',
        fontSize: '16px',
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.color,
        border: currentTheme.border,
        outline: 'none',
        transition: 'border-color 0.3s ease, background-color 0.3s ease',
        ...style, // Permite sobrescribir estilos personalizados
      }}
      onFocus={(e) => {
        e.target.style.borderColor = currentTheme.focusBorder;
      }}
      onBlur={(e) => {
        e.target.style.borderColor = currentTheme.border;
      }}
      placeholder="Escribe aquí..."
    />
  );
};

export default Input;
