import Carousel from './components/Carousel';
import { SliderProvider } from './hooks/sliderContext';
import './App.css';

const App = () => (
  <SliderProvider>
    <Carousel />
  </SliderProvider>
);

export default App;
