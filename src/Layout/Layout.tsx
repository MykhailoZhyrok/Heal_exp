import React, { ReactNode } from 'react';
import { Navbar } from './Navbar/Navbar'
import { Footer } from './Footer/Footer'


type LayoutProps = {
    children: ReactNode;
  };
  
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>

    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}
