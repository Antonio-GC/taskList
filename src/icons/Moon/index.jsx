import React from 'react';
import PropTypes from 'prop-types';

const Moon = ({ width = 24, height = 24, fill = '#ce910d', style = {}, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill={fill}
    style={{ display: 'block', ...style }} // Añade estilos predeterminados y permite sobrescribir
    role="img"
    aria-label="Moon icon"
    {...props} // Propagación de propiedades adicionales
  >
    <path
      d="M12 22c5.523 0 10-4.477 10-10 0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10Z"
    />
  </svg>
);

Moon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  style: PropTypes.object,
};

export default Moon;
