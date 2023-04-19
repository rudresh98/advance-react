import React from "react";
import CompA from "./CompA";
import DataContext from "../contextapi/dataContext";
import CompC from "./CompC";
const Main = () => {
  const data = [
    {
      name: "rahul",
      fname: "rajesh",
    },
  ];
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>CONTEXT API</h1>
      </div>

      <DataContext.Provider value={data}>
        <CompC />
        <CompA />
      </DataContext.Provider>
    </>
  );
};

export default Main;
