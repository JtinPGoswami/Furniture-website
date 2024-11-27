import React from "react";
import Chair_card from "./Chair_card";
const Chair_2 = () => {
  return (
    <div className="md:flex md:flex-row flex-col w-4/5 m-auto justify-between items-center gap-3 md:mt-0 mt-96 ">
      <Chair_card />
      <Chair_card />
      <Chair_card />
    </div>
  );
};

export default Chair_2;
