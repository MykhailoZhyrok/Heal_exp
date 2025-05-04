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
            <Link to="/our-links" className='mainPageButton'>
            Волонтерські організації
            </Link>
            <Link to="/experience" className='mainPageButton'>
            Досвід людей
            </Link>
            <Link to="/add-your-exp" className='mainPageButton'>
            Поділитись досвідом
            </Link>
           
        </div>

            <About/>
        
    </div>
  )
}
