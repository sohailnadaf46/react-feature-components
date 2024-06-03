import React, { useRef, useState } from "react";
import UseOnClickOutside from "./index";

const UseOnClickOutsideTest = () => {
  const [showContent, seShowContent] = useState(false);
  const ref = useRef();
  UseOnClickOutside(ref, () => seShowContent(false));
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this, otherwise it wont close
            if you click inside the container
          </p>
        </div>
      ) : (
        <button onClick={() => seShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOnClickOutsideTest;
