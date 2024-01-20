import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-200 rounded-lg px-5 py-2 mx-2 text-nowrap ">
        {name}
      </button>
    </div>
  );
};

export default Button;
