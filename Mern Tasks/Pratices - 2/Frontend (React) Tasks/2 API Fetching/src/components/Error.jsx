import React from "react";

const Error = ({ error }) => {

  return (
    <div className="text-center text-red-500 text-xl font-bold">
      {error}
    </div>
  );
};

export default Error;