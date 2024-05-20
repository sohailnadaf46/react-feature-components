import React from "react";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/starrating";
import ImageSlider from "./components/image-slider";
export default function App(){
  return(
    <div className="App">
       {/* Accordian component */}
      { <Accordian /> }
       {/* random_color */}
       {/* <RandomColor /> */}
       {/* start rating
      <StarRating  noOfStars={10}/> */}
      
      {/* image slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}/> */}
    </div>
  )
}