import Styles from '../assets/css/carousel.module.css';
import Arrow from './Arrow';
import DotNav from './DotNav';
import SliderContainer from './SliderContainer';

const Carousel = () => {
  return (
    <div className={Styles.carousel}>
      <Arrow />
      <SliderContainer />
      <DotNav />
    </div>
  )
}

export default Carousel
