import React from 'react';
import { useTheme } from '../../context/ThemeContext'; // Importar el contexto

const Button = ({ children, style = {}, ...props }) => {
  const { theme } = useTheme(); // Obtener el tema actual

  // Estilos dinámicos según el tema
  const buttonStyles = {
    light: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: '1px solid #007bff',
      hoverBackground: '#0056b3',
      hoverColor: '#fff',
    },
    dark: {
      backgroundColor: '#444',
      color: '#eee',
      border: '1px solid #666',
      hoverBackground: '#333',
      hoverColor: '#ddd',
    },
  };

  const currentTheme = buttonStyles[theme];

  return (
    <button
      {...props}
      style={{
        padding: '10px 20px',
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.color,
        border: currentTheme.border,
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        ...style, // Sobrescribir estilos opcionalmente
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = currentTheme.hoverBackground;
        e.target.style.color = currentTheme.hoverColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = currentTheme.backgroundColor;
        e.target.style.color = currentTheme.color;
      }}
    >
      {children}
    </button>
  );
};

export default Button;
