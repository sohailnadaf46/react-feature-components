import React from "react";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/starrating";
import ImageSlider from "./components/image-slider";
import ShowMoreData from "./components/load-more-data";
import TreaView from "./components/tree-structure-view/Index.jsx";
import menus from "./components/tree-structure-view/data";
import CodeGenerator from "./components/qr-code-generator/index.jsx";
import LightDark from "./components/Light-Dark-Mode/index.jsx";
import ScrollIndicator from "./components/scroll-indicator/index.jsx";
import Tabs from "./components/custom-tabs/Tabs.jsx";
import Modeltest from "./components/custom-model-popup/Modeltest.jsx";
import GithubProfileFInder from "./components/custom-model-popup/Github-Profile-Finder/GithubProfileFInder.jsx";
import SearchAutocomplete from "./components/Search- AutoComplete/SearchAutocomplete.jsx";
import TicToe from "./components/tic-tac-toe/index.jsx";
export default function App(){
  return(
    <div className="App">
       {/* Accordian component */}
      {/* { <Accordian /> } */}
       {/* random_color */}
       {/* <RandomColor /> */}
       {/* start rating  */}
      {/* <StarRating  noOfStars={10}/> */}
      
      {/* image slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}/> */}
{/* 
        <ShowMoreData /> */}

        {/*Tree View Component || menu UI component || recursive  menu  */}
        {/* <TreaView menus={menus}/> */}

        {/* QR-Code Generator */}
        {/* <CodeGenerator /> */}
       

        {/* ligt dark mode using react */}
        {/* <LightDark /> */}

        {/* custom scroll indicator */}
        {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}

        {/* custom tabs to show dynamic content */}
        {/* <Tabs /> */}

        {/* Custom Model popup*/}
        {/* <Modeltest /> */}

        {/* github profile finder */}
        {/* <GithubProfileFInder /> */}

        {/* search autcomplete */}
        {/* <SearchAutocomplete /> */}

        {/* tic tac toe */}
        <TicToe />
    </div>
  )
}