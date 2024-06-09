import React from "react";
import useWindowResize from "./index";


const UseWindowResizeTest = () => {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div style={{margin:"2rem"}}>
      <h1>Use Window Resize Hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
};

export default UseWindowResizeTest;
