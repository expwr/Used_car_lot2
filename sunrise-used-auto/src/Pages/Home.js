import React from "react";
import ImageSlider from "../Components/Imageslider"
import { SliderData } from "../Components/SliderData"

function Home() {
  return (
    <ImageSlider slides={SliderData} />
  );
}

export default Home;