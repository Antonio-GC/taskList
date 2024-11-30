import { useState, useEffect } from 'react'
import ListComponent from './components/ListComponents'
import ThemeToggleButton from './components/ThemeToggleButton';
import { useTheme } from './context/ThemeContext';

function App() {

  const { theme } = useTheme();

  // Aplicar estilos globales según el tema
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#f4f4f4' : '#121212';
    document.body.style.color = theme === 'light' ? '#000' : '#fff';
  }, [theme]);
  return (
    <>
      <ListComponent/>
      <ThemeToggleButton/>
    </>
  )
}

export default App
