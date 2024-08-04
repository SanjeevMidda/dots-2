import React from "react";

const Color = ({ color, text, direction }) => {
  let componentStyles = {
    flexDirection: direction,
  };

  return (
    <div className="color" style={componentStyles}>
      <div className="circle" style={{ background: color }}></div>
      <h1>{text}</h1>
    </div>
  );
};

export default Color;
