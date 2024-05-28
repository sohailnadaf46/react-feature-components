import React, { useState } from "react";
import Model from "./Model";
import "./style.css";

const Modeltest = () => {
  const [showModelPopup, setShowModelPopup] = useState(false);

  const handleModelPopup = () => {
    setShowModelPopup(!showModelPopup);
  };
  return (
    <div className="wrapperPopup">
      <button onClick={handleModelPopup}>Open Model Popup</button>
      {showModelPopup && (
        <Model
          body={<div>This is the custom modifcation for body</div>}
          header={<div>This is the custom modifcation for header</div>}
          footer={<div>This is the custom modifcation for footer</div>}
        />
      )}
    </div>
  );
};

export default Modeltest;
