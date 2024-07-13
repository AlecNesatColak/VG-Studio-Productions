import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function HomePageLayout({children}) {
  return (
    <>
    <Navbar/>
    <div className='layout'>{children}</div>
    <Footer/>
    </>
    
  )
}

export default HomePageLayout