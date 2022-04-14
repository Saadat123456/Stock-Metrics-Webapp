import PropTypes from 'prop-types';
import React from 'react';

function Star({
  className, colorDark, colorLight1, colorLight2, colorLight3,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 194.22 184.73"
      className={className}
    >
      <g transform="translate(-262.89 -462.86)">
        <g transform="translate(10.175 71.896)">
          <path
            fill={colorDark}
            d="M369.21 535.67l-27.378-13.792-26.883 14.735 4.657-30.3-22.321-21.014 30.256-4.935 13.088-27.722 14.043 27.251 30.409 3.881-21.577 21.776z"
            transform="rotate(1.005 35281.323 -22271.698) scale(2.21184)"
          />
          <path
            fill={colorLight2}
            d="M380.03 451.38l-30.72 41.819 97.411-31.899z"
          />
          <path fill={colorLight1} d="M349.81 492.31v51.942l-60.63 31.117z" />
          <path
            fill={colorLight1}
            d="M349.81 492.31l59.613 81.476-11.189-65.984z"
          />
          <path
            fill={colorLight2}
            d="M253.1 461.37l96.715 30.942-29.882-40.842z"
          />
          <path fill={colorLight1} d="M349.81 492.31V391.09l29.83 60.357z" />
          <path
            fill={colorLight3}
            d="M289.8 574.53l11.261-66.541 48.757-15.679z"
          />
        </g>
      </g>
    </svg>
  );
}

Star.propTypes = {
  className: PropTypes.string.isRequired,
  colorDark: PropTypes.string.isRequired,
  colorLight1: PropTypes.string.isRequired,
  colorLight2: PropTypes.string.isRequired,
  colorLight3: PropTypes.string.isRequired,
};

export default Star;
