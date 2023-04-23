import React from 'react'
import Navbar1 from './components/Navbar1'
import Footer from './components/Footer'
import Content from './components/Content';

function Home() {
  return (
    <>
      <Navbar1 name="Shruti" logo="https://i.postimg.cc/vBd2MN55/5cb480cd5f1b6d3fbadece79.png" button5="Get Started" />
      <Content />
      <Footer />
    </>
  )
}

export default Home
