import { createContext, useState } from "react";

const SliderContext = createContext();

const SliderProvider = ({ children }) => {
  const [activeSlider, setActiveSlider] = useState(0);

  const nextSlider = () => {
    setActiveSlider(activeSlider + 1);
  };

  const prevSlider = () => {
    setActiveSlider(activeSlider - 1);
  };

  const handleSlider = (index) => {
    setActiveSlider(index);
  }

  return (
    <SliderContext.Provider value={{ activeSlider, nextSlider, prevSlider, handleSlider }}>
      {children}
    </SliderContext.Provider>
  );
};

export { SliderProvider, SliderContext };