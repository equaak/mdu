import { observer } from "mobx-react";
import './About.css'
import Logo from '../Template/Logo.png'
import NIS from './Nis.png'
const About = observer(({lang}) => {
  return(
    <main className="about-content">
      <div className="container">
        <div className="logo-container">
          <img src={Logo} alt='' className='logo-img'/>
        </div>
        <div className="nis-container">
          <img src={NIS} alt='' className='nis-img' />
        </div>

        <div className="about-container">
          {lang.lang == 'Ru' ? <p className="about-text">
          Проект учеников Назарбаев Интеллектульной Школы IB
          </p> : <p className="about-text">
          NISA Made project
          </p>}
          <br></br>
          <br></br>
          {lang.lang == 'Ru' ? <p className="about-text">Ноев ковчег - лучшее и удобное для пользователя руководство по питанию проблемой глобального потепления.</p> : <p className="about-text">Noah’s Ark — the best and User friendly guide to the Global Warming problem feed.</p>}
          <br></br>
          <br></br>
          {lang.lang == 'Ru' ? <p className="about-text">Проект MDU - химия и география, найденные в написанных авторами проекта статьях.</p> : <p className="about-text">MDU project — chemistry and geography found in the written articles by authors of the project.</p>}
          <br></br>
          <br></br>
          {lang.lang == 'Ru' ? <p className="about-text">Мы проделали огромную работу над ним, поэтому думаем, что он вам понравится!</p> : <p className="about-text">We made a huge work on it, so we think you’ll enjoy it!</p>}
        </div>
      </div>
    </main>
  )
})


export default About;