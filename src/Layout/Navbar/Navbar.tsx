import './Navabr.scss'
import { Link } from 'react-router'

export const Navbar = () => {
  return (

    <div className="navbarMainWrap">
        <Link to="/" className="logoNavbarLink">
      <img src="/img/logoHeal.svg" alt="healLogo" className="navbarLogo" /> 
      </Link> 
    <div className="navbarBack">


    <div className='navbarWrap'>
        <Link className='navbarLink left' to="/our-links">
        Волонтерські організації 
        </Link>
        <Link className='navbarLink' to="/experience">
        Досвід людей
        </Link>
        <Link className='navbarLink right' to="/add-your-exp">
        Список заяв
        </Link>
    </div>
    </div>
    </div>
  )
}
