import React from 'react';
import PropTypes from 'prop-types';

const Close = ({ onClick = f => f, className, fill = '#a22' }) => (
  <svg
    className={className}
    width="32"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    onClick={onClick}
  >
    <path
      fill={fill}
      d="M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"
    />
  </svg>
);

Close.propTypes = {
  fill: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Close;
