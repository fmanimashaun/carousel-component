import Styles from '../assets/css/arrow.module.css';
import Left from '../assets/img/left.svg';
import Right from '../assets/img/right.svg';

const Arrow = () => (
  <div className={`${Styles.arrow} ${Styles.left}`}>
    <button className={Styles.arrow__left} hidden>
      <img src={Left} alt="left icon" />
    </button>
    <button className={Styles.arrow__right}>
      <img src={Right} alt="right icon" />
    </button>
  </div>
);

export default Arrow;
