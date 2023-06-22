import { useContext } from 'react';
import { SliderContext } from '../hooks/sliderContext';
import Styles from '../assets/css/dotnav.module.css';

const DotNav = () => {
  const { activeSlider, handleSlider } = useContext(SliderContext);
  return (
    <div className={Styles.dots}>
      <button
        className={
          activeSlider === 0
            ? `${Styles.dot} ${Styles.active}`
            : `${Styles.dot}`
        }
        onClick={() => handleSlider(0)}></button>
      <button
        className={
          activeSlider === 1
            ? `${Styles.dot} ${Styles.active}`
            : `${Styles.dot}`
        }
        onClick={() => handleSlider(1)}></button>
      <button
        className={
          activeSlider === 2
            ? `${Styles.dot} ${Styles.active}`
            : `${Styles.dot}`
        }
        onClick={() => handleSlider(2)}></button>
    </div>
  );
};

export default DotNav;
