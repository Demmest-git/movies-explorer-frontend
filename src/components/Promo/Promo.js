import promo from '../../images/promo-logo.svg';
import './Promo.css';

function Promo(props) {
  return (
    <section className="promo" id="promo">
      <img className="promo__logo" alt="promo logo" src={promo} />
      <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
      <div className="promo__links">
        <a href="#promo" className="promo__link">О проекте</a>
        <a href="#promo" className="promo__link">Технология</a>
        <a href="#promo" className="promo__link">Студент</a>
      </div>
      
    </section>
  )
}

export default Promo;