import React from "react";

const Card = ({ children, className, ...props }) => {
  return (
    <div {...props} className={`card-class ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return <div className="card-header-class">{children}</div>;
};

const CardContent = ({ children }) => {
  return <div className="card-content-class">{children}</div>;
};

export { Card, CardHeader, CardContent };