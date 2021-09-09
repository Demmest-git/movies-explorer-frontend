import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__info">
          <p className="about-me__name">Дмитрий Паскидов</p>
          <p className="about-me__occupation">Фронтенд-разработчик, 23 года</p>
          <p className="about-me__bio">Родился в Уфе. Закончил обучение на бакалавра в УГАТУ по специальности "Системный анализ и управление". 
          На магистратуре училился также в УГАТУ по специальности "Инфокоммуникационные технологии и системы связи". В данный момент работаю в РСХБ-Интех тестировщиком.</p>
          <ul className="about-me__list">
            <li className="about-me__list-item">
              <a className="about-me__link" href="https://vk.com/id55787494" target="_blank" rel="noreferrer">VK</a>
            </li>
            <li className="about-me__list-item">
              <a className="about-me__link" href="https://github.com/Demmest-git" target="_blank" rel="noreferrer">GitHub</a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" alt="фотография" src={photo} />
      </div>
    </section>
  )
}

export default AboutMe;