import React, { useEffect, useState } from "react";
//we have to store and extract the users inputn fromn local storage

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key || String(defaultValue))
      )
    } catch (error) {
      console.error(error);
      currentValue = defaultValue;
    };
    return currentValue;
  });

  useEffect(() =>{

    localStorage.getItem(key, JSON.stringify(value));

  },[key, value]);

  return [value, setValue];
};

export default useLocalStorage;
