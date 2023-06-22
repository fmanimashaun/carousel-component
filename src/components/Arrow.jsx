import { useContext } from 'react';
import { SliderContext } from '../hooks/sliderContext';
import Styles from '../assets/css/arrow.module.css';
import Left from '../assets/img/left.svg';
import Right from '../assets/img/right.svg';

const Arrow = () => {
  const { activeSlider, nextSlider, prevSlider } = useContext(SliderContext);
  return (
    <div
      className={
        activeSlider === 0
          ? `${Styles.arrow} ${Styles.left}`
          : activeSlider === 2
          ? `${Styles.arrow} ${Styles.right}`
          : `${Styles.arrow}`
      }>
      <button
        className={Styles.arrow__left}
        hidden={activeSlider === 0 ? true : false}
        onClick={() => prevSlider()}>
        <img src={Left} alt="left icon" />
      </button>
      <button
        className={Styles.arrow__right}
        hidden={activeSlider === 2 ? true : false}
        onClick={() => nextSlider()}>
        <img src={Right} alt="right icon" />
      </button>
    </div>
  );
};

export default Arrow;
