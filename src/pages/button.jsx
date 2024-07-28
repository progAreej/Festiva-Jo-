import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`btn-class ${className}`}>
      {children}
    </button>
  );
};

export { Button };