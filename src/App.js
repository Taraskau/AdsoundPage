import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {Homepage} from './Pages/Homepage';
import {About} from './Pages/Aboutpage';
import {Blog} from './Pages/Blogpage';
import {Notfoundpage} from './Pages/Notfoundpage';
import { Rentpage } from './Pages/Rentapage';
import bgImage from './video/Tomorrowland3.mp4'

function App() {
  return (
    <>
   <div className='App'>
   <video autoPlay muted loop>
    <source src={bgImage} type="video/mp4"/>
   </video>
   
    <header >
     <Link className='header' to="/">Main</Link>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link className='header' to="/posts">Аренда комплектов</Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link className='header' to="/about">Портфолио</Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link className='header' to="/renta">Дополнительно</Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link className='header' to="/*">Контакты</Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <h1 className='Header'>Работаем круглосуточно</h1>
    </header>
        <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<About />} />
      <Route path='/posts' element={<Blog  />} />
      <Route path='/renta' element={<Rentpage />} />
      <Route path='*' element={<Notfoundpage />} />
    </Routes>
    </div>
    <body>
   

    
    
    </body>
    <footer>
      <nav>
      Часы работы: пн-вс круглосуточно
          <h1>ADSOUND </h1>
          <p> <strong>тел.+375291446292</strong></p>
          <br></br>
          
      </nav>
    </footer>
  
    
    
    </>
  );
}

export default App;
