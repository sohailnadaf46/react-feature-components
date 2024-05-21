import React, { useEffect, useState } from "react";
import "./style.css";

//first we have to display some data for eg in this the first is 20 and when I click the button the additionnal data should appear until 100 and then the button which I clicked previously it should be disabled
//imp count state whenever its clicked it increases the count as 1 and also in the setter of the products it rerenders the previous data and the  new data therby always data getting stored and 

//dependency as the count at its the main that rerenders 



const ShowMoreData = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        );

        const responseData = await response.json();

        if (
          responseData &&
          responseData.products &&
          responseData.products.length
        ) {
          setProducts((prevData) => [...prevData, ...responseData.products]);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [count]);
  
  useEffect(() =>{
    
    if(products.length === 100){
      setDisabledButton(true)
    }
  },[products])



  if (loading) {
    return <div>loading data! please wait</div>;
  }


  return (
    <>
      <div className="load-more-container">
        <div className="product-container">
          {products && products.length
            ? products.map((item) => (
                <div className="product" key={item.id}>
                  <img src={item.thumbnail} alt="thumbnail" />
                  <p>{item.title}</p>
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="button-container">
        <button disabled={disabledButton} onClick={() => setCount(prevCount => prevCount + 1)}>Load More</button>
      </div>
        {
          disabledButton ? <p style={{textAlign:"center"}}>You have reached the limit of 100</p> :null
        }
    </>
  );
};

export default ShowMoreData;
