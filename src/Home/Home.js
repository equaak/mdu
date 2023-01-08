import './Home.css'
import Cover1 from './article-cover.jpg'
import Cover2 from './article-cover2.png'
import Cover3 from './article-cover3.jpg'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
const Home = observer(({lang}) => {
  return(
    <main className='home-page'>
      <div className='container'>
        <div className='article'>
          <Link to='/articles/Desertification of the Earth'>
            {lang.lang === 'Ru' ? <p className='article-title'>
              Опустынивание Земли
            </p> : <p className='article-title'>
              Desertification of the Earth
            </p>}
          </Link>
          <div className='article-cover'>
            <img alt='' src={Cover1} className='cover-img'></img>
          </div>

        </div>
        <div className='article'>
          <Link to='/articles/Ice Caps'>
            {lang.lang === 'Ru' ? <p className='article-title'>
              Лядники
            </p> : <p className='article-title'>
              Ice Caps
            </p>}
          </Link>
          <div className='article-cover'>
            <img alt='' src={Cover2} className='cover-img'></img>
          </div>

        </div>
        <div className='article'>
          <Link to='/articles/Global Warming Causes'>
            {lang.lang === 'Ru' ? <p className='article-title'>
              Последствия глобального потепления
            </p> : <p className='article-title'>
              Global Warming Causes
            </p>}
          </Link>
          <div className='article-cover'>
            <img alt='' src={Cover3} className='cover-img'></img>
          </div>

        </div>
      </div>
    </main>
  )
})



export default Home;