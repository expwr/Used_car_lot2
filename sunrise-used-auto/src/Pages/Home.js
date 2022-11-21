import React from "react";
import ImageSlider from "../Components/Imageslider"
import { SliderData } from "../Components/SliderData"

function Home() {
  return (
    <div className="Slider_div">
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default Home;