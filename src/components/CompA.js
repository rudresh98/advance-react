import React, { useContext } from "react";
import DataContext from "../contextapi/dataContext";

const CompA = () => {
  const data = useContext(DataContext);
  console.log(data);
  return <div>COMP A {data[0].fname}</div>;
};

export default CompA;
