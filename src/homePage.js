//DO NOT CHANGE ANYTHING IN THIS FILE//
// This file is responsible for loading the home page
// Image path for homepage (use relative path so it works without a bundler)
//Helper functions
import {
  createHeader,
  createElement,
  createImage,
} from "./utilityRenderFunctions.js";

//image render according to Parcel's official documentation recommends
const homePageImage = new URL ("../images/homePage.png", import.meta.url).href;

//Renders home page
const renderHomePage = () => {
  //Gets main element
  const main = document.querySelector("main");
  main.innerHTML = "";

  //Creates header element
  const header = createHeader("h1", "Study Night", "home_header");

  //Creates subheader element
  const subHeading = createElement(
    "h2",
    "A Digital Study Solution for the Modern World"
  );

  //Creates elements
  const image = createImage(homePageImage, "Desk of laptops"); 
  //image.src=homePageImage;
  //Container for elements
  const homeContainer = document.createElement("div");
  homeContainer.className = "homeContainer";

  homeContainer.append(header, subHeading, image);
  main.append(homeContainer);
};

export { renderHomePage };
