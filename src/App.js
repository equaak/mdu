import './App.css';
import {Routes, Route} from 'react-router-dom'
import Template from './Template/Template';
import Home from './Home/Home';
import LangController from './Lang';
import Article from './Article/Article';
import About from './About/About';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Template lang={LangController}/>}>
          <Route path='main' element={<Home lang={LangController}/>} />
          <Route path='articles/:name' element={<Article lang={LangController}/>} />
          <Route path='about' element={<About lang={LangController} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
