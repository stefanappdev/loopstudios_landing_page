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
                 
                  <a>
                      <p>DEEP EARTH</p>
                 </a>
                   

                </div>
            
           



            <div class='grid-element' id='img2-container'>
                
                
                <a>
                  <p>NIGHT ARCADE</p>
                </a>
                        
            </div>


            <div class='grid-element' id='img3-container'>

              <a>
                <p>SOCCER TEAM VR</p>
              </a>

            </div>



            <div class='grid-element' id='img4-container'>

              <a>
                <p>THE GRID </p>
              </a>
            
            </div>


            <div class='grid-element' id='img5-container'>

              <a><p>FROM UP ABOVE VR</p></a>
            

            </div>



            <div class='grid-element' id='img6-container'>

              <a><p>POCKET BOREALIS</p></a>
            

            </div>



            <div class='grid-element' id='img7-container'>

             <a><p>THE CURIOSITY</p></a> 
            

            </div>



            <div class='grid-element' id='img8-container'>

              <a><p>MAKE IT FISHEYE</p></a>
            

            </div>


        </div>


      
      
      </section>


      <br/>
      <br/>

      <footer id='footer-section' >
         <div id='socials_and_footer-logo'>
          <span id='loopstudios-footer-logo'>loopstudios</span>
          <img alt="Follow us on Facebook" src='/images/icons/icon-facebook.svg'></img>
          <img alt="Follow us on Twitter" src='/images/icons/icon-twitter.svg'></img>
          <img alt="Follow us on pinterest"  src='/images/icons/icon-pinterest.svg'></img>
          <img alt="Follow us on Instagram" src='/images/icons/icon-instagram.svg'></img>
        </div>

  
        </footer>
       

    </div>

  </main>

  </React.Fragment>


  )
}

export default Cards