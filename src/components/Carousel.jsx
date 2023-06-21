import Styles from '../assets/css/carousel.module.css';
import Arrow from './Arrow';
import DotNav from './DotNav';

const Carousel = () => {
  return (
    <div className={Styles.carousel}>
      <Arrow />
      <DotNav />
    </div>
  )
}

export default Carousel
