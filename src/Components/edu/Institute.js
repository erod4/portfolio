import React from "react";

const Institute = ({ school, major, projected }) => {
  return (
    <div className="Institue">
      <h1 className="School">{school}</h1>
      <h2 className="Major">{major}</h2>
      {projected && <p className="Projected">[Projected {projected}]</p>}
    </div>
  );
};

export default Institute;
