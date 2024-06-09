import React, { useRef } from "react";

const ScrollToSection = () => {
  const sectionRef = useRef(null);
  const data = [
    {
      label: "first card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
        margin:"1rem"
      },
    },
    {
      label: "second card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
        margin:"1rem"
      },
    },
    {
      label: "third card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
        margin:"1rem"
      },
    },
    {
      label: "fourth card",
      style: {
        width: "100%",
        height: "600px",
        background: "pink",
        margin:"1rem"
      },
    },
    {
      label: "fifth card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
        margin:"1rem"
      },
    },
  ];
  function handleParticularScroll(){
    sectionRef.current?.scrollIntoView({behavior:"smooth"})
  }
  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleParticularScroll}>Click to scroll</button>
      {data.map((dataItem, index) => (
        <div
          ref={index === 4 ? sectionRef : null}
          key={dataItem.label}
          style={dataItem.style}
        >
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;
