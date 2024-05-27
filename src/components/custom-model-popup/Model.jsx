import React from "react";

const Model = ({ id, body, header, footer }) => {
  return (
    <div id={id || "model"}>
      <div className="model-content">
        <div className="header">
          <span className="close-model-icon"></span>
          <h2>{header ? header : "header"}</h2>
        </div>
        <div className="body">{body ? body : "body"}</div>
        <div className="footer">{footer ? footer : "footer"}</div>
      </div>
    </div>
  );
};

export default Model;
