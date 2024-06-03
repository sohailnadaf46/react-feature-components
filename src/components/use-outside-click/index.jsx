import React, { useEffect } from "react";
//when creating a hook they should not return any jsx element not even empty because hooks are for logic and not for returning elements to the dom
// Hooks do not return JSX; they manage state and side effects

const UseOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, handler]);
};

export default UseOnClickOutside;
