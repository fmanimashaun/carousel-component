import { useContext } from 'react';
import { SliderContext } from '../hooks/sliderContext';
import Styles from '../assets/css/carousel.module.css';
import SliderImg from '../assets/img/sliders';

const SliderContainer = () => {
    const { activeSlider} = useContext(SliderContext);
  return (
    <div className={Styles.carousel__wrapper}>
      <ul className={Styles.carousel__contents}>
        <li
          className={
            activeSlider === 0
              ? `${Styles.carousel__item} ${Styles.active}`
              : `${Styles.carousel__item}`
          }>
          <img src="assets/img/image1.jpg" alt="slider 1" />
        </li>
        <li className={
            activeSlider === 1
              ? `${Styles.carousel__item} ${Styles.active}`
              : `${Styles.carousel__item}`
          }>
          <img src="assets/img/image2.jpg" alt="slider 2" />
        </li>
        <li className={
            activeSlider === 2
              ? `${Styles.carousel__item} ${Styles.active}`
              : `${Styles.carousel__item}`
          }>
          <img src="assets/img/image3.jpg" alt="slider 3" />
        </li>
      </ul>
    </div>
  );
};

export default SliderContainer;
