import React from "react";
import CompC from "./CompC";
const CompB = ({ data }) => {
  return (
    <div>
      <h2>COMP B</h2>
      <CompC data={data} />
    </div>
  );
};

export default CompB;
