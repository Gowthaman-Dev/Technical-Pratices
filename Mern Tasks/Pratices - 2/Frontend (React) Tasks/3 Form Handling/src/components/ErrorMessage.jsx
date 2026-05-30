import React from "react";

const ErrorMessage = ({ message }) => {

  return (
    <p className="text-red-500 text-sm font-medium">
      {message}
    </p>
  );
};

export default ErrorMessage;