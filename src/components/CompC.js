import React, { useContext } from "react";
import DataContext from "../contextapi/dataContext";

const CompC = () => {
  const data = useContext(DataContext);
  console.log({ data });

  return (
    <div>
      <h1>COMPC {data && data[0].name}</h1>
    </div>
  );
};

export default CompC;
