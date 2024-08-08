import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={`text-white px-4 py-2 rounded ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: 'bg-gray-500 hover:bg-gray-600',
  onClick: () => {},
};

export default Button;
