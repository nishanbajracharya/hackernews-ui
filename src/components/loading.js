import React from 'react';
import PropTypes from 'prop-types';

export const LoadingSVG = ({
  stroke = '#49c'
}) => (
  <svg width="38" height="38" xmlns="http://www.w3.org/2000/svg" stroke={stroke}>
    <g
      transform="translate(1 1)"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    >
      <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
      <path d="M36 18c0-9.94-8.06-18-18-18">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
);

LoadingSVG.propTypes = {
  stroke: PropTypes.string
};

const Loading = ({ className = "" }) => (
  <div className={`loading ${className}`} />
);

Loading.propTypes = {
  className: PropTypes.string
};

export default Loading;
