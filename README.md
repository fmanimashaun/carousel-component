# Carousel Component Project
## Overview
The Carousel Component is more than just a slideshow component. It's a testament to the power of React and modern JavaScript, showcasing multiple items or images in an interactive and engaging manner. This project features intuitive navigation controls, including arrow buttons for slide-through navigation and dotted buttons for quick slide selection.

## Features
- **Contextual Slide Navigation:** The Carousel Component leverages the power of React's Context API to manage the state of the active slide. This ensures a seamless scrolling experience, with the left arrow becoming hidden at the first slide and the right arrow disappearing at the last slide.

- **Dynamic Dotted Button Navigation:** The Carousel Component doesn't just provide static navigation dots. Each dot is dynamically generated and linked to a specific slide, allowing users to jump to any slide with a single click. This enhances the user's control and navigation experience.

- **Responsive Design with CSS Modules:** The Carousel Component is not just responsive, it's stylish. Using CSS Modules, each component has its own CSS file, ensuring styles are scoped to the component and reducing the risk of style conflicts.


> [Live Demo Link](https://fmanimashaun.github.io/carousel-component//)

## Demo

![screenshot](./src/assets/img/demo.gif)

## Installation
To install and run this project locally, you'll need to have Node.js and npm installed. Follow these steps:

Clone the repository: `git clone https://github.com/fmanimashaun/carousel-component.git
Navigate to the project folder: `cd carousel-component`
Install the dependencies: `npm install`
Start the project: `npm start`

## Code Highlights

This project demonstrates advanced React techniques and best practices. Here are some highlights:
- **Context API for State Management:** The `SliderContext` and `SliderProvider` components demonstrate the use of React's Context API for state management. This allows child components to access and modify the active slide without prop drilling.
```javascript
// SliderContext.js file
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

```

- **Dynamic Image Import:** The `SliderContainer` component demonstrates how to dynamically import images using Webpack's require.context function. This allows the carousel to automatically include all images in the sliders folder.

```javascript 
// Import all images from the sliders folder
const importAll = (r) => r.keys().map(r);
const sliderImgs = importAll(
  require.context('../assets/img/sliders', false, /\.(png|jpe?g|svg)$/),
);

```

- **Responsive Design with CSS Modules:** The project uses CSS Modules to ensure styles are scoped to the component, reducing the risk of style conflicts. This is demonstrated in the `Arrow`, `DotNav`, and `SliderContainer` components.

```javascript
import Styles from '../assets/css/carousel.module.css';
```

## Author

👤 **Engr. Animashaun Fisayo**

- [GitHub](https://github.com/fmanimashaun)
- [Twitter](https://twitter.com/fmanimashaun)
- [LinkedIn](https://www.linkedin.com/in/fmanimashaun/)
- [Website](https://fmanimashaun.com)
## Contributing
We welcome contributions from the community. If you'd like to contribute, please fork the repository and make your changes, then open a pull request to propose your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.