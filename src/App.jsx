import { useState, useEffect } from 'react'
import NavBar from "./NavBar"
import Header from './Header'
import MainBody from "./MainBody"
import Footer from "./Footer"
import Button from "./Button"
import CartWidget from "./CartWidget"
function App() {

  const [showNavBar, setShowNavBar] = useState (false)
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('nav-visible', showNavBar);
  }, [showNavBar]);
  return (
    <>
      <div className={`main-content ${showNavBar ? 'blurred' : ''}`}>
      <Header />
      <MainBody/>
      <Footer />
      <CartWidget></CartWidget>
    </div>

      <Button opened={opened} setOpened={setOpened} setShowNavBar={setShowNavBar} showNavBar={showNavBar}></Button>
      <NavBar esVisible = {showNavBar}></NavBar>
  
    </>
  )
}

export default App
