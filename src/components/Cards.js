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

      
      <section id='Adverts'>
        
        <div id="VR-img-container">
          <img alt="A man wearing VR helmet" src='/images/image-interactive.jpg' id='VR-img'>

          </img>

        </div>

      
      </section>


      <section id='Creations'>
        
        
        <h2> OUR CREATIONS</h2>

        <div id='creations-imgs'>

          

            <div class='grid-element' id='img1-container'>

              <p>DEEP EARTH</p>

            </div>



            <div class='grid-element' id='img2-container'>

             

            <p>NIGHT ARCADE</p>

                        
            </div>


            <div class='grid-element' id='img3-container'>

              <p>SOCCER TEAM VR</p>
            

            </div>



            <div class='grid-element' id='img4-container'>

              <p>THE GRID </p>
            
            </div>


            <div class='grid-element' id='img5-container'>

              <p>FROM UP ABOVE VR</p>
            

            </div>



            <div class='grid-element' id='img6-container'>

              <p>POCKET BOREALIS</p>
            

            </div>



            <div class='grid-element' id='img7-container'>

              <p>THE CURIOSITY</p>
            

            </div>



            <div class='grid-element' id='img8-container'>

              <p>MAKE IT FISHEYE</p>
            

            </div>


        </div>


      
      
      </section>
    </div>

  </main>

  </React.Fragment>


  )
}

export default Cards