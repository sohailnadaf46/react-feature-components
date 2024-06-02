import React from "react";
import useFetchCustomHook from ".";

const useFetchHookTest = () => {
  const { data, error, loading } = useFetchCustomHook(
    "https://dummyjson.com/products",
    {}
  );

  console.log(error, data, loading);
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection : "column",  alignContent:"center", alignItems:"center"}}>
      <h1>Use fetch hook</h1>
      {loading ? (
        <div>Loading data please Wait ... </div>
      ) : data && data.products && data.products.length > 0 ? (
        data.products.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))
      ) : null}
    </div>
  );
};

export default useFetchHookTest;
