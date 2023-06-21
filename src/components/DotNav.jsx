import Styles from '../assets/css/dotnav.module.css';

const DotNav = () => (
  <div className={Styles.dots}>
    <button className={`${Styles.dot} ${Styles.active}`}></button>
    <button className={Styles.dot}></button>
    <button className={Styles.dot}></button>
  </div>
);

export default DotNav;
