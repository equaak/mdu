import { Outlet } from "react-router-dom";
import Logo from './Logo.png'
import './Template.css'
import Menu from './Menu.png'
import Rect from './Menu-rect.png'
import Arrow from './Menu-arrow.png'
import Twitter from './Twitter.png'
import Instagram from './Instagram.png'
import Facebook from './Facebook.png'
import Search from './Search.png'
import { Link } from "react-router-dom";
import User from './user.png'
import { observer } from "mobx-react";
const Template = observer(({lang}) => {


  const handleClickRu = () => {
    lang.toggleRu()
    console.log(lang.lang)
  }
  const handleClickEn = () => {
    lang.toggleEn()
    console.log(lang.lang)
  }
  return(
    <main>
      <header className='up'>
        <div className='container'>
          <div className='side-menu'>
            <div className='container'>
              <div className='company-logo'>
                <Link to='/'>
                  <img src={Logo} className='logo-image' alt=""></img>
                </Link>
              </div>
              {lang.lang === 'Ru' ?
                <p className='pages-title'>Страницы
                </p> :
                <p className='pages-title'> Pages
                </p>
              }
              <div className='pages-part-container'>
                <div className='menu-controls'>
                  <img src={Rect} className='menu-rect' alt=""/>
                  <img src={Arrow} className='menu-arrow' alt=""/>
                </div>
                <div className='pages'>
                  <Link to='main'>
                    <div className='menu-part'>
                      <img src={Menu} className='menu-img' alt=""/>
                      {lang.lang === 'Ru' ? <p className='menu-label'>
                        Лента новостей
                      </p> : <p className='menu-label'>
                        News feed
                      </p>}
                    </div>
                  </Link>
                  <Link to='main'>
                    <div className='menu-part'>
                      <img src='' className='menu-img' alt=""/>
                      {lang.lang === 'Ru' ? <p className='menu-label'>
                        Исследования
                      </p>: <p className='menu-label'>
                        Researcher's
                      </p>}
                    </div>
                  </Link>
                  <Link>
                    <div className='menu-part'>
                      <img src='' className='menu-img' alt=""/>
                      {lang.lang === 'Ru' ? <p className='menu-label'>
                        Сообщество
                      </p> : <p className='menu-label'>
                        Community
                      </p>}
                    </div>
                  </Link>
                </div>
              </div>
              {lang.lang === 'Ru' ? <p className='pages-title'>
                Благодарности
              </p> : <p className='pages-title'>
                Credits
              </p>}
              <div className='credits-part-container'>
                <Link to='/about'>
                  <div className='credit-part'>
                    <div className='grey-circle' />
                    {lang.lang === 'Ru' ? <p className='menu-label'>
                      О Проекте
                    </p> : <p className='menu-label'>
                      About Project
                    </p>}
                  </div>
                </Link>
                <Link to='/about'>
                  <div className='credit-part'>
                    <div className='grey-circle' />
                    {lang.lang === 'Ru' ? <p className='menu-label'>
                      Авторы
                    </p> : <p className='menu-label'>
                      Authors
                    </p>}
                  </div>
                </Link>
              </div>
              <footer className='menu-footer'>
                <p className='footer-title'>
                  © 2022 Noah’s Ark
                </p>
              </footer>
            </div>
          </div>
          <div className='content'>
            <div className='container'>

              <header className='content-header'>
                <div className='menu'>
                  <button onClick={handleClickRu}>Ru</button>
                  <button onClick={handleClickEn}>Eng</button>
                  <div className='search-bar'>
                    <img src={Search} alt='' className='search-img'/>
                    <input className='search-input' placeholder={lang.lang == 'Ru' ? 'Поиск' : 'Search'}>
                    </input>
                  </div>
                  <div className='user-container'>
                    <img src={User} alt="" className='user-img'/>
                    <p className="user-title">
                      User
                    </p>
                  </div>
                </div>
              </header>


              <Outlet />
            </div>
          </div>
        </div>
      </header>
      <footer className='page-footer'>
        <div className='container'>
          <div className='footer-right'>
            <q className='footer-quote'>
              The world turns gray, the air grows cool, the fog blows in. Only at evening can you really value home.
            </q>
            <p className='quote-author'>
              Faust
            </p>
            {lang.lang === 'Ru' ? <p className='authors'>
              Сайт разработан Муратбеком Диас,
              Дизайн создан Джек Джейсоном
            </p> : <p className='authors'>
              Developed by Muratbek Dias aka DiasProfile,
              Designed by Jack Jaysen
            </p>}
          </div>
          <div className='footer-left'>
            <div className='social-container'>
              <div className='social-media'>
                <img src={Twitter} alt="" className='social-img'/>
              </div>
              <div className='social-media'>
                <img src={Instagram} alt="" className='social-img'/>
              </div>
              <div className='social-media'>
                <img src={Facebook} alt="" className='social-img'/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
});


export default Template;