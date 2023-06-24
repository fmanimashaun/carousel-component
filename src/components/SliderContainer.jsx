import { useEffect, useRef, useContext } from 'react';
import { SliderContext } from '../hooks/sliderContext';
import Styles from '../assets/css/carousel.module.css';

// Import all images from the sliders folder
const importAll = (r) => r.keys().map(r);
const sliderImgs = importAll(
  require.context('../assets/img/sliders', false, /\.(png|jpe?g|svg)$/),
);

const SliderContainer = () => {
  // Get the active slider from the context
  const { activeSlider } = useContext(SliderContext);

  // Create a ref to the carousel__contents element
  const carouselRef = useRef();

  // Set the left property of carousel__contents
  useEffect(() => {
    const handleResize = () => {
      const slides = carouselRef.current.children;
      const slideWidth = slides[0].getBoundingClientRect().width;

      // Set the left property of carousel__contents
      carouselRef.current.style.transform = `translateX(${-activeSlider * slideWidth}px)`;

      // Set the left property of each slide
      Array.from(slides).forEach((slide, index) => {
        slide.style.left = `${slideWidth * index}px`;
      });

      // Set the height of carousel__contents
      const ro = new ResizeObserver((entries) => {
        for (let entry of entries) {
          carouselRef.current.style.height = `${entry.target.offsetHeight}px`;
        }
      });

      // Observe the first slide
      ro.observe(slides[0]);

      // Cleanup function to avoid memory leaks
      return () => ro.disconnect();
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [activeSlider]);

  return (
    <div className={Styles.carousel__wrapper}>
      <ul ref={carouselRef} className={Styles.carousel__contents}>
        {sliderImgs.map((img, index) => (
          <li
            key={index}
            className={
              activeSlider === index
                ? `${Styles.carousel__item} ${Styles.active}`
                : `${Styles.carousel__item}`
            }>
            <img src={img} alt={`slider ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SliderContainer;
