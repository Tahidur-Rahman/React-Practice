import React, { useState } from "react";

function UseStateHook() {
  const [state, setstate] = useState(false);
  const valueChange = () => {
    setstate(!state);
  };
  let name = state ? "tahid" : "tahidur";
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={valueChange}>Click me !</button>
    </div>
  );
}

export default UseStateHook;
