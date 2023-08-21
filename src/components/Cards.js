import React from 'react'
import '../styles/Cards.css'

const Cards = () => {
  return (
  <React.Fragment>

  <main>
    <div id='content-box' >
      <section id='Header'>
          <p id='loopstudios'>loopstudios</p>
          <div id='Header-Promo'>
              <p class='Header-Promo-text'>
                IMMERSIVE EXPERIENCES THAT DELIVER
                </p> 
  
             
          </div>

         <nav id='nav-container'>
            <div class='main-nav' >
              <a href='#'>About</a>
              <a href='#'>Events</a>
              <a href='#'>Products</a>
              <a href='#'>Careers</a>
              <a href='#'>Support</a>
              
            </div>
          </nav>
      </section>
      <section id='Adverts'>Adverts </section>
      <section id='Creations'>Creations</section>
    </div>

  </main>

  </React.Fragment>


  )
}

export default Cards