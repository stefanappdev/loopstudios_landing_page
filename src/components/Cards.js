

import React from 'react'
import '../styles/Cards.css'

const Cards = () => {
  return (
  <div>
    <main>
      <section id="Header">
        <div id="Header-logo_and_Nav">
            
            <span class="logo" id="loopstudios-Header-logo">
              loopstudios
            </span>

            
                  <div class="Navbar" id="Header-Nav-Desktop">
                    <nav  >
                    <a href="#">About</a>
                    <a href="#">Events</a>
                    <a href="#">Products</a>
                    <a href="#">Careers</a>
                    <a href="#">Support</a>
                    </nav>
                  </div>


                  <div class="dropdown">
                      <span><img src='/images/icons/icon-hamburger.svg'/></span>
                      <div class="dropdown-content">
                      <p>About</p>
                      <p>Events</p>
                      <p>Products</p>
                      <p>Careers</p>
                      <p>Support</p>
                      </div>
                  </div>



                 
              
        </div>

        <div id='Header-Promo'>
                <p class='Header-Promo-text'>
                  IMMERSIVE EXPERIENCES THAT DELIVER
                </p> 
        </div>
      </section>

      <br/>
      <br/>

      <section id='Ad-section'>

          <div id="VR-img-container">
              <img alt="A man wearing VR helmet" src='/images/image-interactive.jpg' id='VR-img'/>
          </div>

      </section>
      

      <section id='Creations'>
        
        
           <h2> OUR CREATIONS</h2>

        <div id='Creation-imgs-container'>

          
           
                <div class='Creation-img' id='img1-container'>
                 
                  <a>
                      <p>DEEP EARTH</p>
                 </a>
                   

                </div>
            
           



            <div class='Creation-img' id='img2-container'>
                
                
                <a>
                  <p>NIGHT ARCADE</p>
                </a>
                        
            </div>


            <div class='Creation-img' id='img3-container'>

              <a>
                <p>SOCCER TEAM VR</p>
              </a>

            </div>



            <div class='Creation-img' id='img4-container'>

              <a>
                <p>THE GRID </p>
              </a>
            
            </div>


            <div class='Creation-img' id='img5-container'>

              <a><p>FROM UP ABOVE VR</p></a>
            

            </div>



            <div class='Creation-img' id='img6-container'>

              <a><p>POCKET BOREALIS</p></a>
            

            </div>



            <div class='Creation-img' id='img7-container'>

             <a><p>THE CURIOSITY</p></a> 
          
            </div>


            <div class='Creation-img' id='img8-container'>
              <a><p>MAKE IT FISHEYE</p></a>
            </div>
        </div>


      
      </section>

      <br/>
      <br/>


      <footer id='footer-section' >
         <div id='socials_and_footer-logo'>
          <span id='loopstudios-footer-logo'>loopstudios</span>

          <span id='loopstudios-socials'>
              <img alt="Follow us on Facebook" src='/images/icons/icon-facebook.svg'/>
              <img alt="Follow us on Twitter" src='/images/icons/icon-twitter.svg'/>
              <img alt="Follow us on pinterest"  src='/images/icons/icon-pinterest.svg'/>
              <img alt="Follow us on Instagram" src='/images/icons/icon-instagram.svg' />
          </span>

        </div>

  
        </footer>
       


    </main>
    </div>
  )}

export default Cards