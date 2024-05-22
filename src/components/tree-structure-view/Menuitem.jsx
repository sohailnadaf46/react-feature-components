

import React, { useState } from "react";
import Menulist from "./Menulist.jsx";
import {FaPlus, FaMinus} from "react-icons/fa"

const Menuitem = ({ item }) => {
  const [displayCurrentChilren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChilren,
      [getCurrentLabel]: !displayCurrentChilren[getCurrentLabel],
    });
  };
  console.log(displayCurrentChilren)

  return (
    <li className="menu-item">
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleChildren(item.label)}>
          {
            displayCurrentChilren[item.label] ? <FaMinus />: <FaPlus />
          }
          </span>
        ) : null}
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChilren[item.label]? (
        <Menulist list={item.children} />
      ) : null}
    </li>
  );
};

export default Menuitem;
