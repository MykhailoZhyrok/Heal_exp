import './Main.scss'
import { Link } from 'react-router'
import { About } from './About/About'


export const Main = () => {
  return (
    <div>


      <div className='mainBanner'>
        <h1 className="mainBannerTitle">
          Пошук зниклих безвісти/полонених
        </h1>

        <p className="mainBannerDesc">
          Ми надаємо посилання на офіційні служби та волонтерські організації, що допомагають у пошуку людей.
        </p>
      </div>

      <div className="mainPageButtons">
        <a href="/files/algoritm.pdf" download="algoritm.pdf" className='mainPageButton'>
          Алгоритм дій
        </a>
        <a href="/files/pamyatka.pdf" download="pamyatka.pdf" className='mainPageButton'>
          Пам'ятка
        </a>
        <Link to="/our-links" className='mainPageButton'>
          Волонтерські організації
        </Link>
        <Link to="/our-blanks" className='mainPageButton'>
          Cписок заяв
        </Link>
        <a href="/files/контактнаінформаціязрозшуку.pdf" download="контактнаінформаціязрозшуку.pdf" className='mainPageButton'>
        Контакти ГУНП з розшуку осіб
        </a>
        
        
        <Link to="/experience" className='mainPageButton'>
          Досвід людей
        </Link>
      

      </div>

      <About />

    </div>
  )
}
