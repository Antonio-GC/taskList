import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../context/ThemeContext';
import './style.css';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { theme } = useTheme(); // Obtener el tema actual

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={`tabs-container ${theme}`}>
      {/* Contenedor de las pestañas */}
      <div className="tabs-header">
        {React.Children.map(children, (child, index) => (
          <button
            key={index}
            className={`tab-button ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>

      {/* Contenido de la pestaña activa */}
      <div className="tabs-content">
        {React.Children.map(children, (child, index) => {
          if (index === activeTab) return child;
          return null;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
};

// Componente de Tab Individual
const Tab = ({ children }) => {
  return <div>{children}</div>;
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
};

// Exportar ambos componentes
Tabs.Tab = Tab; // Asociar Tab como propiedad de Tabs
export default Tabs;
