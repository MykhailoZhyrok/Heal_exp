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
  
       
        <Link className='navbarLink left' to="/">
          Головна
        </Link>
      
     
        
        <Link className='navbarLink ' to="/our-blanks">
        Список заяв
        </Link>
        <Link className='navbarLink right' to="/our-links">
        Волонтерські організації 
        </Link>
    </div>
    </div>
    </div>
  )
}
