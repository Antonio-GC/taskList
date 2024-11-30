import { useState, useEffect } from 'react'
import ListComponent from './components/ListComponents'
import ThemeToggleButton from './components/ThemeToggleButton';
import { useTheme } from './context/ThemeContext';
import Tabs from './atoms/Tab';
import Moon from './icons/Moon';
import Sun from './icons/sun';

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
      <Tabs>
        <Tabs.Tab label="Pestaña 1">
          <p>Contenido de la pestaña 1</p>
        </Tabs.Tab>
        <Tabs.Tab label="Pestaña 2">
          <p>Contenido de la pestaña 2</p>
        </Tabs.Tab>
        <Tabs.Tab label="Pestaña 3">
          <p>Contenido de la pestaña 3</p>
        </Tabs.Tab>
      </Tabs>
    </>
  )
}

export default App
