import React from "react";
import Button from "./Button";
import { buttonList } from "../utils/data";
const ButtonList = () => {
  return (
    <div className="flex overflow-hidden">
      {buttonList.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
