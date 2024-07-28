import React from "react";

const Alert = ({ children, variant, className, ...props }) => {
  const variantClass =
    variant === "success" ? "alert-success-class" : "alert-default-class";
  return (
    <div {...props} className={`alert-class ${variantClass} ${className}`}>
      {children}
    </div>
  );
};

const AlertDescription = ({ children }) => {
  return <div className="alert-description-class">{children}</div>;
};

export { Alert, AlertDescription };